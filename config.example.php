<?php
/**
 * Site Configuration — TEMPLATE
 * Davidas Design Concepts
 *
 * Copy this file to config.php and fill in the real values.
 * config.php is gitignored and must NEVER be committed — this repo is
 * public on GitHub and a committed Resend key gets auto-revoked.
 */

// Resend API key (https://resend.com/api-keys)
define('RESEND_API_KEY', 're_XXXXXXXXXXXXXXXXXXXXXXXXXXXX');

// Sender identity (domain must be verified in Resend)
define('RESEND_FROM_EMAIL', 'noreply@davidas.com');
define('RESEND_FROM_NAME', 'Davidas Design Concepts');

// Where contact/inquiry form notifications are delivered
define('NOTIFY_EMAIL', 'davidas.design@yahoo.com');

// Where Gospel Necklace orders are delivered
define('ORDER_NOTIFY_EMAIL', 'gospel.necklace@yahoo.com');
