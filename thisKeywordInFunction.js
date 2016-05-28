/**Function using this keyword */

var person = {
  
  "firstName" : "Prassanna",
  "lastName" : "Jayashree",
  "getFullName" :  function(){
    return this.firstName + ".." + this.lastName;
  }
  
};
 



var person2 = person;
 

person= {};

console.log(person2.getFullName());

 