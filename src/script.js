document.getElementById('odessa').onclick = function() {
    let openPopUp = document.getElementById('odessa');
    let closePopUp = document.getElementById('popUpClose');
    let popUp = document.getElementById('popUp')

    openPopUp.addEventListener('click', function(e) {
        e.preventDefault();
        popUp.classList.add('active');
    })

    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active')
    })
}
const partners = document.getElementById('partners');
const partnersBox = document.getElementById('partnersBox');

function handleMouseOver() {
    partnersBox.style.display = "block";
    partners.style.transform = "scale(1.6)";
}

function handleMouseLeave() {
    partnersBox.style.display = "none";
    partners.style.transform = "scale(1)";
}

partners.onmousemove = handleMouseOver;
partners.onmouseleave = handleMouseLeave;
partnersBox.onmousemove = handleMouseOver;
partnersBox.onmouseleave = handleMouseLeave;


document.getElementById('interhimPartner').onclick = function() {
    window.open('https://interchem.ua/', '_blank');
}

document.getElementById('korydoruPartner').onclick = function() {
    window.open('https://koridorua.cz/ua/', '_blank');
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

document.getElementById('facebookIcon').onclick = function () {
    window.open('https://www.facebook.com/groups/402095474610529/?ref=share_group_link', '_blank');
}

document.getElementById('instagrammIcon').onclick = function () {
    window.open('https://instagram.com/novih_zmin?igshid=ZGUzMzM3NWJiOQ==', '_blank');
}