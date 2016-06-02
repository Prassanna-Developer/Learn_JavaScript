/**Scope Exercise 2*/


var a = 10;

function outer()
{
  var b = a;
  console.log("Outer >" +b);
  
  function inner(){
    
    var c = a;
     console.log("Inner >" + c);
    
    var b = 20;
  }
  
  inner();
  
  
  
}

outer();
