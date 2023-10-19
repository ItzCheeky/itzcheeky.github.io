const slideshow = document.querySelector(".slideshow");
const slides = slideshow.querySelectorAll("li");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initially, display the first slide
showSlide(currentSlide);

// Add event listeners for manual control
const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);



