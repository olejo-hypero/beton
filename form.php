<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['number'])) {$phone = $_POST['number'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['adress'])) {$adress = $_POST['adress'];}
    if (isset($_POST['city'])) {$city = $_POST['city'];}
    if (isset($_POST['type'])) {$type = $_POST['type'];}
    if (isset($_POST['volume'])) {$volume = $_POST['volume'];}
    if (isset($_POST['textarea'])) {$textarea = $_POST['textarea'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    $to = "info@site.ru"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "$formData";
    $message = "Имя: $name \n\nТелефон: $phone \n\nE-mail: $email \n\n $adress\n\n $city \n\n $type \n\n $volume \n\n $textarea \n\n";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
        echo "<center>Спасибо за отправку вашего сообщения!</center>";
    }
    else 
    {
        echo "<center><b>Ошибка. Сообщение не отправлено!</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>