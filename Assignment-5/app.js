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

