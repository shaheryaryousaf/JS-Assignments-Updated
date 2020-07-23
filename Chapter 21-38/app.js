// ====================================
// ************************************
// Chapter 21-25
// ************************************
// ====================================

// Task 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// document.write("Welcome " + firstName + lastName);



// Task 2
// var mobileModel = prompt("What is your favourite mobile model?");
// document.write("My favourite phone is " + mobileModel + "<br />Lenght of string: " + mobileModel.length);



// Task 3
// var string = "Pakistani";
// document.write("String: " + string + "<br />Index of 'n': " + string.indexOf('n'));



// Task 4
// var string = "Hello World";
// document.write("String: " + string + "<br />Index of 'n': " + string.lastIndexOf('l'));



// Task 5
// var string = "Pakistani";
// document.write("String: " + string + "<br />Character at index 3: " + string.charAt(3));



// Task 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// document.write("Welcome " + firstName.concat(lastName));



// Task 7
// var city = "Hyderabad";
// var replacedText = city.slice(0, 5);
// var newText = "Islam";
// document.write("City: " + city);
// document.write("<br />After replacement: " + newText + city.slice(replacedText.length));



// Task 8
// var string = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(string.replace(/and/g, "&"));



// Task 9
// var number = "472";
// document.write("Value: " + number + "<br />Type: " + typeof number);
// var number = parseInt(number);
// document.write("<br /><br />Value: " + number + "<br />Type: " + typeof number);



// Task 10
// var word = prompt("Enter any word");
// document.write("User input: " + word + "<br />Upper case: " + word.toUpperCase());



// Task 11
// var input = prompt("Enter any word");
// var firstLetter = input.slice(0, 1);
// var otherLetters = input.slice(1);
// document.write(firstLetter.toUpperCase() + otherLetters);



// Task 12
// var number = 35.36;
// var string = number.toString();
// document.write("Number: " + string + " <small>(Type is " + typeof string + ")</small>");
// document.write("<br />Result: " + string.replace(".", ""));



// Task 13
// var name = prompt("Enter name");
// var nameLen = name.length;
// for (var i = 0; i <= nameLen; i++) {
//     if (name.slice(0, 1) == "!" || name.slice(0, 1) == "!," || name.slice(0, 1) == "." || name.slice(0, 1) == "@") {
//         document.write("Please enter a valid username");
//         break;
//     } else {
//         document.write("Valid username");
//         break;
//     }
// }




// Task 14
// var A = ["cake", "apple pie", "patties", "cookie", "chips"];
// var snaks = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var index = A.indexOf(snaks.toLowerCase());
// if (index > -1) {
//     alert(snaks + " is available at index " + (index) + " of our bakery");
// } else {
//     alert("We are sorry " + snaks + " is not available in our bakery");
// }



// Task 15
// var password = prompt("Enter Password");
// var validation = /^[A-Za-z]\w{6,}$/;
// if (password.match(validation)) {
//     alert("Password is wrong");
// } else {
//     alert("Password is ok");
// }



// Task 16
// var university = "Unversity of Karachi";
// var arr = university.split("");
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br/>");
// }



// Task 17
// var str = prompt("Enter any word");
// var lastChar = str.charAt(str.length - 1);
// document.write("Last character of input is: " + lastChar);



//Task 18
// var str = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + str + "<br/>");
// document.write("There are " + str.split("the").length + " occurrence(s) of word 'the'");



// ====================================
// ************************************
// Chapter 21-25
// ************************************
// ====================================

// Task 1
// var num = +prompt("Enter any positive number");
// document.write("Number: " + num + "<br/>");
// document.write("Floor: " + Math.floor(num) + "<br/>");
// document.write("Ceil: " + Math.ceil(num) + "<br/>");
// document.write("Round: " + Math.round(num) + "<br/>");



// Task 2
// var num = +prompt("Enter any negitive number");
// document.write("Number: " + num + "<br/>");
// document.write("Floor: " + Math.floor(num) + "<br/>");
// document.write("Ceil: " + Math.ceil(num) + "<br/>");
// document.write("Round: " + Math.round(num) + "<br/>");



// Task 3
// var num = +prompt("Enter any number");
// document.write("The absolute value of " + num + " is " + Math.abs(num));



// Task 4
// var num = Math.random() * 6;
// document.write("Random dice value: " + Math.round(num));



