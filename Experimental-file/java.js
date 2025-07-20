// ------------------------  chapter-01 ------------------
alert("Welcome to my website");
alert("Error! Please enter a valid password.");
alert("Welcome to JS Land...\nHappy Coding!");
alert("Welcome to JS Land...");
alert("Happy Coding!");
alert("Hello... I can run JS through my web browser’s console");
console.log("Hello... I can run JS through my web browser’s console");

// ------------------------- chapter-02 ------------------
alert("Ahmed Raza");
alert("22 years old");
alert("web developer");
alert(`PIZZA
PIZZ
PIZ
PI
P`);
alert("My email address is ahmedshaikh@gmail.com");
alert("A smarter way to learn JavaScript");
document.write("Yah! I can write HTML content through JavaScript")
alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
// ------------------------- chapter-03 ------------------

 var age = 22;
alert("I am " + age + " years old");
var visit = 14;
alert("You have visited this site " + visit + " times");
var birthYear = 1998;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is number");
var visitorName = "John Doe";
var productTitle = "T-shirt";
 var quantity = 5;
 document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

// Step 1: Prompt se input le kar variable mein store karna//
let userInput = prompt("please type your number:");

// Step 2: Input ko number mein convert karna//
let number = parseFloat(userInput);

// Step 3: Variable ko call karna (use karna)//
if ( !isNaN(number)) {
  console.log("Aapka number hai:", number);
} else {
  console.log("Invalid input. Kripya sahi number dalen.");
}
