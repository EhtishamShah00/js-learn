const obj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by Apple",
};
// for (const [keys, value] of Object.entries(obj)) {
//   console.log(`OUR KEYS ARE ${keys} AND VALUES ARE ${value}`);
// }

for (const key in obj) {
  console.log(`OUR KEY IS ${key} OUR VALUE IS ${obj[key]}`);
}
const arr = [1, 2, 3, 4];
for (const key in arr) {
  console.log(arr[key]);
}
