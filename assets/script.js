const directions = {
  "quantum-information": {
    title: "Quantum Information",
    text: "Studying the resources, limits, and algorithms that make quantum systems useful for computation and simulation.",
    link: "pages/quantum-information.html",
    projects: ["Stabilizer entropies", "Quantum walks", "Quantum annealing", "Simulation limits"]
  },
  "quantum-hardware": {
    title: "Quantum Hardware",
    text: "Connecting quantum behavior to the devices, controls, and measurements needed to build real systems.",
    link: "pages/quantum-hardware.html",
    projects: ["Superconducting qubits", "NV centers", "Quantum optics labs", "Measurement systems"]
  },
  "emerging-science": {
    title: "Emerging Science",
    text: "Understanding how new research fields form, gain credibility, and develop shared evidence standards.",
    link: "pages/emerging-science.html",
    projects: ["Field emergence", "Credibility metrics", "OpenAlex mapping", "Evidence standards"]
  },
  "quantum-energy": {
    title: "Quantum Energy Science",
    text: "Exploring uncertain and controversial quantum-adjacent energy fields through experimental validation and careful evidence assessment.",
    link: "pages/quantum-energy.html",
    projects: ["LENR validation", "Metal-hydrogen systems", "Detector pipelines", "Background analysis"]
  },
  "science-policy": {
    title: "Science Policy",
    text: "Connecting technical evidence, public funding, innovation systems, and responsible decision-making for emerging technologies.",
    link: "pages/science-policy.html",
    projects: ["Technology roadmaps", "Public funding", "Responsible innovation", "Quantum workforce"]
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

  buttons.forEach(button => {
    button.classList.toggle("is-active", button.dataset.direction === key);
    button.setAttribute("aria-pressed", button.dataset.direction === key ? "true" : "false");
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
