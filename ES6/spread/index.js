// Rest parameter

function logger([a, b, ...rest]) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

logger([2, 6, 12, 3, 5, 4]);

// Spread parameter (...)
var array1 = ["Javascript", "Ruby", "PHP"];
var array2 = ["React JS", "Dart"];
var array3 = [...array1, ...array2];

console.log(array3);

var object1 = {
  name: "Javascript",
};

var object2 = {
  price: 1000,
};

var object3 = {
  ...object1,
  ...object2,
};

console.log(object3);

var array4 = ["Javascript", "PHP", "Ruby", "React JS"];
function logger2(...rest) {
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

logger2(...array4);

const person1 = {
  name: "Son",
  age: 21,
};

const person2 = {
  ...person1,
};

// Expected results
console.log(person2.name); // Output: 'Son'
console.log(person2.age); // Output: 21
console.log(person1 === person2); // Output: false
