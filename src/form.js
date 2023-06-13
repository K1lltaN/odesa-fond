// Получаем ссылку на форму
const form = document.getElementById('formDonate');

document.getElementById('help').onclick = function () {
    form.style.display = "block";
};

document.getElementById('formCansel').onclick = function () {
    form.style.display = "none";
};

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Получаем значения полей формы
    var name = document.getElementById('labelName').value;
    var familyname = document.getElementById('labelFamilyname').value;
    var telefonnumber = document.getElementById('labelTelefonnumber').value;
    var mail = document.getElementById('labelMail').value;
    var halp = document.getElementById('selectHapl').value;
    var ageCheck = document.getElementById('ageCheck').checked;

    // Проверяем, заполнены ли все поля
    if (name === '' || familyname === '' || telefonnumber === '' || mail === '' || !ageCheck) {
        alert('Заповніть усі поля та дайте згоду на обробку персональних даних. Fill in all the fields and give your consent to the processing of personal data.');
    } else {
        // Все поля заполнены, отправляем данные на mail.php с помощью AJAX
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/mail.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Обработка успешного ответа от сервера (если необходимо)
                    console.log('Форма успешно отправлена.');
                } else {
                    // Обработка ошибки при отправке формы
                    console.error('Ошибка при отправке формы:', xhr.status);
                }
            }
        };
        // Очищаем значения полей формы
        document.getElementById('labelName').value = '';
        document.getElementById('labelFamilyname').value = '';
        document.getElementById('labelTelefonnumber').value = '';
        document.getElementById('labelMail').value = '';
        document.getElementById('selectHapl').value = '';
        document.getElementById('ageCheck').checked = false;

        form.style.display = "none";
        window.open('thank-you.html', '_blank');

        const formData = `name=${encodeURIComponent(name)}&familyname=${encodeURIComponent(familyname)}&telefonnumber=${encodeURIComponent(telefonnumber)}&mail=${encodeURIComponent(mail)}&halp=${encodeURIComponent(halp)}`;
        xhr.send(formData);
    }
});
