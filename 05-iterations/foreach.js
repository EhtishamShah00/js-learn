const arr = ["JS", "JAVA", "C++", "CPP", "SWIFT", "KOTLIN"];

// arr.forEach((i) => {
//   console.log(i);
// });

// function printme(i) {
//   console.log(i);
// }

// arr.forEach(printme);
// arr.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// const myCoding = [
//   { name: "Ehtisham", language: "JavaScript" },
//   { name: "Abdullah", language: "C++" },
//   { name: "POPA", language: "JAVA" },
//   { name: "ALI", language: "KOTLIN" },
//   { name: "IMRAN", language: "C#" },
// ];

// myCoding.forEach((item) =>
//   console.log(
//     `Student name is: ${item.name} and hes/shes learning ${item.language}`
//   )
// );

// const arrMaps = new Map();
// arrMaps.set("PK", "PAKISTAN");
// arrMaps.set("USA", "UNITED STATES OF PAKISTAN");
// arrMaps.set("NZ", "NEW ZELAND");
// arrMaps.set("UK", "UNITED KINGDOMS");

// for (const [key, value] of arrMaps) {
//   console.log(key + value);
// }
// const obj = {
//   user: "Ehtisham",
//   id: "123",
// };

// for (const key in obj) {
//   console.log(obj[key]);
// }

const myCoding = [
  { name: "Ehtisham", language: "JavaScript" },
  { name: "Abdullah", language: "C++" },
  { name: "POPA", language: "JAVA" },
  { name: "ALI", language: "KOTLIN" },
  { name: "IMRAN", language: "C#" },
];

myCoding.forEach((item) =>
  console.log(`NAME IS ${item.name} & LANGUAGE IS ${item.language}`)
);
