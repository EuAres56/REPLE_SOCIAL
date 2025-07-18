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

function carrosel_left(element) {
  const container = element.closest('.carousel-container');
  const slidesContainer = container.querySelector('.carousel-slides');
  const slide = container.querySelector('.carousel-slide');
  const slideWidth = slide.offsetWidth;

  slidesContainer.scrollLeft -= slideWidth;
}

function carrosel_right(element) {
  const container = element.closest('.carousel-container');
  const slidesContainer = container.querySelector('.carousel-slides');
  const slide = container.querySelector('.carousel-slide');
  const slideWidth = slide.offsetWidth;

  slidesContainer.scrollLeft += slideWidth;
}

const toggleBtn = document.getElementById('toggle-sumario');
const sumario = document.getElementById('sumario-flutuante');
const links = sumario.querySelectorAll('a');

const isMobile = () => window.innerWidth <= 768;

// Toggle menu
toggleBtn.addEventListener('click', () => {
  sumario.classList.toggle('ativo');

  if (!isMobile()) {
    toggleBtn.classList.toggle('oculto');
  }
});

// Fecha ao clicar em um item do menu
links.forEach(link => {
  link.addEventListener('click', () => {
    sumario.classList.remove('ativo');
    if (!isMobile()) {
      toggleBtn.classList.remove('oculto');
    }
  });
});

// Fecha ao clicar fora
document.addEventListener('click', (e) => {
  const isClickInsideMenu = sumario.contains(e.target);
  const isClickOnButton = toggleBtn.contains(e.target);

  if (!isClickInsideMenu && !isClickOnButton && sumario.classList.contains('ativo')) {
    sumario.classList.remove('ativo');
    toggleBtn.classList.remove('oculto');
  }
});

// Fecha menu se redimensionar a tela com ele aberto
window.addEventListener('resize', () => {
  if (!isMobile()) {
    sumario.classList.remove('ativo');
    toggleBtn.classList.remove('oculto');
  }
});