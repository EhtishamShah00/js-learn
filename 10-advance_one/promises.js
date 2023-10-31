// const obj = {
//   name: "Ehtisham",
//   password: "w98w78w374w9847w8dxjh",
// };

// const promiseOne = new Promise((resolve, reject) => {
//   // DO AYSNC TASK
//   // DB CALLS, cryptography,network
//   setTimeout(() => {
//     console.log("AYSC TASK IS COMPELETE");
//     resolve();
//   }, 3000);
// });

// promiseOne.then(() => {
//   console.log("PROMIES IS COMPTETE");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task Complete");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("PROMIS");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const obj = {
//       name: "Ehtisham",
//       password: "w98w78w374w9847w8dxjh",
//     };
//     resolve(obj);
//   }, 1000);
// });

// promiseThree.then((e) => {
//   console.log(e.password);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve(obj);
//     } else {
//       reject("ERROR: SOMETHING WENT WRONG");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((item) => {
//     return item.name;
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("TASK IS COMPLETE FINAALY");
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ language: "JAVASCRIPT", progress: 85 });
//     } else {
//       reject("ERROR: JS WENT WRONG");
//     }
//   }, 1000);
// });

// async function consumePromiesFive() {
//   try {
//     const responce = await promiseFive;
//     console.log(responce.language);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiesFive();
// async function getAllUsers() {
//   try {
//     const reponce = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await reponce.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllUsers();

let obj;
fetch("https://jsonplaceholder.typicode.com/users")
  .then((reponce) => {
    return reponce.json();
  })
  .then((e) => {
    e.map((item) => {
      console.log(item);
    });
  })
  .catch(() => {
    console.log("Error");
  });
