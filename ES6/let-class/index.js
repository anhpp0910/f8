// 1. var / let, const: scope, hoisting
// const / var, let: assignment

// Code block: if else, loop, {},...

// Code thuần: var
// Babel: Let, Const
// Khi định nghĩa biến và không gán lại biến đó: const
// Khi cần gán lại giá trị cho biến: let

const a = {
  name: "Javascipt",
};
a.name = "PHP";
console.log(a);

let isSuccess = false;
if (isSuccess) {
  isSuccess = true;
}

console.log(isSuccess);

// Template literals
const courseName = "Javascript";
const courseName2 = "PHP";
const description = `Template string nội suy với \${}`;
console.log(description);

// Multiline string
const lines = `Line 1
Line 2
Line 3`;
console.log(lines);

// Arrow function
const course = {
  name: "Javascript basic!",
  getName: () => {
    return this.name; // context
  },
};

console.log(course.getName());

// Classes
// function Course(name, price) {
//   this.name = name;
//   this.price = price;
//   this.getName = function () {
//     return this.name;
//   };
// }

class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  run() {
    const isSuccess = false;
  }
}

const phpCourse = new Course("PHP", 1000);
const jsCourse = new Course("Javascript", 1200);
console.log(phpCourse);
console.log(jsCourse);
