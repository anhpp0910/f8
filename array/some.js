// some() - true / false

Array.prototype.some2 = function (cb) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (cb(this[index], index, this)) {
        return true;
      }
    }
  }
  return false;
};

var courses = [
  {
    name: "Javascript",
    coin: 680,
    isFinish: true,
  },
  {
    name: "PHP",
    coin: 860,
    isFinish: false,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: false,
  },
];

var result = courses.some2(function (course, index, array) {
  return course.isFinish;
});

console.log(result);
