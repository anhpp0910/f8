// every() : true / false;

Array.prototype.every2 = function (cb) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (!cb(this[index], index, this)) {
        return false;
      }
    }
  }
  return true;
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
    isFinish: true,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: true,
  },
];

var result = courses.every2(function (course, index, array) {
  return course.coin > 680;
});

console.log(result);
