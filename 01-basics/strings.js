//Normal concatination using strings using +

// const myName = "Ehtisham, My age";
// const age = "18 Years old";
// console.log(myName + age);
// //We use this method to concatinate strings these days which is ``
// console.log(`Hello My name is ${myName}, ${age}`);

// //Another method to declare strings

// const gameName = new String("EhtiGame");
// console.log(gameName);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));
// console.log(gameName.split(" "));
// console.log(gameName.substring(4, 7)); //Remeber it doesnt select the last value like 4 so only 3 latters are retured.
// console.log(gameName.slice(-7, 4));

// const email = "  example@.gmail.com   ";
// console.log(email);
// console.log(email.trim());
const url = "https://google.com.pk/hello20%myName";
console.log(url.replace("20%", "-"));
console.log(url.includes("https")); //True or false
