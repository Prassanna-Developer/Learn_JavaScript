/**Function with an exercise */

var person = {
  "firstName" : "Prassanna",
  "lastName" : "Jayshree",
  "getFullName" : function(){
    return this.firstName + ".." + this.lastName;
  
    },
  
  "address" :{
      "street" : "123 East Street",
        "state": "CA",
    },
  "isFromState" : function (myState){
    console.log("my State is >> " + myState)
    return (this.address.state === myState.toUpperCase());
  }
 };


var flag = person.isFromState("cA");

console.log("is From State > " + flag);

  