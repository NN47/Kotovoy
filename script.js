const products = [
  {
    name: "Когтеточка-столбик Loft",
    description: "Компактная устойчивая когтеточка с джутовой обмоткой и мягким основанием.",
    price: 5900,
  },
  {
    name: "Домик-комплекс Nordic",
    description: "Двухуровневый комплекс для отдыха и игр, сочетается с современным интерьером.",
    price: 14900,
  },
  {
    name: "Лежанка-полка Wall Rest",
    description: "Настенная полка-лежанка из березовой фанеры для экономии пространства.",
    price: 7600,
  },
  {
    name: "Тумба-когтеточка Mono",
    description: "Минималистичная тумба со скрытым местом для когтей и хранения игрушек.",
    price: 12900,
  },
];

const productsContainer = document.getElementById("products-container");

const formatPrice = (value) =>
  new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value);

const createProductCard = (product) => {
  const article = document.createElement("article");
  article.className = "product-card";

  article.innerHTML = `
    <div class="product-image-placeholder" aria-hidden="true">Изображение товара</div>
    <div class="product-card__body">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span class="product-card__price">${formatPrice(product.price)}</span>
    </div>
  `;

  return article;
};

products.forEach((product) => {
  productsContainer.append(createProductCard(product));
});
