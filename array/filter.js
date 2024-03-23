// filter()

Array.prototype.filter2 = function (cb) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

var courses = [
  {
    name: "Javascript",
    coin: 680,
  },
  {
    name: "PHP",
    coin: 860,
  },
  {
    name: "Ruby",
    coin: 980,
  },
];

var filterCourses = courses.filter2(
  (course, index, array) => course.coin > 800
);

console.log(filterCourses);

// BAI TAP
Array.prototype.myFilter = function (cb) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

//Expected results:

const numbers = [1, 2, 3, 4];

console.log(
  numbers.myFilter(function (number) {
    return number % 2 === 0;
  })
); //Output: [2, 4]

console.log(
  numbers.myFilter(function (number, index) {
    return index % 2 === 0;
  })
); //Output: [1, 3]

console.log(
  numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
  })
); //Output: [1, 2, 3, 4]
