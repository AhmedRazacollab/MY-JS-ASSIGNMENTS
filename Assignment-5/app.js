// app.js
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const inputText = document.getElementById('inputText');
    const submitButton = document.getElementById('submitButton');
    const outputDiv = document.getElementById('output');

    // Add click event listener to the submit button
    submitButton.addEventListener('click', function() {
        // Get the value from the input field
        const text = inputText.value.trim();
        
        // Check if the input is not empty
        if (text) {
            // Create a new paragraph element
            const paragraph = document.createElement('p');
            paragraph.textContent = text;
            
            // Append the paragraph to the output div
            outputDiv.appendChild(paragraph);
            
            // Clear the input field
            inputText.value = '';
        } else {
            // Show alert if input is empty
            alert('Please enter some text before submitting!');
        }
    });

    // Optional: Add event listener for Enter key
    inputText.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitButton.click();
        }
    });
});

var products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 60000, quantity: 5 },
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
console.log('........................Question 1..........................');

const titles = products.map(product => product.title);
console.log(titles);


console.log('........................Question 2..........................');

 const getColor = products.filter((m) => m.variations.filter((n) => n.color === "black").length)
console.log(getColor);

console.log('........................Question 3..........................');

const getquantity = products.reduce((acc, product) => {
  const totalQuantity = product.variations.reduce((sum, variation) => sum + variation.quantity, 0);
  return acc + totalQuantity;
}, 0);
console.log(getquantity);

console.log('........................Question 4..........................');

const averageRatings = products.map(product => {
  const totalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / product.reviews.length;
  return { title: product.title, averageRating };
});
console.log(averageRatings);


console.log('........................Question 5..........................');

const fiveStarProductSummary = products
  .filter(product =>
    product.reviews.some(review => review.rating === 5.0)
  )
  .map(product => ({
    id: product.id,
    title: product.title
  }));
  console.log(fiveStarProductSummary);


console.log('........................Question 6..........................');


const formattedProducts = products.map(product => ({
  title: product.title,
  variations: product.variations.map(variation => ({
    color: variation.color,
    price: variation.price,
    quantity: variation.quantity
  }))
}));
console.log(formattedProducts);

console.log('........................Question 7..........................');

const totalprice = products.reduce((acc, product) => {
  const totalPrice = product.variations.reduce((sum, variation) => sum + (variation.price * variation.quantity), 0);
  return acc + totalPrice;
}, 0);    
console.log(totalprice);

console.log('........................Question 8..........................');

const filteredProducts = products.filter(product => 
  product.variations.some(variation => variation.quantity > 5)
);
console.log(filteredProducts);

console.log('........................Question 9..........................');

const productSummaries = products.map(product => ({
  title: product.title,
  totalVariations: product.variations.length,
  totalReviews: product.reviews.length
}));

console.log(productSummaries);

console.log('........................Question 10..........................');
const higheststockProduct = products.reduce((max, product) => {
  const totalStock = product.variations.reduce((sum, variation) => sum + variation.quantity, 0);
  return totalStock > max.totalStock ? { ...product, totalStock } : max;
}, { totalStock: 0 });
console.log(higheststockProduct);
