/**  Understanding Scopes */

var name = "Prassanna";

if( name === "Prassanna"){
  var name = "JP";

  var dept = "ECE";
}


console.log(name);
console.log(dept);