<?php 

// CONTACT FORM with the use of "mail()"

// We are checking of an email has been adressed 

if (isset($_POST['email']) && $_POST['email'] != '') {
    
    // Now we are checking if the email is an ctual email
    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

        // If it works we get our field informations in $_POST // alternative with HTMLspecialchar
        $userName = $_POST['name'];
        $userEmail = $_POST['email'];
        $userSubject = $_POST['subject'];
        $userMessage = $_POST['message'];

        $mailTo = 'romainjalabert.pro@gmail.com';

        $body = 'From : '.$userName."\r\n".'Email : '.$userEmail."\r\n".'Message : '.$userMessage."\r\n";

        // We use the mail() function to send it 
        mail($mailTo, $userSubject, $body);

        $message_sent = true;
        echo 'Message Sent !';

    } else {

        $message_sent = false;
        echo "Email adress format is wrong";

    }
}

?>
