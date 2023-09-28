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
    setTimeout(showSlides, 6000); // Change slide every 3 seconds (adjust as needed)
}

// Add the code for smooth scrolling to the top
const topLink = document.getElementById("topLink");

topLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Find the "About" link in the navigation
const aboutLink = document.getElementById("aboutLink");

// Add a click event listener to the "About" link
aboutLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Scroll to the About section with smooth behavior
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});

