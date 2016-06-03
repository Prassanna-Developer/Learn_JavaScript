/*
Understanding Closures
 */


var  a = 100;


function outer(){
  var b = 200;
  
 var inner =  function(){
   a++;
   b++;
    console.log("Outer >> " + a);
    console.log("Inner >> " + b);
  }
  
 return  inner;
}


var innerFn = outer();


innerFn();



var innerFn2 = outer();


innerFn2();

