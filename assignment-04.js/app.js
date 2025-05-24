console.log('....................question 1....................');
function add(a, b) {
    return a + b;
}

// Test Cases:
console.log(add(5, 3)); // 8
console.log(add(10, -2)); // 8

console.log('....................question 2....................');

function checkEvenOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
}

// Test Cases:
console.log(checkEvenOdd(7)); // "odd"
console.log(checkEvenOdd(12)); // "even"

console.log('....................question 3....................');

function findMax(a, b, c) {
    return Math.max(a, b, c);
}

// Test Cases:
console.log(findMax(5, 3, 9)); // 9
console.log(findMax(10, -2, 0)); // 10

console.log('....................question 4....................');
function repeatString(str, n) {
    return str.repeat(n);
}

// Test Cases:
console.log(repeatString("hi", 3)); 

console.log('....................question 5....................');

function createPerson(name, age) {
    return { name: name, age: age };
}

// Test Cases:
console.log(createPerson("Ali", 25)); // Output: { name: "Ali", age: 25 }

console.log('....................question 6....................');

function arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Test Cases:
console.log(arraySum([1, 2, 3])); // 6
console.log(arraySum([]));        // 0
console.log(arraySum([6]));       // 6 (single element array)
console.log(arraySum([-1, 0, 1])); // 0 (mixed positive and negative numbers)
