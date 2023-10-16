//Singleton

//Symbol

const myKey1 = Symbol();

//Object litral

const jsUser = {
  name: "Ehtisham",
  "full-name": "Ehtisham Shah",
  [myKey1]: "myKey1",
  age: 18,
  location: "New York",
  email: "ehtisha@gmail.com",
  isLoggedin: false,
  lastLoginDate: ["Monday", "Sunday"],
};

// // console.log(jsUser.email);
// // console.log(jsUser[myKey1]);
// // console.log(jsUser["full-name"]);
// // console.log(jsUser["location"]);

// jsUser.greeting = function () {
//   console.log("HEllo JS user");
// };
// console.log(jsUser);
// jsUser.greeting();
// jsUser.greeting2 = function () {
//   console.log(`Hello Mr. ${this.name}`);
// };

// jsUser.greeting2();
