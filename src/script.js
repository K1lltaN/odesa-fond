document.getElementById('odessa').onclick = function() {
    let openPopUp = document.getElementById('odessa');
    let closePopUp = document.getElementById('popUpClose');
    let popUp = document.getElementById('popUp')

    openPopUp.addEventListener('click', function(e) {
        popUp.classList.add('active');
    })

    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active')
    })
}

document.getElementById('navbarLogo').onclick = function() {
    document.location.assign('./index.html')
}

window.setInterval(function() {
    let nowDate = new Date();
    let warDate = new Date(2022, 1, 24, 4);
    warDate = warDate.getTime() + 2 * (3600 * 1000);
    let nowWarDate = nowDate - warDate;
    let hours = Math.floor(nowWarDate / (1000 * 60 * 60));
    let minutes = nowDate.getMinutes();
    let seconds = nowDate.getSeconds();
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    
    let clock = hours + ':' + minutes + ':' + seconds;
    document.getElementById("clock").innerHTML = clock;
})

document.getElementById('navbarLogo').onclick = function () {
    document.location.assign("index.html");
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