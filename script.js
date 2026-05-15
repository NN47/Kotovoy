if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const forceScrollTop = () => {
  window.scrollTo(0, 0);
};

window.addEventListener('load', forceScrollTop);
window.addEventListener('pageshow', forceScrollTop);

if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

const TELEGRAM_URL = "https://t.me/T_O_N_I_CH";
const products = [
  {
    name: "Модульный когтеточный комплекс Kotovoy",
    image: "picture/pic1.png",
    description:
      "Комплекс для игры, отдыха и стачивания когтей. Конструкция собирается вручную и может адаптироваться под пространство квартиры.",
    priceLabel: "от 12 900 ₽",
    premiumLabel: "Ручная сборка в Санкт-Петербурге",
    features: [
      "ручная сборка",
      "распорная система потолок–пол",
      "устойчивое основание",
      "джутовая обмотка",
      "мягкая лежанка",
      "домик для отдыха",
      "тканевый мостик",
      "подходит для квартиры",
    ],
  },
];

const productsContainer = document.getElementById("products-container");

const createProductCard = (product, index) => {
  const article = document.createElement("article");
  article.className = "product-card";
  article.setAttribute("data-animate", "fade-up");

  const features = product.features.map((feature) => `<li>${feature}</li>`).join("");

  article.innerHTML = `
    <div class="product-image-area" aria-label="Фотография товара">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      </div>
      <div class="product-card-content">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span class="product-card__label">${product.premiumLabel}</span>
      <ul class="product-features">${features}</ul>
      <div class="product-card-actions">
      <div class="product-card__buy">
        <span class="product-card__price">${product.priceLabel}</span>
        <a class="button button--primary" href="${TELEGRAM_URL}" data-contact-link="telegram" aria-label="Заказать в Telegram">Заказать в Telegram</a>
      </div>
      </div>
      </div>
  `;

  return article;
};

products.forEach((product, index) => {
  productsContainer?.append(createProductCard(product, index));
});

document.querySelectorAll("[data-contact-link='telegram']").forEach((link) => {
  link.setAttribute("href", TELEGRAM_URL);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

const scrollButton = document.querySelector('[data-scroll-target="catalog"]');
if (scrollButton) {
  scrollButton.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.getElementById("catalog");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
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
