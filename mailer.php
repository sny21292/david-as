<?php
/**
 * Resend Email Sender
 * Davidas Design Concepts
 *
 * Reads credentials from config.php (gitignored — copy config.example.php).
 */

if (!file_exists(__DIR__ . '/config.php')) {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Mail is not configured on this server.']);
    exit;
}
require_once __DIR__ . '/config.php';

/**
 * Send email via Resend API
 *
 * @param string $to      Recipient email
 * @param string $subject Email subject
 * @param string $html    HTML body
 * @param string|null $replyTo  Optional reply-to email
 * @return array ['success' => bool, 'message' => string]
 */
function sendResendEmail($to, $subject, $html, $replyTo = null) {
    $payload = [
        'from' => RESEND_FROM_NAME . ' <' . RESEND_FROM_EMAIL . '>',
        'to'   => [$to],
        'subject' => $subject,
        'html'    => $html,
    ];

    if ($replyTo) {
        $payload['reply_to'] = $replyTo;
    }

    $jsonPayload = json_encode($payload);

    // Try cURL first, fall back to file_get_contents
    if (function_exists('curl_init')) {
        $ch = curl_init('https://api.resend.com/emails');
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST           => true,
            CURLOPT_HTTPHEADER     => [
                'Authorization: Bearer ' . RESEND_API_KEY,
                'Content-Type: application/json',
            ],
            CURLOPT_POSTFIELDS => $jsonPayload,
            CURLOPT_TIMEOUT    => 15,
        ]);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error    = curl_error($ch);
        curl_close($ch);

        if ($error) {
            return ['success' => false, 'message' => 'Network error: ' . $error];
        }
    } else {
        // Fallback: file_get_contents
        $opts = [
            'http' => [
                'method'  => 'POST',
                'header'  => "Authorization: Bearer " . RESEND_API_KEY . "\r\n" .
                             "Content-Type: application/json\r\n",
                'content' => $jsonPayload,
                'timeout' => 15,
                'ignore_errors' => true,
            ],
        ];
        $context  = stream_context_create($opts);
        $response = @file_get_contents('https://api.resend.com/emails', false, $context);

        if ($response === false) {
            return ['success' => false, 'message' => 'Network error: unable to reach Resend API.'];
        }

        // Extract HTTP status code from response headers
        $httpCode = 0;
        if (isset($http_response_header[0]) && preg_match('/(\d{3})/', $http_response_header[0], $m)) {
            $httpCode = (int)$m[1];
        }
    }

    if ($httpCode >= 200 && $httpCode < 300) {
        return ['success' => true, 'message' => 'Email sent successfully.'];
    }

    $body = json_decode($response, true);
    $msg  = $body['message'] ?? 'Unknown error (HTTP ' . $httpCode . ')';
    return ['success' => false, 'message' => $msg];
}
