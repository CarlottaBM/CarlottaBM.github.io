const carousel = document.querySelector("[data-carousel]");

if (carousel) {
  const slides = Array.from(document.querySelectorAll("[data-carousel-slide]"));
  const dots = Array.from(document.querySelectorAll("[data-carousel-dot]"));
  const prev = document.querySelector("[data-carousel-prev]");
  const next = document.querySelector("[data-carousel-next]");
  let activeIndex = 0;
  let timer = null;
  let startTimeout = null;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const AUTO_DELAY = 3800;

  function showSlide(index) {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === activeIndex);
      slide.setAttribute("aria-hidden", i === activeIndex ? "false" : "true");
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === activeIndex);
      dot.setAttribute("aria-current", i === activeIndex ? "true" : "false");
    });
  }

  function stopTimer() {
    window.clearInterval(timer);
    window.clearTimeout(startTimeout);
  }

  function startTimer(withDelay = false) {
    if (prefersReducedMotion || slides.length <= 1) return;
    stopTimer();

    const begin = () => {
      timer = window.setInterval(() => showSlide(activeIndex + 1), AUTO_DELAY);
    };

    if (withDelay) {
      startTimeout = window.setTimeout(begin, 1400);
    } else {
      begin();
    }
  }

  prev?.addEventListener("click", () => {
    showSlide(activeIndex - 1);
    startTimer();
  });

  next?.addEventListener("click", () => {
    showSlide(activeIndex + 1);
    startTimer();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.carouselDot));
      startTimer();
    });
  });

  carousel.addEventListener("mouseenter", stopTimer);
  carousel.addEventListener("mouseleave", () => startTimer());
  carousel.addEventListener("focusin", stopTimer);
  carousel.addEventListener("focusout", () => startTimer());

  showSlide(0);
  startTimer(true);
}
