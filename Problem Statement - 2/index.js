function toggleBtn() {
    var btn = document.getElementById("btn");
    var light = document.getElementById("light");

    if (btn && light) {
        btn.classList.toggle("active");
        light.classList.toggle("on");
    }
}

"use strict";
const slides = document.querySelectorAll(".shift");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
