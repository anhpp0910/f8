// Toán tử 3 ngôi - Ternary operator

var course = {
  name: "Javascript",
  coin: 40,
};

// if (course.coin > 0) {
//   console.log(`${course.coin} Coins`);
// } else {
//   console.log("Free");
// }

var result = course.coin > 0 ? `${course.coin} Coins` : "Free";
console.log(result);

// Làm bài
function getCanVoteMessage(age) {
  var result = age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";
  return result;
}

// Kỳ vọng
console.log(getCanVoteMessage(18)); // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)); // 'Bạn chưa được bỏ phiếu'

// function getRandNumbers(min, max, length) {
//   var arr = [];
//   for (var i = 1; i <= length; i++) {
//     var randNum = Math.random() * (max - min) + min;
//     arr.push(randNum);
//   }
//   return arr;
// }

function getRandNumbers(min, max, length) {
  var arr = [];
  for (var i = 1; i <= length; i++) {
    var randNum = Math.floor(Math.random() * (max - min) + min);
    arr.push(randNum);
  }
  return arr;
}

var myArr = getRandNumbers(0, 100, 4);

var sortArr = myArr.sort(function (a, b) {
  return b - a;
});

console.log(sortArr);
console.log(myArr.sort());

function getTotal(arr) {
  var sum = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(getTotal([1, 2, 3, 4, 8]));

var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];

function getTotal(orders) {
  var sum = 0;
  for (var i = 0; i < orders.length; i++) {
    sum += orders[i].price;
  }
  return sum;
}

// Expected results:
console.log(getTotal(orders)); // Output: 8700000

// For-in loop

var myInfo = {
  name: "AnhPP",
  age: 24,
  address: "SG",
};

for (var key in myInfo) {
  console.log(myInfo[key]);
}

var languages = "Javascript";

for (var key in languages) {
  console.log(languages[key]);
}

// BT for in
function run(object) {
  var arr = [];
  for (var key in object) {
    arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return arr;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

// for-of loop
var languages2 = ["Javascript", "Java", "PHP", "Ruby"];
for (var value of languages2) {
  console.log(value);
}

var language = "Javascript";
for (var value of language) {
  console.log(value);
}

var myInfo2 = {
  name: "AnhPP",
  age: "24",
};

console.log(Object.keys(myInfo2));

for (var value of Object.keys(myInfo2)) {
  console.log(myInfo2[value]);
}

console.log(Object.values(myInfo2));

for (var value of Object.values(myInfo2)) {
  console.log(value);
}

// break & contiunue in Loop
for (var i = 0; i < 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

// vòng lặp lồng nhau - nested loop
var myArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (var i = 0; i < myArray.length; i++) {
  for (var j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}

// Loop...

for (var i = 100; i > 0; i--) {
  console.log(i);
}

for (var i = 0; i <= 100; i += 5) {
  console.log(i);
}

for (var i = 100; i >= 0; i -= 5) {
  console.log(i);
}

// đệ quy
var array = ["a", "b", "c", "a", "b", "c", "a", "a"];
console.log([...new Set(array)]);

// 1. Xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng

function countDown(num) {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
  return num;
}
countDown(10);

function loop(start, end, cb) {
  if (start < end) {
    cb(start);
    return loop(start + 1, end, cb);
  }
}

var array = ["Javascript", "PHP", "Ruby"];

loop(0, array.length, function (index) {
  console.log(array);
});

function giaiThua(number) {
  if (number > 0) {
    return number * giaiThua(number - 1);
  }
  return 1;
}

console.log(giaiThua(6));
