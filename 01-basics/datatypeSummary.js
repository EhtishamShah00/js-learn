//Primitive
//Types 7: String, Number, Boolean, null, undefined, Symbol

//String:
const greating = "Hello";
//Number:
const age = 18; //it also can be 18.3 which is float
//Boolean:
const didyoueat = true;
//null is empty
const counttemp = null;
//undefinded means we will assign the value later on.
let didhearive;
//Symbol: its used to keep data unique
const id = Symbol("1, 2, 3");
const anotherid = Symbol("1, 2, 3");
console.log(id == anotherid); //Prove its not same
//BigINT:
const bigInt = 3233277898789733n;

//Reference(Non-Primitive):

//Types:Array, Object and Functions.

//Array:
let arr = [1, 2, 3];

//Object:
const objName = {
  name: "Ehtisham",
  age: 18,
};

//Function:
const getAge = function (age) {
  return "Your Age is " + age;
};
console.log(typeof getAge);
console.log(typeof objName);
console.log(typeof arr);

//All non-Primitive datatype is object, function is called object function.
