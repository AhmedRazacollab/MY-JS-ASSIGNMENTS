var products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];
console.log("--------------------Qno-1--------------------");

function findProductById(id) {
  const product = products.find(p => p.id === id);
  console.log(product);
}
findProductById(102);

console.log("--------------------Qno-2--------------------");

function findProductByTitle(title) {
  const product = products.find(p => p.title.toLowerCase() === title.toLowerCase());
  console.log(product);
}
findProductByTitle("bike");

console.log("---------------------------------------------");

function listAllTitles() {
  products.forEach(p => console.log(p.title));
}
listAllTitles();

console.log("--------------------Qno-3--------------------");

function listColorsByProductId(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    product.variations.forEach(v => console.log(v.color));
  }
}
listColorsByProductId(102);

console.log("--------------------Qno-4--------------------");

function getTotalQuantity(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    const totalQty = product.variations.reduce((sum, v) => sum + v.quantity, 0);
    console.log("Total Quantity:", totalQty);
  }
}
getTotalQuantity(102);

console.log("--------------------Qno-5--------------------");

function productsWithLowStock() {
  products.forEach(product => {
    const lowStock = product.variations.some(v => v.quantity < 2);
    if (lowStock) console.log(product.title);
  });
}
productsWithLowStock();


console.log("--------------------Qno-6--------------------");

function highestRatedProduct() {
  let highest = { title: "", avg: 0 };
  products.forEach(p => {
    const approved = p.reviews.filter(r => r.status);
    const avg = approved.reduce((sum, r) => sum + r.rating, 0) / (approved.length || 1);
    if (avg > highest.avg) highest = { title: p.title, avg };
  });
  console.log("Highest Rated Product:", highest.title);
}
highestRatedProduct();


console.log("--------------------Qno-7--------------------");

function showActiveReviews(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    product.reviews
      .filter(r => r.status)
      .forEach(r => console.log(r));
  }
}
showActiveReviews(102);

console.log("--------------------Qno-8--------------------");

function mostExpensiveVariationPerProduct() {
  products.forEach(p => {
    const expensive = p.variations.reduce((prev, curr) => curr.price > prev.price ? curr : prev);
    console.log(`Product ${p.id} = ${p.title} - ${expensive.color.charAt(0).toUpperCase() + expensive.color.slice(1)} (${expensive.price})`);
  });
}
mostExpensiveVariationPerProduct();

console.log("--------------------Qno-9--------------------");

function calculateTotalStockValue() {
  let total = 0;
  products.forEach(p => {
    p.variations.forEach(v => {
      total += v.price * v.quantity;
    });
  });
  console.log("Total Stock Value:", total);
}
calculateTotalStockValue();



