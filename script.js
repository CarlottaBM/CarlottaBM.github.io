const researchNodes = [
  {
    id: "quantum-info",
    title: "Quantum Information",
    subtitle: "Theory, algorithms, QKD.",
    color: "purple",
    x: 50,
    y: 15,
    children: [
      { title: "Stabilizer Entropies", type: "project" },
      { title: "Quantum Algorithms", type: "project" },
      { title: "QKD Theory", type: "project" },
      { title: "Resource Theories", type: "future" },
      { title: "Fault Tolerance", type: "future" }
    ]
  },
  {
    id: "experimental",
    title: "Experimental Systems",
    subtitle: "Detectors, measurement, ARPA-E.",
    color: "teal",
    x: 82,
    y: 36,
    children: [
      { title: "ARPA-E Nuclear Work", type: "project" },
      { title: "CR-39 Detection", type: "project" },
      { title: "Measurement Pipelines", type: "project" },
      { title: "Better Detectors", type: "future" },
      { title: "Validation Frameworks", type: "future" }
    ]
  },
  {
    id: "hardware",
    title: "Quantum Engineering",
    subtitle: "QKD, NV centers, superconducting qubits.",
    color: "orange",
    x: 70,
    y: 78,
    children: [
      { title: "QKD Lab", type: "project" },
      { title: "NV Centers", type: "project" },
      { title: "Photonics", type: "project" },
      { title: "Superconducting Qubits", type: "future" },
      { title: "Cryogenic Systems", type: "future" }
    ]
  },
  {
    id: "community",
    title: "Community & Education",
    subtitle: "Hackathons, teaching, mentoring.",
    color: "pink",
    x: 30,
    y: 78,
    children: [
      { title: "iQuHack", type: "project" },
      { title: "Teaching Quantum in South Africa", type: "project" },
      { title: "How to Make Almost Anything", type: "project" },
      { title: "Curriculum Development", type: "future" },
      { title: "Public Science", type: "future" }
    ]
  },
  {
    id: "policy",
    title: "Policy & Field-Building",
    subtitle: "Credibility, funding, ecosystems.",
    color: "blue",
    x: 18,
    y: 36,
    children: [
      { title: "MIT Thesis", type: "project" },
      { title: "Policy Hackathon", type: "project" },
      { title: "Quantum Ecosystem", type: "project" },
      { title: "Funding Models", type: "future" },
      { title: "Policy Roadmaps", type: "future" }
    ]
  }
];

const layer = document.getElementById("node-layer");
let activeNode = null;

function renderMap() {
  if (!layer) return;

  layer.innerHTML = "";

  researchNodes.forEach((node) => {
    const main = document.createElement("button");
    main.className = `atom-node ${node.color}`;
    main.style.left = `${node.x}%`;
    main.style.top = `${node.y}%`;

    main.innerHTML = `
      <h3>${node.title}</h3>
      <p>${node.subtitle}</p>
      <small>Click to expand</small>
    `;

    main.addEventListener("click", (event) => {
      event.stopPropagation();
      activeNode = activeNode === node.id ? null : node.id;
      renderMap();
    });

    layer.appendChild(main);

    if (activeNode === node.id) {
      renderChildren(node);
    }
  });
}

function renderChildren(parent) {
  const count = parent.children.length;
  const spreadX = 22;
  const spreadY = 26;

  parent.children.forEach((child, index) => {
    const angle = (2 * Math.PI * index) / count - Math.PI / 2;

    let childX = parent.x + Math.cos(angle) * spreadX;
    let childY = parent.y + Math.sin(angle) * spreadY;

    childX = Math.max(6, Math.min(94, childX));
    childY = Math.max(6, Math.min(94, childY));

    const dx = childX - parent.x;
    const dy = childY - parent.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const rotation = Math.atan2(dy, dx) * (180 / Math.PI);

    const line = document.createElement("div");
    line.className = `node-line ${parent.color}`;
    line.style.left = `${parent.x}%`;
    line.style.top = `${parent.y}%`;
    line.style.width = `${length}%`;
    line.style.transform = `rotate(${rotation}deg)`;

    layer.appendChild(line);

    const childNode = document.createElement("div");
    childNode.className = `child-node ${parent.color} ${child.type}`;
    childNode.style.left = `${childX}%`;
    childNode.style.top = `${childY}%`;

    childNode.innerHTML = `
      <span>${child.title}</span>
      <small>${child.type === "future" ? "Future" : "Project"}</small>
    `;

    layer.appendChild(childNode);
  });
}

document.addEventListener("click", () => {
  activeNode = null;
  renderMap();
});

renderMap();

const cards = document.querySelectorAll(".domain-card");

cards.forEach((card) => {
  const button = card.querySelector(".accordion");
  const symbol = button.querySelector("span:last-child");

  button.addEventListener("click", () => {
    card.classList.toggle("open");
    symbol.textContent = card.classList.contains("open") ? "−" : "+";
  });
});
