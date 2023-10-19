//IMMEdiately Invoked Function Expresion(IIFE)

//Syntax (function)();

(function call() {
  console.log("DB CONNECTED");
})();

const myname = "Ehtisham";
((name) => {
  console.log(`DB CONNECTED 2 ${name}`);
})(myname);
