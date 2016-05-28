/**Function as Arguments*/

var f = function (name){
  console.log("Hello " + name);
}


var executor = function(fn,name){
  f(name);
}


executor(f(),'Jaayashree Prassanna');