// Task 5
// var num = Math.random() * 2;
// var number = Math.round(num);
// if (number === 1) {
//     document.write(1 + "<br />Random coin value: Tails");
// } else {
//     document.write(2 + "<br />Random coin value: Heads");
// }



// Task 6
// var num = Math.round(Math.random() * 100);
// document.write("Random number between 1 and 100: " + num);



// Task 7
// var weight = prompt("Enter weight");
// document.write("The weight of user is " + Number(weight) + " kilograms");
// document.write("<br />The weight of user is " + Math.round(Number(weight)) + " kilograms");
// document.write("<br />The weight of user is " + Math.floor(Number(weight)) + " kilograms");
// document.write("<br />The weight of user is " + Math.ceil(Number(weight)) + " kilograms");



// Task 8
// var userInput = +prompt("Enter a number");
// var number = Math.round(Math.random() * 10);
// console.log(number);
// if (userInput === number) {
//     alert("Congratulations, you are right!");
// } else {
//     alert("Sorry! try again");
// }



// ====================================
// ************************************
// Chapter 31-34
// ************************************
// ====================================

// Task 1
// var date = new Date();
// document.write(date);



// Task 2
// var date = new Date();
// var month = date.getMonth();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// for (var i = 0; i < months.length; i++) {
//     if (i === month) {
//         alert("Current month: " + months[i]);
//         document.write("Current month: " + months[i]);
//     }
// }



// Task 3
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currDate = new Date();
// var day = currDate.getDay();
// for (var i = 0; i < days.length; i++) {
//     if (i === day) {
//         alert("Current month: " + days[i].slice(0, 3));
//         document.write("Current month: " + days[i].slice(0, 3));
//     }
// }



// Tasks 4
// var day = new Date().getDay();
// if (day === 0 || day === 6) {
//     document.write("It's fun day");
// } else {
//     document.write("Work day");
// }



// Task 5
// var date = new Date();
// var day = date.getDate();
// if (day <= 15) {
//     document.write("First fifteen days of this month");
// } else {
//     document.write("Last days of the month");
// }



// Task 6
// var date = new Date();
// document.write("Current date: " + date);
// var milliseconds = date.getTime();
// document.write("<br/>Elapsed milliseconds since January 1, 1971: " + milliseconds);
// var minutes = milliseconds / (1000 * 60);
// document.write("<br/>Elapsed minutes since January 1, 1971: " + Math.round(minutes));



// Task 7
// var date = new Date();
// var hours = date.getHours();
// if (hours < 11) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }



// Task 8
// var laterDate = new Date("December 31, 2020");
// document.write("Later Date: " + laterDate);



// Task 9
// var ramamdanDate = new Date("June 18, 2015").getTime();
// var currDate = new Date().getTime();
// var diff = currDate - ramamdanDate;
// var days = diff / (1000 * 60 * 60 * 24)
// document.write(Math.round(days) + " days have passed since 1st Ramadan, 2015.");



// Task 10
// var refDate = new Date("July 11, 2018");
// var startDate = new Date("January 1, 2015");
// var diff = (refDate - startDate) / (1000);
// document.write("Our reference date " + refDate + ", " + diff + " seconds had passed since beginning of 2015");



// Task 11
// var currDate = new Date();
// var newDate = new Date();
// var pastHour = newDate.getTime() - (1000 * 60 * 60);
// var pastTime = new Date(pastHour);
// document.write("Current Date: " + currDate + " 1 hour back it was " + pastTime);



// Task 12
// var currDate = new Date();
// var oldDate = new Date();
// var pastYear = oldDate.getFullYear() - 100;
// oldDate.setFullYear(pastYear)
// document.write("Current Date: " + currDate + " 100 years back it was " + oldDate);



// Task 13
// var age = +prompt("Enter your age");
// var currDate = new Date().getFullYear();
// var diff = currDate - age;
// document.write("Your age is " + age + "<br/>Your birth year is " + diff);



// Task 14
// document.write("<h1>K-Electric Bill</h1><br />");
// var name = prompt("Customer name");
// var month = prompt("Current Month");
// var units = +prompt("Number of units");
// var charges = +prompt("Charges per unit");
// var surcharges = +prompt("Late Payment Surcharge");
// var totalBill = charges * units;

// document.write("Customer Name: <b>" + name + "</b><br />");
// document.write("Month: <b>" + month + "</b><br />");
// document.write("Number of units: <b>" + units + "</b><br />");
// document.write("Charges per unit: <b>" + charges.toFixed(2) + "</b><br /><br />");

