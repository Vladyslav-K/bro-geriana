const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
  if (this.pageYOffset > 20 && this.pageYOffset < 100) {
    header.classList.add("header-fixed");
    header.style.backgroundColor = `rgb(255, 255, 255, 0.${this.pageYOffset})`;
  }

  if (this.pageYOffset >= 100) {
    header.classList.add("header-fixed");
    header.style.backgroundColor = "rgb(255, 255, 255, 1)";
  }

  if (this.pageYOffset < 20) {
    header.classList.remove("header-fixed");
    header.style.backgroundColor = "";
  }
});
