let slideIndex = 1;
let slides = [];
let modalOpen = false;

function buildSlides() {
  const modalContent = document.querySelector(".modal .modal-content");
  const galleryImages = document.querySelectorAll(".gallery-item img");
  if (!modalContent || !galleryImages.length) return;

  galleryImages.forEach(function (img) {
    const slide = document.createElement("figure");
    slide.className = "slides";
    const clone = document.createElement("img");
    clone.src = img.src;
    clone.alt = img.alt;
    slide.appendChild(clone);
    modalContent.appendChild(slide);
  });

  const nav = document.createElement("div");
  nav.className = "modal-nav";
  nav.innerHTML =
    '<button class="prev" aria-label="Imagem anterior">&#10094;</button>' +
    '<button class="next" aria-label="Próxima imagem">&#10095;</button>';
  modalContent.appendChild(nav);

  slides = Array.from(modalContent.querySelectorAll(".slides"));
}

function openModal(n) {
  const modal = document.getElementById("modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  modalOpen = true;
  document.body.style.overflow = "hidden";
  currentSlide(n || slideIndex);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalOpen = false;
  document.body.style.overflow = "";
}

function plusSlides(n) {
  currentSlide(slideIndex + n);
}

function currentSlide(n) {
  if (!slides.length) return;
  if (n > slides.length) n = 1;
  if (n < 1) n = slides.length;
  slideIndex = n;
  slides.forEach(function (slide, index) {
    slide.style.display = index === slideIndex - 1 ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  buildSlides();

  document.querySelectorAll(".gallery-item").forEach(function (item, index) {
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", "Ampliar imagem " + (index + 1));
    item.addEventListener("click", function () {
      openModal(index + 1);
    });
    item.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(index + 1);
      }
    });
  });

  const closeButton = document.querySelector(".modal .close");
  if (closeButton) closeButton.addEventListener("click", closeModal);

  const prev = document.querySelector(".modal .prev");
  const next = document.querySelector(".modal .next");
  if (prev) prev.addEventListener("click", function () { plusSlides(-1); });
  if (next) next.addEventListener("click", function () { plusSlides(1); });

  document.addEventListener("keydown", function (event) {
    if (!modalOpen) return;
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowRight") plusSlides(1);
    if (event.key === "ArrowLeft") plusSlides(-1);
  });
});
