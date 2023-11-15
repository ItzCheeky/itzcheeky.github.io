//Slideshow in about section
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
window.onscroll = toggleNavbar;
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
// Scroll to Contacts
const contactLink = document.getElementById("contactLink");

contactLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: document.querySelector("#contact").offsetTop - navBarHeight,
        behavior: "smooth"
    });
});
// Scroll back to top
const bttLink = document.getElementById("bttLink");

bttLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//email
function sendMail(){
    event.preventDefault();
    let parms = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        message : document.getElementById("message").value,

    }
    emailjs.send("service_tzo4mc6","template_z4ld1qn",parms).then(alert("Email Sent!!"))
}