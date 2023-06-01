// NAVIGATION BAR
const navBar = document.querySelector(".navbar");
const resBar = document.querySelector(".resbar");
const navBarMenuBtn = document.querySelector(".navbar-menu-btn");
const resBarMenuBtn = document.querySelector(".resbar-menu-btn");

navBarMenuBtn.addEventListener("click", function () {
  resBar.style.animation = "resBarAppears 1s forwards";
});

resBarMenuBtn.addEventListener("click", function () {
  resBar.style.animation = "resBarDisappears 1s forwards";
});

// SECTION TWO
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sect2-mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// SECTION TWO - MOBILE VIEW
let slideIndexSmall = 1;
showSlidesSmall(slideIndexSmall);

function plusSlidesSmall(n) {
  showSlidesSmall((slideIndexSmall += n));
}

function currentSlideSmall(n) {
  showSlidesSmall((slideIndexSmall = n));
}

function showSlidesSmall(n) {
  let i;
  let slidesSmall = document.getElementsByClassName("sect2-mySlides2");
  if (n > slidesSmall.length) {
    slideIndexSmall = 1;
  }
  if (n < 1) {
    slideIndexSmall = slidesSmall.length;
  }
  for (i = 0; i < slidesSmall.length; i++) {
    slidesSmall[i].style.display = "none";
  }
  slidesSmall[slideIndexSmall - 1].style.display = "block";
}

// SECTION THREE
let sect3SlideIndex = 1;
sect3ShowSlides(sect3SlideIndex);

function sect3PlusSlides(n) {
  sect3ShowSlides((sect3SlideIndex += n));
}

function sect3CurrentSlide(n) {
  sect3ShowSlides((sect3SlideIndex = n));
}

function sect3ShowSlides(n) {
  let i;
  let sect3Slides = document.getElementsByClassName("sect3-mySlides");
  if (n > sect3Slides.length) {
    sect3SlideIndex = 1;
  }
  if (n < 1) {
    sect3SlideIndex = sect3Slides.length;
  }
  for (i = 0; i < sect3Slides.length; i++) {
    sect3Slides[i].style.display = "none";
  }
  sect3Slides[sect3SlideIndex - 1].style.display = "block";
}

// SECTION THREE - MOBILE VIEW
let sect3SlideIndexSmall = 1;
sect3ShowSlidesSmall(sect3SlideIndexSmall);

function sect3PlusSlidesSmall(n) {
  sect3ShowSlidesSmall((sect3SlideIndexSmall += n));
}

function sect3CurrentSlideSmall(n) {
  sect3ShowSlidesSmall((sect3SlideIndexSmall = n));
}

function sect3ShowSlidesSmall(n) {
  let i;
  let sect3SlidesSmall = document.getElementsByClassName("sect3-mySlides2");
  if (n > sect3SlidesSmall.length) {
    sect3SlideIndexSmall = 1;
  }
  if (n < 1) {
    sect3SlideIndexSmall = sect3SlidesSmall.length;
  }
  for (i = 0; i < sect3SlidesSmall.length; i++) {
    sect3SlidesSmall[i].style.display = "none";
  }
  sect3SlidesSmall[sect3SlideIndexSmall - 1].style.display = "block";
}
