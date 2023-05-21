<?php
// Проверяем, является ли запрос POST-запросом

  // Получаем данные из формы
  $name = $_POST["name"];
  $familyname = $_POST["familynmae"];
  $telefonnumber = $_POST["telefonnumber"];
  $mail = $_POST["mail"];
  $halp = $_POST["halp"];
  $ageCheck = isset($_POST["ageCheck"]) ? "Так" : "Ні";

  // Формируем сообщение электронной почты
  $subject = "Новая форма от $name";
  $message = "Имя: $name\n";
  $message .= "Прізвище: $familyname\n";
  $message .= "Номер телефону: $telefonnumber\n";
  $message .= "E-Mail: $mail\n";
  $message .= "Як би ви хотіли допомогати?: $halp\n";
  $message .= "Є 18 років та згоден на обробку персональних даних: $ageCheck\n";

  // Устанавливаем адрес электронной почты для получения формы
  $to = "maxi31034@gmail.com";

  // Опционально: задаем заголовки для отправки HTML-сообщений
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  // Опционально: добавляем дополнительные заголовки
  $headers .= "From: $name <$mail>" . "\r\n";
  $headers .= "Reply-To: $mail" . "\r\n";

  // Отправляем письмо
  if (mail($to, $subject, $message, $headers)) {
    // Письмо успешно отправлено
    echo "Форма успешно отправлена!";
  } else {
    // Произошла ошибка при отправке письма
    echo "Произошла ошибка при отправке формы!";
  }

?>
