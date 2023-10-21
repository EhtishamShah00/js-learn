// const userEmail = [];
// if (userEmail) {
//   console.log(userEmail);
// } else {
//   console.log("INVALID EMAIL TYPE AGAIN");
// }

// //Falsey Values 0, -0, null, undifinded, NaN, false, "", BigInt 0n

// //Truthy Values

// // "0" ,"false", " ", [], {}, function(){}

// //To check arrays if they are empty

// if (userEmail.length === 0) {
//   console.log("Empty");
// }
// const obj = {};

// if (Object.keys(obj).length === 0) {
//   console.log("EMpty");
// }

// const arr = [];
// const emptyObj = {};

// if (arr.length === 0) {
//   console.log("Hello");
// }

// if (Object.keys(emptyObj).length === 0) {
//   console.log("Hello");
// }
//Nulish Operator ?? null undifined

let val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = null ?? 10 ?? 4;
console.log(val1);

//Ternery Operator ?

const balance = 1000;
// Condition ? true:false

balance >= 500 ? console.log("Good") : console.log("BAD");
