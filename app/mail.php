<?php


require "phplibs/PHPMailer/PHPMailerAutoload.php";
echo $_POST['name'];

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.timeweb.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'cata08@yandex.ru';                 // SMTP username
$mail->Password = '345shbt8j2300cata';                           // SMTP password
$mail->SMTPSecure = 'SSL';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('cata08@yandex.ru', 'Отправитель');
$mail->addAddress('cata08@yandex.ru', 'Получатель');     // Add a recipient
$mail->addReplyTo('info@example.com', 'Information');

// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заголовок письма';
$mail->Body    = 'Ваш заказ отправлен! Спасибо за покупку!';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

// header('Content-Type: application/json');
//
//
// $name = $_POST['name'];
// $message = "Сообщение от пользователя: $name";
//
// $result = mail('cata07@yandex.ru', 'Тема письма', $message);
//
//
// echo json_decode(array(
//     'status' => $result,
//     'test' => $test
// ));
