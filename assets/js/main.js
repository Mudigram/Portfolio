document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // ✅ Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});



const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = '#000'; // Change to black on scroll
    } else {
        navbar.style.background = 'transparent'; // Keep it transparent at the top
    }
});

const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(direction) {
    const totalSlides = document.querySelectorAll('.game-card').length;
    index += direction;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    const offset = -index * 100 + "%";
    carouselContainer.style.transform = `translateX(${offset})`;
}

prevBtn.addEventListener('click', () => showSlide(-1));
nextBtn.addEventListener('click', () => showSlide(1));

// Auto-slide every 5 seconds

