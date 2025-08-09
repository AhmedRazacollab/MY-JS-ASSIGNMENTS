// Data
const products = [
  {
    id: 1,
    image: "burger.png",
    title: "Burger1",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 100,
    category: "Burger",
    rating: 5,
  },
  {
    id: 2,
    image: "shawarma.jpg",
    title: "Shawarma1",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 200,
    category: "Shawarma",
    rating: 4,
  },
  {
    id: 3,
    image: "piz.jpg",
    title: "Pizza1",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 300,
    category: "Pizza",
    rating: 3,
  },
  {
    id: 4,
    image: "burger.png",
    title: "Burger2",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 400,
    category: "Burger",
    rating: 2,
  },
  {
    id: 5,
    image: "shawarma.jpg",
    title: "Shawarma2",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 500,
    category: "Shawarma",
    rating: 1,
  },
  {
    id: 6,
    image: "piz.jpg",
    title: "Pizza2",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 600,
    category: "Pizza",
    rating: 5,
  },
  {
    id: 7,
    image: "burger.png",
    title: "Burger3",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 700,
    category: "Burger",
    rating: 4,
  },
  {
    id: 8,
    image: "shawarma.jpg",
    title: "Shawarma3",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 800,
    category: "Shawarma",
    rating: 5,
  },
  {
    id: 9,
    image: "piz.jpg",
    title: "Pizza3",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 900,
    category: "Pizza",
    rating: 2,
  },
];

const categories = [
  { id: 1, title: "Burger", image: "" },
  { id: 2, title: "Shawarma", image: "" },
  { id: 3, title: "Pizza", image: "" },
];

const categoryTitles = categories.map((category) => category.title);

// -------------------------------

let selectedCategory = [];
let selectedRating = null;

const findRange = () => {
  let min = products[0].price;
  let max = products[0].price;
  products.forEach((p) => {
    if (p.price > max) max = p.price;
    if (p.price < min) min = p.price;
  });
  return { min, max };
};

let priceRange = findRange();
let selectedPrice = { min: priceRange.min, max: priceRange.max, isApplied: false };

// =========================
//        Elements
// =========================
const categoryFilterEl = document.getElementById("categoryFilter");
const productsGridEl = document.getElementById("productsGrid");
const ratingFilterEl = document.getElementById("ratingFilter");
const priceFilterEl = document.getElementById("priceFilter");

// =========================
//       Event Handlers
// =========================
const onChangeCategory = (category, isChecked) => {
  if (isChecked) {
    selectedCategory.push(category);
  } else {
    selectedCategory = selectedCategory.filter((cat) => cat !== category);
  }
  renderProducts();
};

const onChangeRatingHandler = (rating) => {
  selectedRating = (selectedRating === rating) ? null : rating;
  renderRatingFilter();
  renderProducts();
};

const onChangePrice = (price) => {
  selectedPrice.max = price;
  selectedPrice.isApplied = true;
  renderProducts();
};

// =========================
//       Filter Logic
// =========================
const getFilterData = (data) => {
  return data.filter((product) => {
    let categoryMatch = selectedCategory.length ? selectedCategory.includes(product.category) : true;
    let ratingMatch = selectedRating ? product.rating >= selectedRating : true;
    let priceMatch = selectedPrice.isApplied
      ? product.price >= selectedPrice.min && product.price <= selectedPrice.max
      : true;
    return categoryMatch && ratingMatch && priceMatch;
  });
};

// =========================
//      Render Functions
// =========================
const renderCategories = () => {
  categoryFilterEl.innerHTML = categories
    .map(
      (category) => `
        <div class="relative flex items-center">
          <input type="checkbox" class="w-4 h-4 rounded cursor-pointer"
            onchange="onChangeCategory('${category.title}', this.checked)" />
          <label class="ml-3 text-md text-white cursor-pointer font-medium">${category.title}</label>
        </div>
      `
    )
    .join("");
};

const renderRatingFilter = () => {
  ratingFilterEl.innerHTML = [5, 4, 3, 2, 1]
    .map((rating) => `
      <div class="flex items-center gap-2 cursor-pointer" onclick="onChangeRatingHandler(${rating})">
        <div class="flex justify-start">
          ${Array(5)
            .fill()
            .map(
              (_, i) => `
                <svg aria-hidden="true"
                  class="w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} ${rating == selectedRating ? "!text-[#ff0000]" : ""}"
                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1
                    1 0 00.95.69h3.462c.969 0 1.371 1.24.588
                    1.81l-2.8 2.034a1 1 0 00-.364
                    1.118l1.07 3.292c.3.921-.755 1.688-1.54
                    1.118l-2.8-2.034a1 1 0 00-1.175
                    0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1
                    1 0 00-.364-1.118L2.98
                    8.72c-.783-.57-.38-1.81.588-1.81h3.461a1
                    1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              `
            )
            .join("")}
        </div>
        <p class="text-gray-400">${rating === 5 ? 5.0 : rating.toFixed(1) + " +"}</p>
      </div>
    `)
    .join("");
};

const renderProducts = () => {
  const visibleProducts = getFilterData(products);
  productsGridEl.innerHTML = visibleProducts
    .map(
      (p) => `
        <div class="col-span-3">
          <div class="rounded-2xl shadow-lg bg-[#1B1B1B]">
            <img src="${p.image}" alt="${p.title}" class="object-cover rounded-t-2xl w-full h-[250px]" />
            <div class="p-3 text-white relative h-48">
              <h1 class="font-medium text-2xl">${p.title}</h1>
              <div class="flex items-center gap-2">
                <div class="flex justify-start">
                  ${Array(5)
                    .fill()
                    .map(
                      (_, i) => `
                        <svg aria-hidden="true"
                          class="w-5 h-5 ${i < p.rating ? "text-yellow-400" : "text-gray-300"}"
                          fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921
                            1.902 0l1.07 3.292a1 1 0
                            00.95.69h3.462c.969 0 1.371 1.24.588
                            1.81l-2.8 2.034a1 1 0
                            00-.364 1.118l1.07 3.292c.3.921-.755
                            1.688-1.54 1.118l-2.8-2.034a1
                            1 0 00-1.175 0l-2.8
                            2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1
                            1 0 00-.364-1.118L2.98
                            8.72c-.783-.57-.38-1.81.588-1.81h3.461a1
                            1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      `
                    )
                    .join("")}
                </div>
                (${p.rating})
              </div>
              <p class="max-h-24 overflow-auto">${p.description}</p>
              <div class="absolute bottom-2 w-full flex justify-between items-center pr-6">
                <span class="text-xl">₹${p.price}</span>
                <button class="hover:text-gray-400">🛒</button>
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join("");
};

const renderPriceFilter = () => {
  priceFilterEl.innerHTML = `
    <input type="range" min="${priceRange.min}" max="${priceRange.max}" value="${selectedPrice.max}"
      class="w-full" onchange="onChangePrice(this.value)" />
    <div class="flex justify-between">
      <span>${priceRange.min}</span>
      <span>${priceRange.max}</span>
    </div>
  `;
};

// =========================
//          Init
// =========================
renderCategories();
renderProducts();
renderRatingFilter();
renderPriceFilter();
