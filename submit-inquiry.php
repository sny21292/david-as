<?php
/**
 * Jewelry Pricing Inquiry - Email Handler
 * Davidas Design Concepts
 *
 * Receives inquiry form data via AJAX from the jewelry page modal,
 * sends email to davidas.design@yahoo.com.
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

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: $SITE_NAME <noreply@davidas.com>\r\n";
$headers .= "Reply-To: $email\r\n";

$sent = @mail($NOTIFY_EMAIL, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Inquiry sent successfully!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send. Please call us at (336) 790-8214.']);
}
exit;
?>
