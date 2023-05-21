// Получение ссылок на HTML-элементы формы
var form = document.getElementById("donameForm"); // Замените "donameForm" на ID вашей формы
var nameInput = document.getElementById("labelName"); // Замените "labelName" на ID вашего поля ввода имени
var familynameInput = document.getElementById("labelFamilyname"); // Замените "labelFamilyname" на ID вашего поля ввода прізвища
var telefonnumberInput = document.getElementById("labelTelefonnumber"); // Замените "labelTelefonnumber" на ID вашего поля ввода номера телефона
var mailInput = document.getElementById("labelMail"); // Замените "labelMail" на ID вашего поля ввода email
var halpSelect = document.getElementById("selectHapl"); // Замените "selectHapl" на ID вашего списка выбора "Як би ви хотіли допомогати?"
var ageCheck = document.getElementById("ageCheck"); // Замените "ageCheck" на ID вашего чекбокса согласия на обработку персональных данных

// Обработчик события отправки формы
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  // Получение значений из полей ввода
  var name = nameInput.value;
  var familyname = familynameInput.value;
  var telefonnumber = telefonnumberInput.value;
  var mail = mailInput.value;
  var halp = halpSelect.value;
  var ageChecked = ageCheck.checked;

  // Выполнение дополнительной валидации, если необходимо
  if (name === "" || familyname === "" || telefonnumber === "" || mail === "" || !ageChecked) {
    alert("Пожалуйста, заполните все поля формы и дайте согласие на обработку персональных данных!");
    return;
  }

  // Очистка полей ввода
  nameInput.value = "";
  familynameInput.value = "";
  telefonnumberInput.value = "";
  mailInput.value = "";
  halpSelect.value = "1";
  ageCheck.checked = false;

  // Дополнительные действия после отправки формы (например, показать сообщение об успешной отправке)
  alert("Форма успешно отправлена!");

  form.style.display = "none";
});
