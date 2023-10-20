const userEmail = [];
if (userEmail) {
  console.log(userEmail);
} else {
  console.log("INVALID EMAIL TYPE AGAIN");
}

//Falsey Values 0, -0, null, undifinded, NaN, false, "", BigInt 0n

//Truthy Values

// "0" ,"false", " ", [], {}, function(){}

//To check arrays if they are empty

if (userEmail.length === 0) {
  console.log("Empty");
}
const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("EMpty");
}
