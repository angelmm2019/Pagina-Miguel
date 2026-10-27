const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const cards = [...document.querySelectorAll(".game-card")];
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const grid = document.querySelector("#gameGrid");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const dialog = document.querySelector("#gameDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogDescription = document.querySelector("#dialogDescription");
const toast = document.querySelector("#toast");
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
let activeCategory = "all";
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2400);
}

function updateCards() {
  const term = searchInput.value.trim().toLocaleLowerCase("es");
  const visible = [];
  cards.forEach(card => {
    const matchesText = card.dataset.title.toLocaleLowerCase("es").includes(term) ||
      card.querySelector(".game-info p").textContent.toLocaleLowerCase("es").includes(term);
    const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
    const shouldShow = matchesText && matchesCategory;
    card.hidden = !shouldShow;
    if (shouldShow) visible.push(card);
  });

  const sort = sortSelect.value;
  visible.sort((a, b) => {
    if (sort === "az") return a.dataset.title.localeCompare(b.dataset.title, "es");
    if (sort === "rating") return Number(b.dataset.rating) - Number(a.dataset.rating);
    return cards.indexOf(a) - cards.indexOf(b);
  });
  visible.forEach(card => grid.appendChild(card));
  resultCount.textContent = `${visible.length} ${visible.length === 1 ? "experiencia" : "experiencias"}`;
  emptyState.hidden = visible.length !== 0;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    updateCards();
  });
});
searchInput.addEventListener("input", updateCards);
sortSelect.addEventListener("change", updateCards);

document.querySelectorAll(".favorite").forEach(button => {
  button.addEventListener("click", () => {
    const isFavorite = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!isFavorite));
    button.textContent = isFavorite ? "♡" : "♥";
    const title = button.closest(".game-card").dataset.title;
    button.setAttribute("aria-label", `${isFavorite ? "Añadir" : "Quitar"} ${title} ${isFavorite ? "a" : "de"} favoritos`);
    showToast(isFavorite ? "Se quitó de favoritos." : "Se añadió a favoritos.");
  });
});

const descriptions = {
  "Isla de aventuras": "Explora playas, cuevas y senderos imaginarios en una aventura de mundo abierto.",
  "Ciudad de historias": "Crea un personaje y construye historias con otras personas en una ciudad ficticia.",
  "Torre imposible": "Pon a prueba tu coordinación con niveles de obstáculos y plataformas.",
  "Granja tranquila": "Cultiva plantas, cuida tu terreno y diseña una granja a tu gusto.",
  "Carrera neón": "Recorre pistas luminosas y mejora tus tiempos en carreras arcade.",
  "Laboratorio creativo": "Combina piezas y experimenta con construcciones en un mundo de prueba."
};
document.querySelectorAll(".game-art").forEach(button => {
  button.addEventListener("click", () => {
    const title = button.dataset.game;
    dialogTitle.textContent = title;
    dialogDescription.textContent = descriptions[title] || "Una experiencia de muestra del proyecto.";
    if (typeof dialog.showModal === "function") dialog.showModal();
    else showToast(`${title}: ${descriptions[title]}`);
  });
});
document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
document.querySelector("#dialogOk").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

updateCards();
