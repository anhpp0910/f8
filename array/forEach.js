// Object prototype
// For in
// hasOwnProperty
// forEach()

var courses = new Array(100);

courses.push("Javascript", "Ruby");

console.log(courses);

Array.prototype.forEach2 = function (cb) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      cb(this[index], index, this);
    }
  }
};

courses.forEach2(function (course, index, array) {
  console.log(course, index, array);
});

function tinhTong(a, b) {
  return a + b;
}
