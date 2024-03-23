// 1. JSON là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, String, Boolean, Null, Array,
// Object

// Mã hoá (Encode) / Giải mã (Decode)
// stringyfy: từ Javascript types -> JSON
// parse: từ JSON -> Javascript types

// var json = '["Javascript", "PHP"]';
var json = '{"name": "AnhPP", "age":18}';
console.log(JSON.parse(json));

console.log(
  JSON.stringify({
    name: "AnhPP",
    age: 24,
    test: function () {},
  })
);
