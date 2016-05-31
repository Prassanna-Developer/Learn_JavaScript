/**  Understanding Scopes */

var name = "Prassanna";

function knowDept(){
  var name = "JP";
  var dept = "ECE";
}


knowDept();


console.log(name);

console.log(dept);
 
/*
Exception: ReferenceError: dept is not defined
@Scratchpad/1:15:1
*/
/*
Exception: ReferenceError: dept is not defined
@Scratchpad/1:16:1
*/