<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if(isset($_GET['name']) && isset($_GET['sendTo']) && isset($_GET['subject']) && isset($_GET['message'])){
		$name = $_GET['name'];
        $email = $_GET['sendTo'];
        $subject = $_GET['subject'];
        $mess = $_GET['message'];
		
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
   
    $mail->isSMTP();  
    $mail->SMTPDebug = 1;
    $mail->SMTPAuth   = true;                  // enable SMTP authentication  
    $mail->SMTPSecure = 'tsl';                                 //Enable SMTP authentication
    $mail->CharSet = 'utf-8';  
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;  
    $mail->Username   = 'jaitegsingh22@gmail.com';                     //SMTP username
    $mail->Password   = 'Auckland!@345';                               //SMTP password
    $mail->Port       = 587;                                    //TCP port to 
    
    // $mail->SMTPOptions = array(
    //     'ssl' => array(
    //         'verify_peer' => false,
    //         'verify_peer_name' => false,
    //         'allow_self_signed' => true
    //     )
    // );
    
    //Recipients
    $mail->setFrom('jaitegsingh22@gmail.com');
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
