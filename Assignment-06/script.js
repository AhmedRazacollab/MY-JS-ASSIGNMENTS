// Get elements by their IDs
const app = document.getElementsByClassName('dom');

const nameInput = document.getElementById('name-input');
// nameInput.style.cssText = 'inline-block; color: blue; '+ 'background-color: black;';
const Btn = document.getElementById('subbtn');
const changeColorBtn = document.getElementById('change-color-btn');
const printElement = document.getElementById('print');

// Add event listener to the greet butto
Btn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        printElement.innerText = `Hello, ${name}!`;
    } else {
        alert('Please enter your name.');
        printElement.innerText = '';
    }
});
// .style.cssText = "color: red; background-color: yellow;";
// Add event listener to the change color button
changeColorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    console.log(`Background color changed to: ${randomColor}`);
});



