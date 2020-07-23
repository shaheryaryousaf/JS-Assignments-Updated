// 1- Declare 3 variables in one statement.
var name = "John";
var age = 24;
var profession = "Mobile Developer";
alert("My name is " + name + ". I am " + age + " years old. And I am a " + profession);


// 2 - Declare 5 legal & 5 illegal variable names.
var legalVar1 = "Legal Variable 1";
var legal_var2 = "Legal Variable 2";
var legalVar3 = "Legal Variable 3";
var $legalVar4 = "Legal Variable 4";
var _legalVar5 = "Legal Variable 5";

var 1illegalVar1 = "Illegal Variable 1";
var @illegalVar2 = "Illegal Variable 2";
var #illegalVar3 = "Illegal Variable 3";
var ^illegalVar4 = "Illegal Variable 4";
var &illegalVar5 = "Illegal Variable 5";


// 3 - Display this in your browser
document.write("<h1>Rules for naming JS variables</h1><br />");
document.write("Variable name can only contain, numbers, $ and _. For example: $my_1stVariable<br />");
document.write("Variables must begin with a letter, $ or _.For example $name, _name or name <br / > ");
document.write("Variable names are case senseitive <br / > ");
document.write("Variable names should not be JS keywords <br / > ");