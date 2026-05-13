const directions = {
  "quantum-information": {
    title: "Quantum Information Science",
    text: "Studying the resources, limits, and algorithms that make quantum systems useful for computation and simulation.",
    link: "pages/quantum-information.html",
    projects: []
  },
  "experimental-systems": {
    title: "Experimental Quantum Systems",
    text: "Understanding and implementing quantum devices, controls, measurements, and laboratory platforms.",
    link: "pages/quantum-hardware.html",
    projects: []
  },
  "quantum-energy": {
    title: "Exploring Energy Applications",
    text: "Exploring how quantum technologies can be applied to energy systems.",
    link: "pages/quantum-energy.html",
    projects: []
  },
  "outreach-education": {
    title: "Outreach and Education",
    text: "Sharing science with all, getting people engaged with quantum!",
    link: "pages/outreach-education.html",
    projects: ["iQuHACK"]
  },
  "science-policy": {
    title: "Science Policy and Field Building",
    text: "Studying how emerging fields gain credibility, attract funding, and develop institutions that can support impactful innovation.",
    link: "pages/science-policy.html",
    projects: []
  }
};

const buttons = document.querySelectorAll(".electron");
const title = document.getElementById("directionTitle");
const text = document.getElementById("directionText");
const link = document.getElementById("directionLink");
const projects = document.getElementById("projectConstellation");

function renderDirection(key) {
  const direction = directions[key];
  if (!direction) return;

  document.body.dataset.active = key;

  buttons.forEach(button => {
    const isActive = button.dataset.direction === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  title.textContent = direction.title;
  text.textContent = direction.text;
  link.href = direction.link;
  link.textContent = `Explore ${direction.title}`;
  projects.innerHTML = "";

  direction.projects.forEach((project, index) => {
    const atom = document.createElement("div");
    atom.className = "project-atom";
    atom.style.animationDelay = `${index * 35}ms`;
    atom.textContent = project;
    projects.appendChild(atom);
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => renderDirection(button.dataset.direction));
});

renderDirection("quantum-information");
