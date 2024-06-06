const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    carouselContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}
