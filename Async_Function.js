/*
Async Function
 */

var i;

 

for(i=0;i<10;i++){
  
  (function(currentValue){
    setTimeout(function(){
      console.log(currentValue)
  },1000)})(i);

}










/*
Exception: ReferenceError: currentValue is not defined
@Scratchpad/1:14:1
*/