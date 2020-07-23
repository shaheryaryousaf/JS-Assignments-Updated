// var cityName = prompt("Enter city name");
// document.write("Welcome to city " + cityName);



// var gender = prompt("Enter your gender");
// if (gender == "male") {
//     document.write("Good Morning Sir");
// } else if (gender == "female") {
//     document.write("Good Morning Ma'am");
// } else {
//     document.write("Good Morning");
// }



// var color = prompt("Enter color");
// if (color == "red") {
//     document.write("Must Stop");
// } else if (color == "yellow") {
//     document.write("Ready to move");
// } else if (color == "green") {
//     document.write("Move on");
// } else {
//     document.write("Wait");
// }



// var reminingFuel = prompt("Enter your remaining fuel");
// if (reminingFuel < 0.25) {
//     document.write("Please refill the fuel in your car");
// } else {
//     document.write("You are good now.");
// }



// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// Shown


// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// NOT Shown


// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// Condition 2 and 4 are true


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// Shown 


// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// True - Shown


// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// Shown



// var marks1 = +prompt("Enter first marks");
// var marks2 = +prompt("Enter second marks");
// var marks3 = +prompt("Enter thrid marks");

// var totalMarks = marks1 + marks2 + marks3;
// var percentage = ((marks1 + marks2 + marks3) / 300) * 100;

// if (percentage >= 80) {
//     document.write("Total Marks: 300");
//     document.write("<br />Marks Obtained: " + totalMarks);
//     document.write("<br />Percentage: " + percentage);
//     document.write("<br />Grade: A+");
//     document.write("<br />Remarks: Excellent");
// } else if (percentage >= 70) {
//     document.write("Total Marks: 300");
//     document.write("<br />Marks Obtained: " + totalMarks);
//     document.write("<br />Percentage: " + percentage);
//     document.write("<br />Grade: A");
//     document.write("<br />Remarks: Good");
// } else if (percentage >= 60) {
//     document.write("Total Marks: 300");
//     document.write("<br />Marks Obtained: " + totalMarks);
//     document.write("<br />Percentage: " + percentage);
//     document.write("<br />Grade: B");
//     document.write("<br />Remarks: You need to improve");
// } else if (percentage < 60) {
//     document.write("Total Marks: 300");
//     document.write("<br />Marks Obtained: " + totalMarks);
//     document.write("<br />Percentage: " + percentage);
//     document.write("<br />Grade: F");
//     document.write("<br />Remarks: Sorry");
// } else {
//     document.write("Pending Result");
// }



// var number = 9;
// var guess = +prompt("Enter number");
// if (number == guess) {
//     document.write("Bingo! Correct answer ");
// } else if (number == (guess + 1)) {
//     document.write("Close enough to the correct answer");
// } else {
//     document.write("Wrong");
// }



// var number = +prompt("Enter number");
// if ((number % 3) == 0) {
//     document.write(" The number is divisible by 3 ");
// } else {
//     document.write(" Not divisible");
// }



// var number = +prompt("Enter number");
// if ((number % 2) == 0) {
//     document.write("Even number ");
// } else {
//     document.write("Odd number");
// }


// var temp = +prompt("Enter Temperature");
// if (temp > 40) {
//     document.write("It is too hot outside.");
// } else if (temp > 30) {
//     document.write("The Weather today is Normal.");
// } else if (temp > 20) {
//     document.write("Today’s Weather is cool.");
// } else if (temp > 10) {
//     document.write("OMG! Today’s weather is so Cool.");
// } else {
//     document.write("Cold outside");
// }



// var num1 = +prompt("Enter number 1");
// var num2 = +prompt("Enter number 2");
// var operation = prompt("Enter operation");

// if (operation === "+") {
//     document.write("Sum of " + num1 + " and  " + num2 + " is " + (num1 + num2));
// } else if (operation === "-") {
//     document.write("Substraction of " + num1 + " and  " + num2 + " is " + (num1 - num2));
// } else if (operation === "*") {
//     document.write("Multiplication of " + num1 + " and  " + num2 + " is " + (num1 * num2));
// } else if (operation === "/") {
//     document.write("Division of " + num1 + " and  " + num2 + " is " + (num1 / num2));
// } else if (operation === "%") {
//     document.write("Modulus of " + num1 + " and  " + num2 + " is " + (num1 % num2));
// } else {
//     document.write("Syntax error");
// }