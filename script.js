window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-theme");
  const theme_body = document.getElementById("body_theme");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    theme_body.classList.add("dark-theme");
    btn.textContent = "🌙";
  } else {
    theme_body.classList.remove("dark-theme");
    btn.textContent = "🌞";
  }
});

function dark_theme() {
  const btn = document.getElementById("toggle-theme");
  const theme_body = document.getElementById("body_theme");

  if (!btn || !theme_body) return; // segurança

  if (theme_body.classList.contains("dark_theme")) {
    theme_body.classList.remove("dark_theme");
    btn.textContent = "🌞";
    localStorage.setItem("theme", "light");

  } else {
    theme_body.classList.add("dark_theme");
    btn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
  location.reload()
}

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
