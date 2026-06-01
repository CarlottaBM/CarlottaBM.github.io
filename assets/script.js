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