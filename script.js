document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(container => {
    const slidesContainer = container.querySelector('.carousel-slides');
    const leftArrow = container.querySelector('.carousel-arrow.left');
    const rightArrow = container.querySelector('.carousel-arrow.right');
    const slides = container.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function updateCarousel() {
      const offset = -currentIndex * 100;
      slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    if (leftArrow) {
      leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });
    }

    if (rightArrow) {
      rightArrow.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
          currentIndex++;
          updateCarousel();
        }
      });
    }

    updateCarousel();
  });
});