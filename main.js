const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

let activeImage = 0;

function bodyBg() {
  body.style.backgroundImage = slides[activeImage].style.backgroundImage;
}
bodyBg();

function currentSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[activeImage].classList.add("active");
}

rightBtn.addEventListener("click", () => {
  activeImage++;
  if (activeImage > slides.length - 1) {
    activeImage = 0;
  }
  bodyBg();
  currentSlide();
});
leftBtn.addEventListener("click", () => {
  activeImage--;
  if (activeImage < 0) {
    activeImage = slides.length - 1;
  }
  bodyBg();
  currentSlide();
});
