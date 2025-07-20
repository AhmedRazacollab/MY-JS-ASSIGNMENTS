// -------------------Exercise-01-------------------

const num = parseFloat(prompt("Enter a number:"));

if (num > 0) {
    alert("The number is positive.");
} else if (num < 0) {
    alert("The number is negative.");
} else if (num === 0) {
    alert("The number is zero.");
} else if (num !== null && isNaN(num)) {
    alert("Invalid input. Please enter a valid number.");
}

// -------------------Exercise-02-------------------

const num2 = parseInt(prompt("Enter a number:"));

if (num2 % 2 === 0) {
    alert("The number is even.");
} else if (num2 % 2 !== 0) {
    alert("The number is odd.");
} else if (num2 !== null && isNaN(num2)) {
    alert("Invalid input. Please enter a valid number.");
}

// -------------------Exercise-03-------------------

const age = parseInt(prompt("Enter your age:"));
if (age >= 18) {
    alert("You are eligible to vote.");
} else if (age < 18) {
    alert("You are not eligible to vote.");
} else if (age !== null && isNaN(age)) {
    alert("Invalid input. Please enter a valid age.");
}

// -------------------Exercise-04-------------------

const first = parseFloat(prompt("Enter the first number:"));
const second = parseFloat(prompt("Enter the second number:"));

if (first > second) {
    alert(first + ' is larger.');
} else if (second > first) {
    alert(second + ' is larger.');
} else if (first === second) {
    alert("Both numbers are equal.");
} else if (first !== null && isNaN(first)) {
    alert("Invalid input. Please enter a valid number.");
} else if (second !== null && isNaN(second)) {
    alert("Invalid input. Please enter a valid number.");
}

// -------------------Exercise-05-------------------

const AGE = parseInt(prompt("Enter your age:"));
const hasMembership = prompt("Do you have a membership card? (yes/no)").toLowerCase();

if (AGE >= 60 || hasMembership === "yes") {
    alert("You are eligible for a discount.");
} else if (AGE < 60 && hasMembership === "no") {
    alert("You are not eligible for a discount.");
} else if (AGE !== null && isNaN(AGE)) {
    alert("Invalid input. Please enter a valid age.");
}

// -------------------Exercise-06-------------------

const username = prompt("Enter your username:");
const password = prompt("Enter your password:");

if (username && username.trim() !== "" && password && password.trim() !== "") {
    alert("Login Successful");
} else {
    alert("please enter your username and password!");
}

// -------------------Exercise-07-------------------

const marks = parseFloat(prompt("Enter your marks:"));
let grade;

if (marks >= 90) {
    grade = "A";
} else if (marks >= 80) {
    grade = "B";
} else if (marks >= 70) {
    grade = "C";
} else if (marks >= 60) {
    grade = "D";
} else if (marks >= 50) {
    grade = "you are fail in the exam.";
} else if (marks !== null && isNaN(marks)) {
    alert("Invalid input. Please enter a valid number.");
}
alert("Your grade is " + grade + ".");

// -------------------Exercise-08-------------------

const color = prompt("Enter traffic light color (red, yellow, green):").toLowerCase();

if (color === "red") {
    alert("Stop");
} else if (color === "yellow") {
    alert("Slow down");
} else if (color === "green") {
    alert("Go");
} else {
    alert("Invalid color.");
}


