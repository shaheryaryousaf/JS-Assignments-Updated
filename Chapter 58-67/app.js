// ====================================================
// Question 1
// ====================================================

// Part 1
// var main = document.getElementById("main-content");


// Part 2
// var childNodes = main.childNodes;


// Part 3
// var renderClass = document.getElementsByClassName("render"); (Not completed)


// Part 4
// var firstName = document.getElementById("first-name");
// firstName.setAttribute("value", "John");


// Part 5
// var lastName = document.getElementById("last-name");
// lastName.setAttribute("value", "Doe");


// ====================================================
// Question 2
// ====================================================

// Part 1
// var formContent = document.getElementById("form-content");
// console.log(formContent.nodeType);
// Node Type is "Element"


// Part 2
// var lastName = document.getElementById("lastName");
// console.log(lastName.nodeType)       // Show Node Type (Node Type is "Element")
// var lastNameChild = lastName.childNodes // Show child node of lastName


// Part 3  (Update child node of lastName)
// var newNode = document.createTextNode("Hello world");
// lastName.replaceChild(newNode, lastNameChild[0]);


// Part 4 (Get first and last child of id "main-content")
// var mainContent = document.getElementById("main-content");
// var first = mainContent.firstChild;
// var last = mainContent.lastChild;
// console.log(first);
// console.log(last);


// Part 5  (Get next and previous sibling of id "lastName")
// var lastName = document.getElementById("lastName");
// var next = lastName.nextSibling;
// var previous = lastName.previousSibling;
// console.log(next);
// console.log(previous);


// Part 6  (Get parent node and type of id "email")
// var email = document.getElementById("email");
// var parent = email.parentNode;
// var type = parent.nodeType;
// console.log(parent);
// console.log(type);