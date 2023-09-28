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
// Function to handle the intersection of elements
function handleIntersection(entries, observer) {
    console.log("Intersection observed!");
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Stop observing once the animation is triggered to avoid unnecessary checks
            observer.unobserve(entry.target);
        }
    });
}

// Function to set up the Intersection Observer
function setupIntersectionObserver() {
    // Create an observer instance
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        threshold: 0.8, // Trigger the animation when 80% of the element is in view
    });

    // Observe the "About" section
    const aboutSection = document.querySelector('.animate-on-scroll');
    observer.observe(aboutSection);
}

// Call the setupIntersectionObserver function after the page is loaded
window.addEventListener('load', setupIntersectionObserver);
