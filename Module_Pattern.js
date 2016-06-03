/*
Module Pattern
 */

function createPerson(){
  
  
  var firstName = "Prassanna";
  
  var lastName = "Jayashree";
  
  var obj = {
  
  "getFirstName": function(){
    return firstName;
  },
  "getLastName": function(){
  return lastName;
   
},
     
    
    "setFirstName" : function(name){
      firstName = name;
    },
    
      "setLastName" : function(name){
      lastName = name;
    }
  
  
};


return obj;
  
}


var person = createPerson();


person.setFirstName("JP");

person.setLastName("New");


console.log(person.getFirstName());

console.log(person.getLastName());











 