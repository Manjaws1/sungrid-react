export function initProductsPage() {
  // Product modal support is optional because the original product page may not
  // include the modal markup. Never let optional UI break the whole page.
  const modalEl = document.getElementById("productModal");
  const bootstrapApi = window.bootstrap;
  const bsModal = modalEl && bootstrapApi?.Modal ? new bootstrapApi.Modal(modalEl) : null;
  const modalTitleProduct = document.getElementById("modalSelectedProduct");
  const modalInputProduct = document.getElementById("modalProductName");

  if (bsModal && modalTitleProduct && modalInputProduct) {
    document.querySelectorAll(".open-order-modal").forEach((button) => {
      button.addEventListener("click", () => {
        const productName = button.getAttribute("data-product") || "";
        modalTitleProduct.textContent = productName;
        modalInputProduct.value = productName;
        bsModal.show();
      });
    });
  }

  // Highlight the product category currently visible on screen.
  const navLinks = Array.from(document.querySelectorAll(".product-nav-link"));
  const sections = Array.from(document.querySelectorAll(".product-category-section"));
  if (!navLinks.length || !sections.length) return;

  const updateActiveLink = () => {
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 150) current = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  };

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
}
