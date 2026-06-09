<?php
$sent = @mail('sharmasahil00746@gmail.com', 'Test from Davidas Site', 'If you receive this, PHP mail() is working on Hostinger.', 'From: noreply@davidas.com');
echo $sent ? 'Mail sent - check your inbox (and spam folder)' : 'Mail FAILED - PHP mail() is disabled on this server';
?>
