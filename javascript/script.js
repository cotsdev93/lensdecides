const navWrapper = document.querySelector(".navWrapper");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  navWrapper.classList.add("visible");
});

close.addEventListener("click", () => {
  navWrapper.classList.remove("visible");
});

const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const slider = document.getElementById("slider");
const sliderSection = document.querySelectorAll(".sliderSection");

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRight.addEventListener("click", (e) => moveToRight());

// setInterval(() => {
//   moveToRight();
// }, 5000);

let operacion = 0;
let counter = 0;
let widthImg = 100 / sliderSection.length;
function moveToRight() {
  if (counter >= sliderSection.length - 1) {
    counter = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`;
    return;
  }
  counter++;
  operacion = operacion + widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
}

function moveToLeft() {
  counter--;
  if (counter < 0) {
    counter = sliderSection.length - 1;
    operacion = widthImg * (sliderSection.length - 1);
    slider.style.transform = `translate(-${operacion}%)`;
    return;
  }
  operacion = operacion - widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
}
