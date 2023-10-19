// const addnum = (num1, num2) => num1 + num2;
// console.log(addnum(1, 4));
// const user = {
//   username: "Ehtisham",
//   price: 999,
//   welcome: function () {
//     console.log(`${this.username} is Registred`);
//     console.log(this);
//   },
// };
// user.welcome();
// user.username = "Ali";
// user.welcome();
// function chai() {
//   let username = "ehtisham";
//   console.log(this.username);
// }
// chai();

// //Arrow Function Explicit Return {}
// const chai = () => {
//   let usename = "Ehtisham";
//   return console.log(usename);
// };
// chai();

// //Arrow function Implicit Return () or nothing

// const addNum = (num1, num2) => num1 + num2; //You can also remove it and leave it like num1+num2

// //To return object

// const objectArrow = (myObject) => {
//   return `Username is ${myObject.username} and price is ${myObject.price}`;
// };

// console.log(objectArrow(user));

// const addNum2 = (num1, num2) => ({ name: "Ehtisham" });
// console.log(addNum2());

const myArr = [1, 2, 3, 4, 5, 6, 7];

let emty = 0;
const addAll = (array) =>
  array.forEach((element) => {
    emty += element;
    console.log(emty);
  });
addAll(myArr);
