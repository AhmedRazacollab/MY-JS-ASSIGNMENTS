// Data

const products = [
  {
    id: 1,
    image: "./images/products/burger.png",
    title: "Burger1",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 100,
    category: "Burger",
    rating: 5,
  },
  {
    id: 2,
    image: "./images/products/shawarma.jpg",
    title: "Shawarma1",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 200,
    category: "Shawarma",
    rating: 4,
  },
  {
    id: 3,
    image: "./images/products/piz.jpg",
    title: "Pizza1",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 300,
    category: "Pizza",
    rating: 3,
  },
  {
    id: 4,
    image: "./images/products/burger.png",
    title: "Burger2",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 400,
    category: "Burger",
    rating: 2,
  },
  {
    id: 5,
    image: "./images/products/shawarma.jpg",
    title: "Shawarma2",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 500,
    category: "Shawarma",
    rating: 1,
  },
  {
    id: 6,
    image: "./images/products/piz.jpg",
    title: "Pizza2",
    description: "Crispy zinger with crispy rolled into paratha",
    price: 600,
    category: "Pizza",
    rating: 5,
  },
  {
    id: 7,
    image: "./images/products/burger.png",
    title: "Burger3",
    description:
      "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
    price: 700,
    category: "Burger",
    rating: 4,
  },
  {
    id: 8,
    image: "./images/products/shawarma.jpg",
    title: "Shawarma3",
    description:
      "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
    price: 800,
    category: "Shawarma",
    rating: 3,
  },
  {
    id: 9,
    image: "./images/products/piz.jpg",
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

let selectedCategory = [];

const categoryFilterEl = document.getElementById("categoryFilter");

const onChangeCategory = (category, isChecked) => {
  console.log(category, isChecked);
  if (isChecked) {
    selectedCategory.push(category)
  } else if (selectedCategory.includes(category)) {
    selectedCategory = selectedCategory.filter((cat) => cat !== category)
  }
  console.log(selectedCategory);
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

renderCategories();

