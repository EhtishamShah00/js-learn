// const age = function (birthYear = 2000) {
//   let currentDate = new Date();
//   return currentDate.getFullYear() - birthYear;
// };
// const currentAge = age(2002);
// console.log("Current Age is", currentAge);

// const loginUserMessage = function (username) {
//   if (username) {
//     return `Welcome, ${username}`;
//   } else {
//     return "Enter User Name";
//   }
// };
// console.log(loginUserMessage());

// const calculateTotalPrice = function (...num) {
//   return num;
// };

// console.log(calculateTotalPrice(100, 299, 199));
// const userDetails = {
//   name: "Ehtisham",
//   price: 199,
// };

// userDetails.age = function (birthYear) {
//   let getCurrentYear = new Date().getFullYear();
//   return `${this.name} Current Age is: ${getCurrentYear - birthYear}`;
// };
// userDetails.anyObject = function () {
//   console.log(`Username is ${this.name} & Price is ${this.price}`);
// };
// userDetails.anyObject();

// function handalObject(anyObjects) {
//   console.log(`Username is ${anyObjects.name} & Price is ${anyObjects.price}`);
// }
// handalObject(userDetails);
// handalObject({
//   name: "Ali",
//   price: 250,
// });
const arr = [100, 233, 444, 666];

function getSecondValue(array) {
  return array[1];
}

// console.log(getSecondValue(arr));

console.log(getSecondValue([100, 2444, 455, 666]));
