const arr = ["A", "B", "C", "D", "E", 1, 2, 3, 5];
const arrObj = ["A", "B", "C", "D", "E"];
// for (const iterator of arr) {
//   console.log(iterator);
// }

// const greetings = "greet hings";

// for (const greet of greetings) {
//   if (greet === " ") {
//     continue;
//   }
//   console.log(greet);
//  }
// for (const array of arr) {
//   if (array === Number(array)) {
//     continue;
//   } else {
//     console.log(array);
//   }
// }

// const map = new Map();
// map.set("PK", "Pakistan");
// map.set("PK", "Pakistan");
// map.set("IN", "India");
// map.set("USA", "UNITED STATES OF AMERICA");

// for (const [key, value] of map) {
//   console.log(key + value);
// }

const obj = {
  game1: "GTA",
  game2: "GOW",
};
console.log(Object.entries(obj));
for (const [key, value] of Object.entries(obj)) {
  console.log(key + " : " + value);
}
