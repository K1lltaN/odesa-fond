<?php

/* https://api.telegram.org/bot5883281764:AAEjmjIO8GBV4t-6SjnMJAMsAWSlp7jmO3I/getUpdates,*/

$name = $_POST['name'];
$phone = $_POST['telefonnumber'];
$email = $_POST['mail'];
$halp = $_POST['halp'];
$token = "5883281764:AAEjmjIO8GBV4t-6SjnMJAMsAWSlp7jmO3I";
$chat_id = "-1001686741294";
$arr = array(
  'Імʼя та прізвище: ' => $name,
  'Номер телефону: ' => $phone,
  'Email:' => $email,
  'Форма допомоги:' => $halp 
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>