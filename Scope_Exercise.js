/** Scope Exercises */

// Exercise - 1
function myFn(){
  var a = 10;
var b = 10;

console.log(a+b);
  
}


function printExtraLine(){
  console.log("------------------------------------------");
}


myFn();

printExtraLine();

// Exercise - 2

var name = "JP";

function f2(name){
  console.log("Hello >>" + name);
}


f2("J Prassanna");


printExtraLine();


var outer = 2;

function f3(){
  var outer = 3;
}

f3();

console.log(outer);

printExtraLine();