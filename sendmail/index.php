<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if(isset($_POST['name']) && isset($_POST['sendTo']) && isset($_POST['subject']) && isset($_POST['message'])){
		$name = $_POST['name'];
        $email = $_POST['sendTo'];
        $subject = $_POST['subject'];
        $mess = $_POST['message'];
		
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
   
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'g4gurdeep93@gmail.com';                     //SMTP username
    $mail->Password   = 'diljeetsingh';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to 

    //Recipients
    $mail->setFrom($email);
    $mail->addAddress('g4gurdeep93@gmail.com');     //Add a recipient // whom to send


    //Content
    $mail->isHTML(true);                              //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $mess;
    

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}
