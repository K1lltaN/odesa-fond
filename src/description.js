document.getElementById('navbarLogo').onclick = function() {
    document.location.assign('./index.html')
}

const select = document.querySelector('select');
const allLang = ['ua', 'en'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + "#ua";
        location.reload();
    }
    select.value = hash;
    for (let key in langArr) {
        document.getElementById(key).innerHTML = langArr[key][hash];
    }
}
changeLanguage();