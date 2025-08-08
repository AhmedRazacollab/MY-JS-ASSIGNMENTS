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

let selectedCategory = [];

let selectedRating = "";

const categories = [
  { id: 1, title: "Burger", image: "" },
  { id: 2, title: "Shawarma", image: "" },
  { id: 3, title: "Pizza", image: "" },
];

const categoryTitles = categories.map((category) => category.title);

const findRange = () => {
  let min = products[0].price;
  let max = products[0].price;
  

  products.forEach((product) => {
    if (product.price > max) max = product.price;
    if (product.price < min) min = product.price;
  });

  return { min, max };
};

// const priceRange = findRange();
// console.log("priceRange", priceRange);
let priceRange = findRange();

let initPirceRange = {
  min: priceRange.min,
  max: priceRange.max,
  isApplied: false,
};

let selectedPrice = {
  min: priceRange.min,
  max: priceRange.max,
  isApplied: false,
};

const categoryFilterEl = document.getElementById("categoryFilter");
const productsGridEl = document.getElementById("productsGrid");
const ratingFilterEl = document.getElementById("ratingFilter");
const priceFilterEl = document.getElementById("priceFilter");

const onChangeCategory = (category, isChecked) => {
  console.log(category, isChecked);
  if (isChecked) {
    selectedCategory.push(category);
  } else {
    selectedCategory = selectedCategory.filter((cat) => cat !== category);
  }

  console.log("selectedCategory -->", selectedCategory);
  renderProducts();
  // if (isChecked) {
  //   selectedCategory.push(category)
  // }
  // console.log(selectedCategory);
};
// ------------------------gpt------------------------------
// OLD
// const onChangeRatingHandler = (rating) => {
//   console.log(rating);
//   selectedRating = rating;
//   console.log("selectedRating", selectedRating);
//
//   renderRatingFilter();
//   renderProducts();
// };

// NEW (toggle logic)
// const onChangeRatingHandler = (rating) => { // <-- REPLACED HERE
//   // Agar already yehi rating select hai to hatado (deselect)
//   if (selectedRating === rating) {
//     selectedRating = null;
//   } else {
//     selectedRating = rating;
//   }

//   console.log("selectedRating", selectedRating);
//   renderRatingFilter();
//   renderProducts();
// };
// -----------------------------------gpt------------------------------
const onChangeRatingHandler = (rating) => { if (selectedRating === rating) {
    selectedRating = null; // Deselect if already selected
  } else {
    selectedRating = rating;
  }

  renderRatingFilter();
  renderProducts();
};

const getFilterData = (data, selectedCategory, selectedRating , selectedPrice) => {
  let filteredProducts = data;

  if (selectedCategory.length) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategory.includes(product.category)
    );
  }

  if (selectedRating) {
    filteredProducts = filteredProducts.filter(
      (product) => product.rating >= selectedRating
    );
  }
return data.filter((product) => {
    let categoryMatch = true;
    if (selectedCategory.length && product.category)
      categoryMatch = selectedCategory.includes(product.category);

    let priceMatch = true;

    if (selectedPrice.isApplied)
      priceMatch =
        product.price >= selectedPrice.min &&
        product.price <= selectedPrice.max;

    return categoryMatch && priceMatch , filteredProducts;
  });
};

const renderCategories = () => {
  categoryFilterEl.innerHTML += categoryTitles
    .map(
      (category) => `
        <div class="relative flex items-center">
                        <div class="flex items-center h-5">
                            <input 
                            type="checkbox"
                              class="w-4 h-4 rounded cursor-pointer"
                        onchange="onChangeCategory('${category}', this.checked)"

                              />
                        </div>
                        <label class="ml-3 text-md text-white cursor-pointer font-medium">
                            ${category}
                        </label>
            </div>
        `
    )
    .join("");
};

const renderRatingFilter = () => {
  console.log("selectedRating --> ", selectedRating);
  ratingFilterEl.innerHTML = [5, 4, 3, 2, 1]
    .map(
      (rating) => `
        <div class="flex items-center gap-2 cursor-pointer" onclick="onChangeRatingHandler(${rating})">
            <div class="flex justify-start">
                ${Array(5)
                  .fill()
                  .map(
                    (_, i) => `
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 ${
                          i < rating
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-500"
                        } ${rating == selectedRating ? "!text-[#ff0000]" : ""}"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                `
                  )
                  .join("")}
            </div>
            <p class="text-gray-400">
                ${rating === 5 ? 5.0 : rating.toFixed(1) + " +"}
            </p>
        </div>
    `
    )
    .join("");
};

const renderProducts = () => {
  const visibleProducts = getFilterData(
    products,
    selectedCategory,
    selectedRating,
    selectedPrice
  );
  console.log(visibleProducts);

  productsGridEl.innerHTML = visibleProducts
    .map(
      (product) => `
        <div class="col-span-3">
            <div class=" rounded-2xl shadow-lg bg-[#1B1B1B]">
                <div class="flex flex-col">
                    <img
                        src="${product.image}"
                        alt="${product.title}"
                        class="object-cover rounded-t-2xl z-[1] opacity-90 hover:opacity-100 transition-opacity w-full h-[250px]"
                    />
                    <div class="relative p-3 space-y-2 h-48 text-white">
                        <h1 class="font-medium text-2xl">${product.title}</h1>
                        <div class="flex items-center gap-2 ">
                            <div class="flex justify-start">
                                ${Array(5)
                                  .fill()
                                  .map(
                                    (_, i) => `
                                    <svg
                                        aria-hidden="true"
                                        class="w-5 h-5 ${
                                          i < product.rating
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                        }"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                `
                                  )
                                  .join("")}
                            </div>
                            (${product.rating})
                        </div>
                        <p class="max-h-24 overflow-auto">${
                          product.description
                        }</p>
                        <div class="absolute bottom-2 w-full flex justify-between items-center pr-6">
                            <span class="text-white text-xl">$${
                              product.price
                            }</span>
                            <button class="hover:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </button>
                        </div>
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
    <input type="range" name="price" id="price" min="${priceRange.min}" max="${priceRange.max}" value="${selectedPrice.max}" class="w-full" onchange="onChangePrice(this.value)" />
    <div class="flex justify-between">
      <span>${priceRange.min}</span>
      <span>${priceRange.max}</span>
    </div>
  `;
};
const onChangePrice = (price) => {
  selectedPrice.max = price;
  selectedPrice.isApplied = true;

  renderProducts();
};

renderCategories();
renderProducts();
renderRatingFilter();
priceFilter();
