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

document.addEventListener("DOMContentLoaded", function() {
  let slider = document.querySelector(".sliderPatrul");
  let prevArrow = document.querySelector(".prevArrowPatrul");
  let nextArrow = document.querySelector(".nextArrowPatrul");

  let currentPosition = 0;
  let imageWidth = 600;
  let totalImages = slider.querySelectorAll("img").length;

  function slideLeft() {
    if (currentPosition === 0) {
      currentPosition = -(imageWidth * (totalImages - 1));
    } else {
      currentPosition += imageWidth;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  }
  function slideRight() {
    if (currentPosition === -(imageWidth * (totalImages - 1))) {
      currentPosition = 0;
    } else {
      currentPosition -= imageWidth;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  }

  prevArrow.addEventListener("click", slideLeft);

  nextArrow.addEventListener("click", slideRight);

  setInterval(slideRight, 10000);
});


document.addEventListener("DOMContentLoaded", function() {
  let slider = document.querySelector(".sliderHelpToArmy");
  let prevArrow = document.querySelector(".prevArrowHelpToArmy");
  let nextArrow = document.querySelector(".nextArrowHelpToArmy");

  let currentPosition = 0;
  let imageWidth = 600;
  let totalImages = slider.querySelectorAll("img").length;

  function slideLeft() {
    if (currentPosition === 0) {
      currentPosition = -(imageWidth * (totalImages - 1));
    } else {
      currentPosition += imageWidth;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  }

  function slideRight() {
    if (currentPosition === -(imageWidth * (totalImages - 1))) {
      currentPosition = 0;
    } else {
      currentPosition -= imageWidth;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  }

  prevArrow.addEventListener("click", slideLeft);

  nextArrow.addEventListener("click", slideRight);

  setInterval(slideRight, 10000);
});

document.addEventListener("DOMContentLoaded", function() {
  let slider = document.querySelector(".sliderArmor");
  let prevArrow = document.querySelector(".prevArrowArmor");
  let nextArrow = document.querySelector(".nextArrowArmor");

  let currentPosition = 0;
  let imageWidth = 600;
  let totalImages = slider.querySelectorAll("img").length;

  function slideLeft() {
    if (currentPosition === 0) {
      currentPosition = -(imageWidth * (totalImages - 1));
    } else {
      currentPosition += imageWidth;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  }

  function slideRight() {
    if (currentPosition === -(imageWidth * (totalImages - 1))) {
      currentPosition = 0;
    } else {
      currentPosition -= imageWidth;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  }

  prevArrow.addEventListener("click", slideLeft);

  nextArrow.addEventListener("click", slideRight);

  setInterval(slideRight, 10000);
});

document.addEventListener("DOMContentLoaded", function() {
  let slider = document.querySelector(".sliderSignal");
  let prevArrow = document.querySelector(".prevArrowSignal");
  let nextArrow = document.querySelector(".nextArrowSignal");

  let currentPosition = 0;
  let imageWidth = 600;
  let totalImages = slider.querySelectorAll("img").length;

  function slideLeft() {
    if (currentPosition === 0) {
      currentPosition = -(imageWidth * (totalImages - 1));
    } else {
      currentPosition += imageWidth;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  }

  function slideRight() {
    if (currentPosition === -(imageWidth * (totalImages - 1))) {
      currentPosition = 0;
    } else {
      currentPosition -= imageWidth;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  }
  prevArrow.addEventListener("click", slideLeft);

  nextArrow.addEventListener("click", slideRight);

  setInterval(slideRight, 10000);
});

document.addEventListener("DOMContentLoaded", function() {
  let slider = document.querySelector(".sliderInterhimHalp");
  let prevArrow = document.querySelector(".prevArrowInterhimHalp");
  let nextArrow = document.querySelector(".nextArrowInterhimHalp");

  let currentPosition = 0;
  let imageWidth = 600;
  let totalImages = slider.querySelectorAll("img").length;

  function slideLeft() {
    if (currentPosition === 0) {
      currentPosition = -(imageWidth * (totalImages - 1));
    } else {
      currentPosition += imageWidth;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  }

  function slideRight() {
    if (currentPosition === -(imageWidth * (totalImages - 1))) {
      currentPosition = 0;
    } else {
      currentPosition -= imageWidth;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
  }
  prevArrow.addEventListener("click", slideLeft);

  nextArrow.addEventListener("click", slideRight);

  setInterval(slideRight, 10000);
});

document.getElementById('more').onclick = function () {
  document.getElementById('moreText').style.display = "block";
  document.getElementById('more').style.display = "none";
  document.getElementById('ownerInformationMain').style.display = "none";
}

document.getElementById('facebookIcon').onclick = function () {
  window.open('https://www.facebook.com/groups/402095474610529/?ref=share_group_link', '_blank');
}

document.getElementById('instagrammIcon').onclick = function () {
  window.open('https://instagram.com/novih_zmin?igshid=ZGUzMzM3NWJiOQ==', '_blank');
}