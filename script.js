const slide = document.querySelector(".slide");
const slideChild = slide.children;

let slideNum = 1;

const slideItem = function(num) {
  for (let i = 0; i < 3; i++) {
    slideChild[i].classList.remove("sliding");
  }
  slideChild[num].classList.add("sliding");
};

const sliding = function() {
  setTimeout(() => {
    slideItem(slideNum);
    slideNum++;

    if (slideNum < 3) {
      sliding();
    } else {
      slideNum = 0;
      sliding();
    }
  }, 5000);
};

if (document.documentElement.clientWidth >= 768) {
  sliding();
}

const main = document.querySelector(".main");
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");

window.addEventListener("scroll", function() {
  if (this.pageYOffset > header.clientHeight) {
    header.classList.add("header-fixed");
    menu.src = "./img/burger-black.svg";
    menu.style.position = "fixed";
  } else {
    header.classList.remove("header-fixed");
    menu.src = "./img/burger-white.svg";
    menu.style.position = "absolute";
  }
});

const headerRight = document.querySelector(".header__right");

menu.addEventListener("click", function(e) {
  if (headerRight.classList.contains("menu-active")) {
    headerRight.classList.remove("menu-active");
  } else {
    headerRight.classList.add("menu-active");
  }
});
