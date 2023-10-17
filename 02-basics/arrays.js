const arr = [1, 2, 3, 4, 5, 6];
const stringArr = ["hello, ", "myName ", 2, 3, 4];
// arr.push(7);
// // arr.forEach((element) => console.log(element));
// // for (let values of arr) {
// //   console.log(values);
// // }
// arr.pop();
// arr.forEach((element) => console.log(element));
// arr.unshift(2);
// arr.forEach((element) => console.log(element));
// arr.shift();
// console.log(arr.includes(20));
// console.log(arr.indexOf(4));
// console.log(arr.join(", "));
// // console.log(arr.splice(0, 3));
// const arr2 = arr.slice(2, 5);
// console.log(arr2);
console.log("Remove " + stringArr.splice(0, 2) + "From");
console.log(stringArr);

const newArray = arr.slice(0, 4);
console.log(newArray);
