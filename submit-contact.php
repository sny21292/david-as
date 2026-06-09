<?php
/**
 * Contact Form - Email Handler
 * Davidas Design Concepts
 */

// ===== CONFIGURATION =====
$NOTIFY_EMAIL = 'davidas.design@yahoo.com';
$SITE_NAME    = 'Davidas Design Concepts';
// ==========================

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

function clean($str) {
    return htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8');
}

$name    = clean($_POST['name'] ?? '');
$email   = clean($_POST['email'] ?? '');
$phone   = clean($_POST['phone'] ?? '');
$service = clean($_POST['service'] ?? '');
$message = clean($_POST['message'] ?? '');

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// Build email
$subject = "New Contact Form Message - $SITE_NAME";

$body = "
<html>
<head>
    <style>
        body { font-family: Verdana, sans-serif; color: #333; font-size: 14px; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a2e0a; color: #ffcc00; padding: 20px; text-align: center; }
        .header h2 { margin: 0; font-size: 18px; }
        .body { background: #fff; padding: 25px; border: 1px solid #ccc; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 8px 0; border-bottom: 1px solid #eee; font-size: 13px; }
        td:first-child { font-weight: bold; width: 140px; color: #666; }
        .message { background: #fffff0; padding: 12px; border: 1px solid #ddd; margin: 10px 0; white-space: pre-wrap; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Contact Message - $SITE_NAME</h2>
        </div>
        <div class='body'>
            <table>
                <tr><td>Name</td><td>$name</td></tr>
                <tr><td>Email</td><td>$email</td></tr>
                <tr><td>Phone</td><td>" . ($phone ?: 'Not provided') . "</td></tr>
                <tr><td>Service Interest</td><td>" . ($service ?: 'Not specified') . "</td></tr>
            </table>

            <h4>Message</h4>
            <div class='message'>$message</div>

            <p style='margin-top:20px; color:#999; font-size:11px;'>
                Submitted on " . date('F j, Y \a\t g:i A') . "
            </p>
        </div>
    </div>
</body>
</html>
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: $SITE_NAME <noreply@davidas.com>\r\n";
$headers .= "Reply-To: $email\r\n";

$sent = @mail($NOTIFY_EMAIL, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please call us at (336) 790-8214.']);
}
exit;
?>
