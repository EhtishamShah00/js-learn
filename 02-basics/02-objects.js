// const fb = new Object();..................Singleton

const fbUser = {};
fbUser.userId = "123ab";
fbUser.name = "Ehtisham";
fbUser.isLoggedIn = false;
fbUser.innerObject = {
  innerId: "123334a",
  innerName: "Ehtisham",
};

// console.log(fbUser);
// console.log(fbUser.innerObject["innerName"]);

// const userDetails = {
//   email: "hello@gmail.com",
//   fullName: { firstName: "Ehtisham", lastName: "Shah" },
//   dataforReg: {
//     date: "2022/02/22",
//     regDate: {
//       userReg: "2023/03/22",
//     },
//   },
// };

// console.log(userDetails.dataforReg.regDate["userReg"]);

// // Combine Objects
// const obj1 = { name: "Ehtisam" };
// const obj2 = { isloggedIn: true };
// // const combineObj = { ...obj1, ...obj2 };
// //or
// const combineObj = Object.assign({}, obj1, obj2);
// console.log(combineObj);

// const userdata = [
//   {
//     name: "Ehtisham",
//     id: "123",
//     email: "123@gmail.com",
//   },
//   {
//     name: "Ehtisham",
//     id: "123",
//     email: "123@gmail.com",
//   },
//   {
//     name: "Ehtisham",
//     id: "123",
//     email: "123@gmail.com",
//   },
//   {
//     name: "Ehtisham",
//     id: "123",
//     email: "123@gmail.com",
//   },
//   {
//     name: "Ehtisham",
//     id: "123",
//     email: "123@gmail.com",
//   },
//   {
//     name: "Ehtisham",
//     id: "123",
//     email: "123@gmail.com",
//   },
// ];
// // userdata.forEach((users) => console.log(users.name));
// console.log(userdata[1].id);
// console.log(fbUser);
// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));
// console.log(fbUser.hasOwnProperty("names"));

const course = {
  courseName: "MTH604",
  price: 999,
  courseInstructor: "Ehtisham",
};
console.log(course.courseName);
const { courseInstructor: instructor } = course;
console.log(instructor);
