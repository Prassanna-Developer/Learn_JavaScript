/*
Understanding Closures
 */


var  a = 100;


function outer(){
  var b = 200;
  
 var inner =  function(){
    console.log("Outer >> " + a);
    console.log("Inner >> " + b);
  }
  
 return  inner;
}


var innerFn = outer();


innerFn();

