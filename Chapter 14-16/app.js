// var studentNames = [];


// var studentNames = new Array();


// var stringArray = ["apple", "Banana", "Pineapple", "Pear"];


// var intArray = [2, 4, 8, 41];


// var booleanArray = [True, False];


// var mixedArray = ["Ali", "Hamza", 54, 12, True];


// var degrees = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("Qualifications: <br/><br/>");
// for (var i = 0; i < degrees.length; i++) {
//     document.write(i + 1 + ")" + degrees[i] + "<br/>");
// }



// var names = ["John", "Cena", "Micheal"];
// var marks = [450, 354, 452];
// for (var i = 0; i < names.length; i++) {
//     document.write("Score for " + names[i] + " is " + marks[i] + ". Percentage is " + ((marks[i] / 500) * 100) + "%<br />");
// }



var colors = ["red", "blue", "pink"];
// var askForColor = prompt("Which color do you want in array?");
// colors.unshift(askForColor);
// console.log(colors);


// var newColor = prompt("Which color do you want at end of the array?");
// colors.push(newColor);
// console.log(colors);


var newArray = colors.unshift("black", "white");
console.log(colors);


var deleteFirst = colors.shift();
console.log(colors);


var deleteLast = colors.pop();
console.log(colors);