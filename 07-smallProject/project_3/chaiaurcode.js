// function time() {
//   const clock = document.querySelector("#clock");
//   const newDate = new Date().toLocaleTimeString();
//   clock.innerHTML = newDate;
// }

// let timeInterval = setInterval(time, 1000);
const clock = document.querySelector("#clock");
const newDate = new Date().toLocaleTimeString();
clock.innerHTML = newDate;

setInterval(function () {
  const newDate = new Date().toLocaleTimeString();
  clock.innerHTML = newDate;
}, 1000);
