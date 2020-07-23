var num1 = 25;
var num2 = 5;
var sum = num1 + num2;
document.write("<h1>Sum of " + num1 + " and " + num2 + " is " + sum + "</h1><br />");


// 2 - Repeat task1 for subtraction, multiplication, division & modulus
// var substraction = num1 - num2;
// document.write("<h1>Substraction of " + num1 + " and " + num2 + " is " + substraction + "</h1><br />");

// var multiply = num1 * num2;
// document.write("<h1>Multiplication of " + num1 + " and " + num2 + " is " + multiply + "</h1><br />");

// var division = num1 / num2;
// document.write("<h1>Division of " + num1 + " and " + num2 + " is " + division + "</h1><br />");

// var modulus = num1 % num2;
// document.write("<h1>Modulus of " + num1 + " and " + num2 + " is " + modulus + "</h1><br />");


// 3 -  JS Mathematic Expressions
// var number;
// document.write("Value after variable declaration is: " + number);

// number = 14;
// document.write("<br />Initial value: " + number);

// number++;
// document.write("<br />Value after increment is: " + number);

// number = number + 7;
// document.write("<br />Value after addition is: " + number);

// number--;
// document.write("<br />Value after decrement is: " + number);

// remainder = number % 3;
// document.write("<br />Value after decrement is: " + remainder);


// 4 - Total movie ticket COST
// var ticketPrice = 600;
// var numberOfTickets = 5;
// var totalPrice = ticketPrice * numberOfTickets;
// document.write("Total cost to buy " + numberOfTickets + " is " + totalPrice + "PKR.");


// 5 - Table
// var number = 100;
// document.write("Table of " + number);
// document.write("<br />" + number + " x 1 = " + number * 1);
// document.write("<br />" + number + " x 2 = " + number * 2);
// document.write("<br />" + number + " x 3 = " + number * 3);
// document.write("<br />" + number + " x 4 = " + number * 4);
// document.write("<br />" + number + " x 5 = " + number * 5);
// document.write("<br />" + number + " x 6 = " + number * 6);
// document.write("<br />" + number + " x 7 = " + number * 7);
// document.write("<br />" + number + " x 8 = " + number * 8);
// document.write("<br />" + number + " x 9 = " + number * 9);
// document.write("<br />" + number + " x 10 = " + number * 10);


// 6 - The Temperature Converter
// var temperatureCelsius = 25;
// var Fahrenheit = (temperatureCelsius * 9 / 5) + 32;
// document.write(temperatureCelsius + "C is " + Fahrenheit + "F");

// var temperatureFahrenheit = 70;
// var Celsius = (temperatureFahrenheit - 32) * 5 / 9;
// document.write(temperatureFahrenheit + "F is " + Celsius + "C");


// 7 - Shopping Cart
// var itemOnePrice = 2400;
// var itemOneQuantity = 2;
// var itemTwoPrice = 1200;
// var itemTwoQuantity = 5;
// var shippingCharges = (itemOnePrice * itemOneQuantity) + (itemTwoPrice * itemTwoQuantity);
// document.write("Price of item 1 is " + itemOnePrice);
// document.write("<br />Quantity of item 1 is " + itemOneQuantity);
// document.write("<br />Price of item 2 is " + itemTwoPrice);
// document.write("<br />Quantity of item 2 is " + itemTwoQuantity);
// document.write("<br />Total shipping cost of order is " + shippingCharges);


// 8 - Marks Sheet
// var totalMarks = 1050;
// var obtainedMarks = 948;
// var percentageMarks = (obtainedMarks / totalMarks) * 100;
// document.write("Total Marks: " + totalMarks);
// document.write("<br />Obtained Marks: " + obtainedMarks);
// document.write("<br />Percentage: " + percentageMarks);


// 9 - Courrnecy Convertor
// var usd = 10;
// var usdToPkr = usd * 104.80;
// var riyals = 25;
// var riyalsToPkr = riyals * 28;
// var totalCurrency = usdToPkr + riyalsToPkr;
// document.write("Total currency in PKR: " + totalCurrency);


// 10 - Calculations
// var number = 10;
// var calculations = ((number + 5) * 10) / 2;
// document.write(calculations);


// 11 - The Age Calculator:
// var currentYear = 2020;
// var yearOfBirth = 1996;
// var age = currentYear - yearOfBirth;
// document.write("Age: " + age);


// 12 - The Geometrizer
// var radius = 20;
// var circumference = 2 * 3.14 * radius;
// document.write("The circumference is " + circumference);
// var area = 3.14 * (radius * radius);
// document.write("The area is " + area);



// 13 - The Lifetime Supply Calculator
var favSnack = "Chips";
var age = 24;
var maxAge = 80;
var esitimateAmount = 2;
var needed = (maxAge - age) * 2;
document.write("Favourite Snack: " + favSnack);
document.write("<br />Current age: " + age);
document.write("<br />Estimated maximum age: " + maxAge);
document.write("<br />Amount of snaks per day: " + esitimateAmount);
document.write("<br />You will need " + needed + " to last you until the ripe old age of " + maxAge);