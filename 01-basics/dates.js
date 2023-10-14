// const newDate = new Date();
// console.log(newDate);
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toISOString());
// console.log(typeof newDate);
// let createdDate = new Date(2023, 11, 23);
// console.log(createdDate.toDateString());
// createdDate = new Date(2023, 11, 23, 2, 3);
// console.log(createdDate.toLocaleString());

//FOR YY,MM,DD DO THIS
// let createdDate = new Date("2023-01-23");
// console.log(createdDate.toLocaleDateString());
//For MM,DD,YY DO THIS
// let createdDate = new Date("01-23-2023");
// console.log(createdDate.toLocaleDateString());
//For DD,MM,YY DO THIS
// let createdDate = new Date("14-03-2023");
// console.log(createdDate.toLocaleDateString());
//IF YOU WANT THE CURRENT TIMESTAMP DATE THEN DO THIS
// let createdDate = new Date("2023-09-14");
// let myTimeStamp = Date.now(); //THIS
// console.log(myTimeStamp);
// console.log(createdDate.getTime()); //IF YOU WANT TO COMPARE DATES THEN DO THIS
// //IF YOU WANT TO DATE IN SECONDS NOT MILISECONDS THEN DO THIS
// console.log(Math.floor(myTimeStamp / 1000));

// const newDate = new Date();
// console.log(
//   `${newDate.getFullYear()}/${(function () {
//     if (newDate.getMonth() > 10) {
//       return newDate.getMonth();
//     } else {
//       return "0" + newDate.getMonth();
//     }
//   })()}/${newDate.getDay()} : ${newDate.getHours()}`
// );
let newDate = new Date();
let newestDate = newDate.toLocaleString("default", {
  weekday: "long",
  year: "2-digit",
});
console.log(newestDate);
