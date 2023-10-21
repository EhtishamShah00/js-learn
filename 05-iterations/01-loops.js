//For loop

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is the number");
//   }
//   console.log(element);
// }

// for (let i = ; i <= 10; i++) {
//   console.log(`Outer Loop: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`Inner Loop: ${j}`);
//   }
// }
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// const arr = ["Ehtisham", "Abdullah", "Ali"];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }
// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log("5 is the favourite number");
//     break;
//   }
//   console.log(`The value of i is ${i}`);
// }
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("5 is the favourite number");
    continue;
  }
  console.log(`The value of i is ${i}`);
}
