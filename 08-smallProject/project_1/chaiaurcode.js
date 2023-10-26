//-------------MyMethod---------------//
// const body = document.querySelector("body");
// function changeColor(element, color) {
//   const cur = document.querySelector(`${element}`);
//   cur.addEventListener("click", function () {
//     body.style.backgroundColor = `${color}`;
//   });
// }
// for (const i of document.querySelectorAll(".button")) {
//   const mainID = i.id;
//   const mainIDcolor = `#${mainID}`;
//   const color = window.getComputedStyle(i).backgroundColor;
//   console.log(color);
//   if (mainID === "grey") {
//     changeColor(mainIDcolor, color);
//   } else if (mainID === "white") {
//     changeColor(mainIDcolor, color);
//   } else if (mainID === "blue") {
//     changeColor(mainIDcolor, color);
//   } else if (mainID === "yellow") {
//     changeColor(mainIDcolor, color);
//   }
// }

//-------------TEACHER METHOD---------------//
const body = document.querySelector("body");
const allButtons = document.querySelectorAll(".button");
allButtons.forEach(function (i) {
  i.addEventListener("click", function (e) {
    const target = e.target;
    if (target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else if (target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
