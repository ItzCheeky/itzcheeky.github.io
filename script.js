
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = 1;
    setTimeout(showSlides, 6000); // Change slide every 6 seconds 
}

// Get references to the navigation bar and the placeholder
const navbar = document.getElementById('navbar');
const navPlaceholder = document.getElementById('nav-placeholder');

// Get the offset position of the "about" section
const aboutSection = document.getElementById('about');
const aboutSectionOffset = aboutSection.offsetTop;

// Function to toggle the navigation bar based on scroll position
function toggleNavbar() {
    if (window.pageYOffset >= aboutSectionOffset) {
        navbar.classList.add('sticky');
        navPlaceholder.style.height = navbar.offsetHeight + 'px';
    } else {
        navbar.classList.remove('sticky');
        navPlaceholder.style.height = 0;
    }
}

// Attach the toggleNavbar function to the window's scroll event
window.onscroll = toggleNavbar;

// Initialize the state based on the initial scroll position
toggleNavbar();


// Scroll to Projects Link
const getStartedButton = document.getElementById("getStartedButton");

getStartedButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: document.querySelector("#about").offsetTop - navBarHeight,
        behavior: "smooth"
    });
});

//Smooth scroll to the top
const topLink = document.getElementById("topLink");

topLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Scroll to About Link
const aboutLink = document.getElementById("aboutLink");
const navBarHeight = document.querySelector("nav").offsetHeight;

aboutLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: document.querySelector("#about").offsetTop - navBarHeight,
        behavior: "smooth"
    });
});


// Scroll to Projects Link
const projectsLink = document.getElementById("projectsLink");

projectsLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: document.querySelector("#projects").offsetTop - navBarHeight,
        behavior: "smooth"
    });
});

// Scroll to Resume Link
const resumeLink = document.getElementById("resumeLink");

resumeLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: document.querySelector("#resume").offsetTop - navBarHeight,
        behavior: "smooth"
    });
});

// let prevScrollPos = window.scrollY;
// const navbar = document.getElementById('navbar');

// window.onscroll = function(){
    
//     const currentScrollPos = window.scrollY;
//     if(prevScrollPos > currentScrollPos) {
//         //user scrolling up
//         navbar.classList.add('nav-scroll');
//     }
//     else
//     {
//         navbar.classList.remove('nav-scroll')
//     }

//     prevScrollPos = currentScrollPos;

// }