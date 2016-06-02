/*
 Variable Hoisting
 */


var fnA = function (){
  console.log("Function A");
  
  fnB();
}


function fnB(){
  
  console.log("Function B");
  
  fnA();
}


  fnA();

