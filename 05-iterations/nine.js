const arr = [1, 2, 3];

// const addAll = arr.reduce((acc, cur) => acc + cur, 0);

// const addAll = arr.reduce(function (acc, cur) {
//   return acc + cur;
// }, 0);
// console.log(addAll);
// let emptyArr = 0;
// // arr.forEach((num) => {
// //   emptyArr = num + num;
// // });

// for (const add of arr) {
//   emptyArr = add + add;
// }

// console.log(emptyArr);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrice = shoppingCart.reduce((arr, cur) => {
  console.log(`Arr is ${arr} and cur is ${cur.price}`);
  return arr + cur.price;
}, 0);

console.log(totalPrice);
