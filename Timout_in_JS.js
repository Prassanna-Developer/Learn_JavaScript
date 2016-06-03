/*
Understanding Delay in JS
 */


var a = 200;


var fn = function(){
  console.log(a);
}


setTimeout(fn,5000);


console.log("DONE");

