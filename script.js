const cards = document.querySelectorAll(".domain-card");

cards.forEach((card) => {
  const button = card.querySelector(".accordion");
  const symbol = button.querySelector("span:last-child");

  button.addEventListener("click", () => {
    card.classList.toggle("open");
    symbol.textContent = card.classList.contains("open") ? "−" : "+";
  });
});