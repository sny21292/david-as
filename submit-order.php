<?php
/**
 * Gospel Necklace Order Form - Email Handler (Resend API)
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
    echo json_encode(['success' => true, 'message' => 'Order sent successfully.']);
    exit;
}

function clean($str) {
    return htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8');
}

// Get form data
$firstName     = clean($_POST['firstName'] ?? '');
$lastName      = clean($_POST['lastName'] ?? '');
$fullName      = trim("$firstName $lastName");
$email         = clean($_POST['email'] ?? '');
$necklace      = clean($_POST['necklace'] ?? '');
$price         = floatval($_POST['price'] ?? 0);
$customerNotes = clean($_POST['customerNotes'] ?? '');
$address1      = clean($_POST['address1'] ?? '');
$address2      = clean($_POST['address2'] ?? '');
$city          = clean($_POST['city'] ?? '');
$state         = clean($_POST['state'] ?? '');
$zip           = clean($_POST['zip'] ?? '');

// Validate required fields
if (empty($firstName) || empty($lastName) || empty($email) || empty($necklace) || $price <= 0 || empty($address1) || empty($city) || empty($state) || empty($zip)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// Build full address
$fullAddress = $address2 ? "$address1, $address2" : $address1;

// ===== BUILD EMAIL =====
$subject = "New Gospel Necklace Order - $necklace";

$message = "
<html>
<head>
    <style>
        body { font-family: Verdana, sans-serif; color: #333; font-size: 14px; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a2e0a; color: #ffcc00; padding: 20px; text-align: center; }
        .header h2 { margin: 0; font-size: 18px; }
        .body { background: #fff; padding: 25px; border: 1px solid #ccc; }
        .product { background: #f5f5e8; padding: 15px; border-radius: 4px; margin-bottom: 15px; }
        .product h3 { margin: 0 0 5px; color: #1a2e0a; }
        .product .price { font-size: 20px; color: #a88832; font-weight: bold; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 6px 0; border-bottom: 1px solid #eee; font-size: 13px; }
        td:first-child { font-weight: bold; width: 140px; color: #666; }
        .notes { background: #fffff0; padding: 12px; border: 1px solid #ddd; margin: 10px 0; white-space: pre-wrap; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Order - $SITE_NAME</h2>
        </div>
        <div class='body'>
            <div class='product'>
                <h3>$necklace</h3>
                <div class='price'>\$$price</div>
            </div>

            <h4>Customer Information</h4>
            <table>
                <tr><td>Name</td><td>$fullName</td></tr>
                <tr><td>Email</td><td>$email</td></tr>
            </table>
";

// Add customer notes if provided
if (!empty($customerNotes)) {
    $message .= "
            <h4 style='margin-top:15px;'>Customer Notes / Changes</h4>
            <div class='notes'>$customerNotes</div>
    ";
}

$message .= "
            <h4 style='margin-top:15px;'>Shipping Address</h4>
            <table>
                <tr><td>Address</td><td>$fullAddress</td></tr>
                <tr><td>City</td><td>$city</td></tr>
                <tr><td>State</td><td>$state</td></tr>
                <tr><td>ZIP Code</td><td>$zip</td></tr>
            </table>

            <p style='margin-top:20px; color:#999; font-size:11px;'>
                Order submitted on " . date('F j, Y \a\t g:i A') . "
            </p>
        </div>
    </div>
</body>
</html>
";

// Send notification email via Resend
$result = sendResendEmail($NOTIFY_EMAIL, $subject, $message, $email);

// Send confirmation to the customer
$custSubject = "Order Confirmation - Gospel Necklace - $SITE_NAME";
$custMessage = "
<html>
<body style='font-family: Verdana, sans-serif; color: #333; font-size: 14px;'>
    <div style='max-width: 600px; margin: 0 auto; padding: 20px;'>
        <div style='background: #1a2e0a; color: #ffcc00; padding: 20px; text-align: center;'>
            <h2 style='margin:0;'>Thank You for Your Order!</h2>
        </div>
        <div style='background: #fff; padding: 25px; border: 1px solid #ccc;'>
            <p>Dear $fullName,</p>
            <p>Thank you for ordering a <strong>$necklace</strong> from $SITE_NAME.</p>
            <div style='background: #f5f5e8; padding: 15px; margin: 15px 0;'>
                <strong>Order Summary:</strong><br>
                $necklace - \$$price
            </div>
            <p><strong>Shipping To:</strong><br>
            $fullAddress<br>
            $city, $state $zip</p>
            <p>If you have not already, please complete your payment using the Pay Now button on our website.</p>
            <p>If you have any questions, please contact us at (336) 790-8214.</p>
            <p>Warm regards,<br>$SITE_NAME</p>
        </div>
    </div>
</body>
</html>
";

sendResendEmail($email, $custSubject, $custMessage);

echo json_encode(['success' => true, 'message' => 'Order sent successfully.']);
exit;
?>
