// Default parameter values

function logger(log, type = "log") {
  console[type](log);
}

logger("Message...", "error");

// Ehanced object literals
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

// var name = "Javascript";
// var price = 1000;
// var course = {
//   name,
//   price,
//   getName() {
//     return name;
//   },
// };

var fieldName = "new name";
var fieldPrice = "price";

const course2 = {
  [fieldName]: "Javascript",
  [fieldPrice]: 1000,
};

// Destructuring
var array = ["Javascript", "PHP", "Ruby"];
var [a, b, ...rest] = array;

var course3 = {
  name: "Javascript",
  price: 1000,
  image: "image-address",
  description: "abcd",
};

var { name, description = "Default" } = course3;
console.log(name);
console.log(description);

// Rest Parameter
function logger(...params) {
  console.log(params);
}

logger(1, 2, 3, 4, 5, 6, 7, 8);
