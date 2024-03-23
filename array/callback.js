// var htmls = courses.map2(function (course) {
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(""));

Array.prototype.map2 = function (callback) {
  var arrayLength = this.length;
  var output = [];
  for (var i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;
};

var courses = ["Javascript", "PHP", "Ruby"];
var htmls = courses.map2(function (course) {
  return `<h2>${course}</h2>`;
});

console.log(htmls.join(""));

// forEach, find, filter, some, every, reduce

var courses2 = new Array(10);

courses2.push("Java", "PHP");

console.log(courses2);

for (var index in courses2) {
  console.log(index);
}
