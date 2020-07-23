// var number = 10;
// document.write("Result: <br />");
// document.write("The value of a is: " + number);
// document.write("<br /><br /> -----------------------------");

// var number = ++number;
// document.write("<br /><br />The value of ++a is: " + number);
// document.write("<br />Now the value is: " + number);

// document.write("<br /><br /><br />The value of a++ is: " + number++);
// document.write("<br />Now the value is: " + number++);

// var number = --number;
// document.write("<br /><br /><br />The value of --a is: " + --number);
// document.write("<br />Now the value is: " + number);


// document.write("<br /><br /><br />The value of a-- is: " + number--);
// document.write("<br />Now the value is: " + number--);




// var a = 2;
// document.write("a is " + a);
// var b = 1;
// document.write("<br />b is " + b);
// var result = --a - --b + ++b + b--;
// document.write("<br />  Result is " + result);



// var name = prompt("What is your name?");
// document.write("Welcome " + name);



// var number = +prompt("Enter number");
// for(var i = 1; i<=10; i++){
// 	if(number){
// 		document.write(number + " x " + i + " = " + number*i + "<br />");
// 	}else{
// 		document.write("5 x " + i + " = " + 5*i + "<br />");
// 	}
// }



var totalMarks = 100;
var subjectOne = prompt("Enter 1st subject");
var subjectTwo = prompt("Enter 2nd subject");
var subjectThree = prompt("Enter 3rd subject");

var subjectOneObtainedMarks = +prompt("Obtained Marks of Subject One?");
var subjectTwoObtainedMarks = +prompt("Obtained Marks of Subject Two?");
var subjectThreeObtainedMarks = +prompt("Obtained Marks of Subject Three?");

var subjectOnePercentage = (subjectOneObtainedMarks / totalMarks) * 100;
var subjectTwoPercentage = (subjectTwoObtainedMarks / totalMarks) * 100;
var subjectThreePercentage = (subjectThreeObtainedMarks / totalMarks) * 100;

var totalObtainedMarks = subjectOneObtainedMarks + subjectThreeObtainedMarks + subjectTwoObtainedMarks;
var totalPercentage = ((subjectOnePercentage + subjectTwoPercentage + subjectThreePercentage) / 300) * 100;

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subjectOne + "</td><td>" + totalMarks + "</td><td>" + subjectOneObtainedMarks + "</td><td>" + subjectOnePercentage + "%</td></tr>");
document.write("<tr><td>" + subjectTwo + "</td><td>" + totalMarks + "</td><td>" + subjectTwoObtainedMarks + "</td><td>" + subjectTwoPercentage + "%</td></tr>");
document.write("<tr><td>" + subjectThree + "</td><td>" + totalMarks + "</td><td>" + subjectThreeObtainedMarks + "</td><td>" + subjectThreePercentage + "%</td></tr>");
document.write("<tr><td>Total</td><td>300</td><td>" + totalObtainedMarks + "</td><td>" + totalPercentage + "%</td></tr>");
document.write("</table>");