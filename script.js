const products = [
  {
    name: "Модульный когтеточный комплекс Kotovoy",
    description:
      "Комплекс для игры, отдыха и стачивания когтей. Конструкция собирается вручную и может адаптироваться под пространство квартиры.",
    priceLabel: "от 12 900 ₽",
    features: [
      "ручная сборка",
      "устойчивое основание",
      "джутовая обмотка",
      "модульная конструкция",
      "подходит для квартиры",
    ],
  },
];

const productsContainer = document.getElementById("products-container");

const createProductCard = (product) => {
  const article = document.createElement("article");
  article.className = "product-card";

  const features = product.features.map((feature) => `<li>${feature}</li>`).join("");

  article.innerHTML = `
    <div class="product-image-placeholder" aria-hidden="true">
      Место для реального фото товара<br />
      (добавьте изображение в следующих версиях)
    </div>
    <div class="product-card__body">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <ul class="product-features">${features}</ul>
      <span class="product-card__price">${product.priceLabel}</span>
      <div>
        <a class="button button--primary" href="#" aria-label="Заказать в Telegram">Заказать в Telegram</a>
      </div>
    </div>
  `;

  return article;
};

products.forEach((product) => {
  productsContainer.append(createProductCard(product));
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
