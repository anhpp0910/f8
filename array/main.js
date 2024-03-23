// var myString = '           iu bae bae bae bae bae nhiu!         '

// console.log(myString.length);

// var find = myString.indexOf('ab')

// if(find == -1) {
//     console.log('Not found')
// } else {
//     console.log('Found!')
// }

// console.log(myString.slice(-5, -1));

// console.log(myString.replace(/bae/g, 'Thuan Thien'))

// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// console.log(myString.trim());
// console.log(myString.trim().length);

var miroku = "javascript";
console.log(miroku.split(""));

// const myString2 = 'Nguyen Thuan Thien'
// console.log(typeof myString2.charAt(6));
// console.log(myString2.charAt(7));
// console.log(typeof myString2[6]);
// console.log(myString2[7]);
// console.log(myString2[30]);
// console.log(typeof myString2[30]);

// console.log(typeof myString2.charAt(30));

// function isNumber(value) {
//    return (typeof value === 'number' && !isNaN(value))
//     ? true : false
// }

// console.log(isNumber(999)); // true
// console.log(isNumber('abc')); // false
// console.log(isNumber('100')); // false

// console.log(isNumber(NaN)); // false
// console.log(isNumber(100 / 'abc')); // false

var languages = ["Javascript", "Java", "PHP", "Ruby"];
var languages2 = ["C", "C++", "C#"];

console.log(languages.join(" - ")); //Split array

// POP: Popping the last item out of an array, returns the popped item

// PUSH: Pushing items into the end of array and returns the length of new array

// SHIFT: ngược lại POP Popping the first item out of an array, returns the popped item

// UNSHIFT: ngược lại PUSH Pushing items into the ahead of array and returns the length of new array

// console.log(languages.splice(3, 2, "Python")); tra ve mang bi xoá

//CONCAT: nối 2 array

// SLICE: cắt mảng từ index chỉ định

console.log(languages.slice(1, 2));

// Viết hàm tại đây

function getLastElement(array) {
  return array.slice(-1);
}

// Ví dụ sử dụng
var animals = ["Monkey", "Tiger", "Elephant"];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
