//Create a variable called myObject and assign 
//an object to it.

var myObject = {}


//Add two properties of firstName and lastName
//using dot notation

myObject.firstName = "Daniel"
myObject.lastName = "Barahona"

//Add two properties of hobbies and age 
//using bracket notation
//hobbies must be an array of at least 4 strings

myObject['age'] = 15
myObject['hobbies'] = [ 'drawing','basketball','soccer']

//Print the myObject variable
//console.log(myObject)



//Use a for in loop to print all of the keys of the object
for(var key in myObject){
  //console.log(key)
}



///Use a for in loop to print all of the values of the object
for(var key in myObject){
  console.log(myObject[key])
}




/*
create an object that is about a specific car

Include: year, make, model, color and an array of features that you want your car to have

*/
var car = {
  year: 2021
  make:'Toyota'
  model:'Supra'
  color:'black'
  features: ['gps','wireless charging','sport seats']
}