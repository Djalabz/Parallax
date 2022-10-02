<?php 

// VALIDATING MAIL FORM FIELDS

if (isset($_POST['email']) && $_POST['email'] != '') {

    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

        $userName = $_POST['name'];
        $userEmail = $_POST['email'];
        $userSubject = $_POST['subject'];
        $userMessage = $_POST['message'];

        $dest = 'romainjalabert.pro@gmail.com';
        $body = '';

        $body = 'From : '.$userName."\r\n";
        $body = 'Email : '.$userName."\r\n";
        $body = 'Message : '.$userName."\r\n";

        mail($dest, $userSubject, $body);

        $message_sent = true;
        var_dump($message_sent);

    } else {

        $message_sent = false;
    }

}

?>
