const myNums = [1, 3, 2, 4, 5, 6, 7];
// const addten = myNums.map((num) => num + 10);
// let emptyArr = [];

// myNums.forEach((nums) => {
//   emptyArr.push(nums + 10);
// });
// console.log(emptyArr);

const newNums = myNums
  .map((num) => num * 3)
  .map((add) => add + 1)
  .filter((fil) => fil >= 10);

console.log(newNums);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// const newDates = books.map((bk) => {

// });

console.log(newDates);
