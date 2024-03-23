Array.prototype.reduce2 = function (callback, result) {
  var i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];

var result = numbers.reduce2((sum, num, index, array) => {
  console.log(sum, num, index, array);
  return sum + num;
}, 10);

console.log(result);

// reduce(callback, initialValue)

// BT
function arrToObj(arr) {
  var result = arr.reduce(function (obj, infoItem) {
    obj[infoItem[0]] = infoItem[1];
    return obj;
  }, {});
  return result;
}
// Expected results:
var arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
