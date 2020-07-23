// Task 1
// =====================================
// var num1 = prompt("Enter 1st value");
// var num2 = prompt("Enter 2nd value");

// function power(a, b) {
//     return Math.pow(a, b);
// }

// document.getElementById("power").innerHTML = power(num1, num2);



// Task 2
// =====================================
// var year = prompt("Enter year");

// function leapYear(a) {
//     if ((a % 4) === 0) {
//         alert(a + " is a leap year");
//     } else {
//         alert(a + " is not a leap year");
//     }
// }

// leapYear(year);



// Task 3
// =====================================
// var length1 = +prompt("Length 1");
// var length2 = +prompt("Length 2");
// var length3 = +prompt("Length 3");

// function triArea(a, b, c) {

//     var s = (a + b + c) / 2;

//     function area(ss) {
//         return (Math.sqrt(ss * (ss - a) * (ss - b) * (ss - c)));
//     }

//     console.log("Area of triangle is " + area(s));

// }

// triArea(length1, length2, length3);


// Task 4
// =====================================
// var marks1 = +prompt("Enter 1st marks");
// var marks2 = +prompt("Enter 2nd marks");
// var marks3 = +prompt("Enter 3rd marks");

// function mainFunction(a, b, c) {
//     var totalMarks = 300;

//     function average(a, b, c) {
//         return (a + b + c) / 3;
//     }

//     function percentage(a, b, c) {
//         return ((a + b + c) / totalMarks) * 100;
//     }

//     console.log("Percentage Marks: " + percentage(a, b, c).toFixed(2) + "%");
//     console.log("Average Marks: " + average(a, b, c).toFixed(2));
// }

// mainFunction(marks1, marks2, marks3);



// Task 5
// =====================================
// var str = "this is a cat";

// function index(str) {

//     var letter = prompt("Enter character");

//     for (var i = 0; i < str.length; i++) {
//         if (letter === str[i]) {
//             console.log("IndexOf of " + letter + " is " + i);
//             break;
//         }
//     }
// }

// console.log("String is '" + str + "'")
// index(str);



// Task 6
// =====================================
// var sentence = "We have to remove vowels..";

// function removeVowels(str) {
//     if (str.length < 25) {
//         return str.replace(/[aeiou]/gi, '');
//     } else {
//         return "Can't remove vowels, string is greater than 25 characters."
//     }
// }

// console.log(removeVowels(sentence));



// Task 7
// =====================================
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var res = str.match(/[aeiou]{2}/g);
    return res ? res.length : 0;
}

var found = findOccurrences();

console.log(found);


// Task 8
// =====================================
// var distance = +prompt("Enter distance");

// function metre(a) {
//     return a * 1000;
// }

// function feet(a) {
//     return a * 3280.84;
// }

// function inch(a) {
//     return a * 37370.1;
// }

// function centimetre(a) {
//     return a * 100000;
// }

// console.log("Distance: " + distance);
// console.log("Metres: " + metre(distance));
// console.log("Feet: " + feet(distance).toFixed(2));
// console.log("Inches: " + inch(distance).toFixed(2));
// console.log("Centimetre: " + centimetre(distance));



// Task 9
// =====================================
// var hours = +prompt("Enter hours");

// function pay(a) {
//     if (a > 40) {
//         return (a - 40) * 12.00;
//     } else {
//         return "Didn't work for more than 40 hours"
//     }
// }

// console.log("Overtime pay: Rs." + pay(hours).toFixed(2));



// Task 10
// =====================================
// var amount = +prompt("Enter amount to withdraw");

// function notes(a) {
//     var note100 = Math.floor(a / 100);
//     var note50 = Math.floor((a % 100) / 50);
//     var note10 = Math.floor(((a % 100) % 50) / 10);
//     var remaining = Math.floor(((a % 100) % 50) % 10);

//     console.log("You will have " + note100 + " hundered notes, " + note50 + " fifty notes, " + note10 + " ten notes and " + remaining + " coins");
// }
// console.log("Actual amount: " + amount);
// notes(amount);