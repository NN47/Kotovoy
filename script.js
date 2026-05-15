const TELEGRAM_URL = "https://t.me/T_O_N_I_CH";
const WHATSAPP_URL = "#";
const AVITO_URL = "#";

const products = [
  {
    name: "Модульный когтеточный комплекс Kotovoy",
    description:
      "Комплекс для игры, отдыха и стачивания когтей. Конструкция собирается вручную и может адаптироваться под пространство квартиры.",
    priceLabel: "от 12 900 ₽",
    premiumLabel: "Ручная сборка в Санкт-Петербурге",
    features: [
      "ручная сборка",
      "устойчивое основание",
      "джутовая обмотка",
      "модульная конструкция",
      "подходит для квартиры",
    ],
    photoSlots: ["Главное фото", "Фото деталей", "Фото в интерьере"],
  },
];

const productsContainer = document.getElementById("products-container");

const createProductCard = (product) => {
  const article = document.createElement("article");
  article.className = "product-card";
  article.setAttribute("data-animate", "fade-up");

  const features = product.features.map((feature) => `<li>${feature}</li>`).join("");

  article.innerHTML = `
    <div class="product-card__gallery" aria-label="Фотографии товара">
      <img src="product.PNG" alt="${product.name}" class="product-image" />
    </div>
    <div class="product-card__body">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <ul class="product-features">${features}</ul>
      <span class="product-card__label">${product.premiumLabel}</span>
      <span class="product-card__price">${product.priceLabel}</span>
      <div>
        <a class="button button--primary" href="${TELEGRAM_URL}" data-contact-link="telegram" aria-label="Заказать в Telegram">Заказать в Telegram</a>
      </div>
    </div>
  `;

  return article;
};

products.forEach((product) => {
  productsContainer.append(createProductCard(product));
});

const contactLinkMap = {
  telegram: TELEGRAM_URL,
  whatsapp: WHATSAPP_URL,
  avito: AVITO_URL,
};

document.querySelectorAll("[data-contact-link]").forEach((link) => {
  const contactType = link.dataset.contactLink;
  link.setAttribute("href", contactLinkMap[contactType] || "#");

  if (contactType === "telegram") {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
});

const scrollButton = document.querySelector('[data-scroll-target="catalog"]');

if (scrollButton) {
  scrollButton.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.getElementById(scrollButton.dataset.scrollTarget);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

const animatedElements = document.querySelectorAll('[data-animate="fade-up"]');

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  animatedElements.forEach((element) => observer.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add("is-visible"));
}
