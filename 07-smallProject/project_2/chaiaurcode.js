//My method
// function calculateBmi(weight, height) {
//   return weight / height ** 2;
// }
// const button = document.querySelector("button");

// button.addEventListener("click", function (e) {
//   const weight = document.querySelector("#weight").value;
//   const height = document.querySelector("#height").value;
//   const results = document.querySelector("#results");
//   results.innerHTML = ` ${calculateBmi(weight, height).toFixed(1)}`;
//   e.preventDefault();
// });

//TeacherMethod

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  const results = document.querySelector("#results");
  if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter the Valid weight: ${weight}`;
  } else if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please Enter the Valid height: ${height}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span> ${bmi} </span><br>`;
    if (bmi < 18.6) {
      results.appendChild(
        document.createTextNode("You are currently underweight")
      );
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.appendChild(
        document.createTextNode("You are currently in Normal Range")
      );
    } else if (bmi > 24.9) {
      results.appendChild(
        document.createTextNode("You are currently Overweight")
      );
    }
  }
});