// document.write("Net Amount Payable (Within Due Date): <b>" + totalBill.toFixed(2) + "</b><br />");
// document.write("Late Payment Surcharge:  <b>" + surcharges.toFixed(2) + "</b><br />");
// document.write("Gross Amount Payable (After Due Date):  <b>" + (totalBill + surcharges).toFixed(2) + "</b>");



// ====================================
// ************************************
// Chapter 35-35
// ************************************
// ====================================

// Task 1
// function currDate() {
//     document.write(new Date());
// }
// currDate();



// Task 2
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter second name");

// function greetings(fName, lName) {
//     document.write("Welcome ", fName + " " + lName);
// }
// greetings(firstName, lastName);



// Task 3
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");

// function add(n1, n2) {
//     return n1 + n2;
// }
// var result = add(num1, num2);
// document.write(result);



// Task 4
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operator = prompt("Enter operator");

// function calc(n1, n2, opr) {
//     if (opr === "+") {
//         return n1 + n2;
//     } else if (opr === "-") {
//         return n1 - n2;
//     } else if (opr === "*") {
//         return n1 * n2;
//     } else if (opr === "/") {
//         return n1 / n2;
//     } else if (opr === "%") {
//         return n1 % n2;
//     } else {
//         return "Syntax error";
//     }
// }
// var result = calc(num1, num2, operator);
// document.write(result);



// Task 5
// var num = +prompt("Enter number");

// function square(n) {
//     return n * n;
// }
// var result = square(num);
// document.write("The square of " + num + " is " + result);



// Task 6
// var num = +prompt("Enter number:");
// var fact = 1;

// function factorial(n) {
//     for (var i = n; i >= 1; i--) {
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(factorial(num));



// Task 7
// var num1 = +prompt("Enter num 1");
// var num2 = +prompt("Enter num 2");

// function counting(n1, n2) {
//     for (var i = n1; i <= n2; i++) {
//         document.write(i + "<br />");
//     }
// }
// counting(num1, num2);




// Task 8
// var base = +prompt("Enter base:");
// var perpendicular = +prompt("Enter Perpendicular:");

// function calculateHypotenuse(b, p) {
//     function calculateSquare(n) {
//         return n * n;
//     }
//     return (Math.sqrt(calculateSquare(b) + calculateSquare(p)));
// }
// document.write("Hypotenuse of " + base + " and " + perpendicular + " is " + calculateHypotenuse(base, perpendicular));




// Task 9
// var width = +prompt("Enter width");
// var height = +prompt("Enter height");

// function area(w, h) {
//     return w * h;
// }
// document.write("Area is " + area(width, height)); // Arguments as variables
// document.write("<br />Area is " + area(8, 7)); // Arguments as values




// Task 10
// var string = prompt("Enter string");
// function palindrome(str) {
//     var check = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         check += str[i];
//     }
//     if (str === check) {
//         document.write("Input is palindrome");
//     } else {
//         document.write("Input is not palindrome");
//     }
// }
// palindrome(string);



//Task 11
// var string = prompt("Enter string");

// function capitalize(str) {
//     var strArr = str.split(" ");
//     var newStr = "";
//     for (var i = 0; i < strArr.length; i++) {
//         var firstLetter = strArr[i].slice(0, 1).toUpperCase();
//         var otherLetters = strArr[i].slice(1).toLowerCase();
//         newStr += firstLetter + otherLetters + " ";
//     }
//     return newStr;
// }
// document.write(capitalize(string));




// Task 12 
// var str = prompt("Enter string");
// function longestWord(s) {
//     var strArr = s.split(" ");
//     var longest;
//     var start = 0;
//     for (var i = 0; i < strArr.length; i++) {
//         if (strArr[i].length > start) {
//             start = strArr[i].length;
//             longest = strArr[i];
//         }
//     }
//     return longest;
// }
// document.write(longestWord(str));




// Task 13 -- Work needed
// var str = prompt("Enter string");
// var letter = prompt("Enter letter");

// function count(s, l) {
//     return s.split(l).length - 1;
// }
// console.log(count(str, letter));



// Task 14
// var radius = +prompt("Enter Radius");

// function calcCircumference(r) {
//     var rad = 2 * 3.14 * r;
//     return rad;
// }
// document.write("The circumference is " + calcCircumference(radius));

// function calcArea(ra) {
//     return (3.14 * (ra * ra));
// }
// document.write("<br />Area of Circle is " + calcArea(radius));