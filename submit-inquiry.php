<?php
/**
 * Jewelry Pricing Inquiry - Email Handler (Resend API)
 * Davidas Design Concepts
 */

require_once __DIR__ . '/mailer.php';

$NOTIFY_EMAIL = NOTIFY_EMAIL;
$SITE_NAME    = RESEND_FROM_NAME;

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

// Honeypot: hidden "website" field — humans leave it empty, bots fill it.
// Pretend success so bots don't learn to skip the field.
if (!empty($_POST['website'])) {
    echo json_encode(['success' => true, 'message' => 'Inquiry sent successfully!']);
    exit;
}

function clean($str) {
    return htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8');
}

$firstName = clean($_POST['fname'] ?? '');
$lastName  = clean($_POST['lname'] ?? '');
$fullName  = trim("$firstName $lastName");
$email     = clean($_POST['email'] ?? '');
$style     = clean($_POST['style'] ?? '');
$message   = clean($_POST['message'] ?? '');

if (empty($firstName) || empty($lastName) || empty($email) || empty($style)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

$subject = "Pricing Inquiry - Style #$style - $SITE_NAME";

$body = "
<html>
<head>
    <style>
        body { font-family: Verdana, sans-serif; color: #333; font-size: 14px; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a2e0a; color: #ffcc00; padding: 20px; text-align: center; }
        .header h2 { margin: 0; font-size: 18px; }
        .body { background: #fff; padding: 25px; border: 1px solid #ccc; }
        .style-badge { background: #f5f5e8; padding: 15px; border-radius: 4px; margin-bottom: 15px; }
        .style-badge h3 { margin: 0; color: #1a2e0a; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 8px 0; border-bottom: 1px solid #eee; font-size: 13px; }
        td:first-child { font-weight: bold; width: 140px; color: #666; }
        .message { background: #fffff0; padding: 12px; border: 1px solid #ddd; margin: 10px 0; white-space: pre-wrap; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Pricing Inquiry - $SITE_NAME</h2>
        </div>
        <div class='body'>
            <div class='style-badge'>
                <h3>Style #$style</h3>
            </div>

            <h4>Customer Information</h4>
            <table>
                <tr><td>Name</td><td>$fullName</td></tr>
                <tr><td>Email</td><td>$email</td></tr>
            </table>
";

if (!empty($message)) {
    $body .= "
            <h4 style='margin-top:15px;'>Customer Notes</h4>
            <div class='message'>$message</div>
    ";
}

$body .= "
            <p style='margin-top:20px; color:#999; font-size:11px;'>
                Submitted on " . date('F j, Y \a\t g:i A') . "
            </p>
        </div>
    </div>
</body>
</html>
";

$result = sendResendEmail($NOTIFY_EMAIL, $subject, $body, $email);

if ($result['success']) {
    echo json_encode(['success' => true, 'message' => 'Inquiry sent successfully!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send. Please call us at (336) 790-8214.']);
}
exit;
?>
