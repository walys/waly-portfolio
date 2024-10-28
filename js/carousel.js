let currentSlide = 0;
let currentSlide2 = 0;
let currentSlide3 = 0;
let currentSlide4 = 0;
const slides = document.querySelectorAll('.carousel-images img');
const slides2 = document.querySelectorAll('.carousel-images2 img');
const slides3 = document.querySelectorAll('.carousel-images3 img');
const slides4 = document.querySelectorAll('.carousel-images4 img');
const totalSlides = slides.length;
const totalSlides2 = slides2.length;
const totalSlides3 = slides3.length;
const totalSlides4 = slides4.length;

function showSlide(index) {

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    slides2.forEach((slides2, i) => {
        slides2.classList.remove('active');
        if (i === index) {
            slides2.classList.add('active');
        }
    });

    slides3.forEach((slides3, i) => {
        slides3.classList.remove('active');
        if (i === index) {
            slides3.classList.add('active');
        }
    });

    slides4.forEach((slides4, i) => {
        slides4.classList.remove('active');
        if (i === index) {
            slides4.classList.add('active');
        }
    });

}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Cicla para o próximo slide
    currentSlide2 = (currentSlide2 + 1) % totalSlides2; // Cicla para o próximo slide
    currentSlide3 = (currentSlide3 + 1) % totalSlides3; // Cicla para o próximo slide
    currentSlide4 = (currentSlide4 + 1) % totalSlides4; // Cicla para o próximo slide

    showSlide(currentSlide);
    showSlide(currentSlide2);
    showSlide(currentSlide3);
    showSlide(currentSlide4);
}

// Muda de slide a cada 2 segundos
setInterval(nextSlide, 2000);

// Mostra o primeiro slide inicialmente
showSlide(currentSlide);