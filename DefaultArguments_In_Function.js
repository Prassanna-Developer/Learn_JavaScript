/** Default Arguments in Function */


function add(){
  
  var i,sum=0;
  
  for(i=0;i<arguments.length;i++){
    sum += arguments[i];
  }
  
  return sum;
  
}


var sum = add(10,20,2,34,24,23);

console.log(sum);



  