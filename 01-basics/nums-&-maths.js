///////// Number methods /////////

const score = 400.65;
// //IF you strictly want it to be int the use this

const ammount = new Number(20);
// console.log(ammount);
// console.log(ammount.toString().length);
// console.log(score.toFixed(2));
// console.log(score.toPrecision(3));
// const largeNum = 100000;
// console.log(largeNum.toLocaleString("en-PK"));

/*---------------------------------------------*/

///////// Math /////////

// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(433.56));
// console.log(Math.ceil(34.56));
// console.log(Math.floor(34.9));
// console.log(Math.min(9, 3, 2, 1));
const number = Math.floor(Math.random() * 6) + 1; // flooe will round the number by the lowest value
console.log(number);

const min = 5;
const max = 10;

//To get random number between min and max then we do this
const randomMaxMin = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomMaxMin);
