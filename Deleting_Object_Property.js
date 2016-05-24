/** --- Deleting a Property in a Object--- */

 var person = {
   "firstName" : "Prassanna",
   "middleName" : null,
   "lastName" : "Subiramaniyan",
   "age" : undefined
     
 };


console.log(person);

// Deleting the Age property

delete person.age;
 
console.log(person);