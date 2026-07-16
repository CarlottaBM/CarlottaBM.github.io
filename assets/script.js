const directions = {
  "quantum-information": {
    title: "Quantum Information & Resources",
    text: "Studying the resources, limits, and algorithms that make quantum systems useful for computation and simulation.",
    link: "pages/quantum-information.html"
  },

  "quantum-analog-simulation": {
    title: "Quantum & Analog Simulation",
    text: "Using quantum, classical, and computational models to study physical systems, from exciton diffusion and light harvesting to coupled oscillator analogs of quantum dynamics.",
    link: "pages/quantum-analog-simulation.html"
  },

  "data-driven-analysis": {
    title: "Data-Driven Experimental Analysis",
    text: "Using statistical tools, image analysis, and machine learning to extract physical meaning from experimental measurements.",
    link: "pages/data-driven-analysis.html"
  },

  "scientific-computing-ml": {
    title: "Scientific Computing & ML",
    text: "Building computational models of physical systems using simulation, numerical methods, and machine learning.",
    link: "pages/scientific-computing-ml.html"
  },

  "science-policy": {
    title: "Science Policy & Field Building",
    text: "Studying how funding, institutions, roadmaps, and research communities shape which emerging technologies become useful.",
    link: "pages/science-policy.html"
  }
};


const buttons = document.querySelectorAll(".electron");
const title = document.getElementById("directionTitle");
const text = document.getElementById("directionText");
const link = document.getElementById("directionLink");

function renderDirection(key) {
  const direction = directions[key];
  if (!direction) return;

  document.body.dataset.active = key;

  buttons.forEach((button) => {
    const isActive = button.dataset.direction === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  title.textContent = direction.title;
  text.textContent = direction.text;
  link.href = direction.link;
  link.textContent = `Explore ${direction.title}`;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    renderDirection(button.dataset.direction);
  });
});

renderDirection("quantum-information");

const galleryImages = document.querySelectorAll(".update-gallery-image");
const lightbox = document.getElementById("imageLightbox");
const lightboxPhoto = lightbox?.querySelector(".image-lightbox-photo");
const lightboxClose = lightbox?.querySelector(".image-lightbox-close");
const lightboxPrevious = lightbox?.querySelector(".image-lightbox-previous");
const lightboxNext = lightbox?.querySelector(".image-lightbox-next");
const lightboxSubtitle = lightbox?.querySelector(".image-lightbox-subtitle");
let activeGalleryImages = [];
let activeGalleryIndex = 0;

function renderLightboxImage() {
  if (!lightbox || !lightboxPhoto) return;

  const image = activeGalleryImages[activeGalleryIndex];
  if (!image) return;

  lightboxPhoto.src = image.currentSrc || image.src;
  lightboxPhoto.alt = image.alt;
  const hasMultipleImages = activeGalleryImages.length > 1;
  lightboxPrevious?.toggleAttribute("hidden", !hasMultipleImages);
  lightboxNext?.toggleAttribute("hidden", !hasMultipleImages);
}

function openLightbox(image) {
  if (!lightbox || !lightboxPhoto) return;

  const gallery = image.closest(".update-gallery");
  activeGalleryImages = gallery
    ? Array.from(gallery.querySelectorAll(".update-gallery-image"))
    : [image];
  activeGalleryIndex = activeGalleryImages.indexOf(image);

  const update = image.closest(".update-item");
  const date = update?.querySelector(".update-date")?.textContent.trim();
  const description = update?.querySelector("p")?.textContent.replace(/\s+/g, " ").trim();

  if (lightboxSubtitle) {
    lightboxSubtitle.textContent = [date, description].filter(Boolean).join(" — ");
  }

  renderLightboxImage();
  lightbox.showModal();
}

function moveLightbox(direction) {
  if (activeGalleryImages.length < 2) return;

  activeGalleryIndex =
    (activeGalleryIndex + direction + activeGalleryImages.length) %
    activeGalleryImages.length;
  renderLightboxImage();
}

galleryImages.forEach((image) => {
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `${image.alt}. Open larger image.`);

  image.addEventListener("click", () => openLightbox(image));
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

lightboxClose?.addEventListener("click", () => lightbox.close());
lightboxPrevious?.addEventListener("click", () => moveLightbox(-1));
lightboxNext?.addEventListener("click", () => moveLightbox(1));

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

lightbox?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLightbox(-1);
  }

  if (event.key === "ArrowRight") {
    moveLightbox(1);
  }
});

lightbox?.addEventListener("close", () => {
  if (!lightboxPhoto) return;
  lightboxPhoto.src = "";
  lightboxPhoto.alt = "";
  activeGalleryImages = [];
  activeGalleryIndex = 0;
});
