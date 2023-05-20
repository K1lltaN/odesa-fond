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


const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let slideIndex = 0;

function showSlides() {
  slides.style.transform = `translateX(-${slideIndex * 600}px)`;
}

function nextSlide() {
  if (slideIndex === 17) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlides();
}

function prevSlide() {
  if (slideIndex === 0) {
    slideIndex = 17;
  } else {
    slideIndex--;
  }
  showSlides();
}

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

document.getElementById('facebookIcon').onclick = function () {
  window.open('https://www.facebook.com/groups/402095474610529/?ref=share_group_link', '_blank');
}

document.getElementById('instagrammIcon').onclick = function () {
  window.open('https://instagram.com/novih_zmin?igshid=ZGUzMzM3NWJiOQ==', '_blank');
}