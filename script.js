const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".primary-nav a");
const imagePreviewTrigger = document.querySelector(".image-preview-trigger");
const imageModal = document.querySelector(".image-modal");
const imageModalClose = document.querySelector(".image-modal-close");

toggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

function openImageModal() {
  if (!imageModal) return;

  imageModal.hidden = false;
  document.body.style.overflow = "hidden";
  imageModalClose?.focus();
}

function closeImageModal() {
  if (!imageModal) return;

  imageModal.hidden = true;
  document.body.style.overflow = "";
  imagePreviewTrigger?.focus();
}

imagePreviewTrigger?.addEventListener("click", openImageModal);
imageModalClose?.addEventListener("click", closeImageModal);

imageModal?.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    closeImageModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageModal && !imageModal.hidden) {
    closeImageModal();
  }
});
