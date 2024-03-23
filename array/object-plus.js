var emailKey = "email";

var myInfo = {
  name: "AnhPP",
  age: 18,
  address: "SG VN",
  [emailKey]: "anhpp@gmail.com",
  getName: function () {
    return this.name;
  },
};

// Function --> Phương thức - Method
// Others --> Thuộc tính - Property

console.log(myInfo);

// Object constructor

// Object prototype - Basic

var User = function (firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
};

User.prototype.className = "F8";
User.prototype.getClassName = function () {
  return this.className;
};

var user1 = new User("Son", "Dang", "ava1");
var user2 = new User("Anh", "Phan", "ava2");

console.log(user1.className);
console.log(user2.getClassName());

// Đối tượng Date
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`);

// Math object

var random = Math.floor(Math.random() * 100);

if (random < 50) {
  console.log("Cường hoá thành công!");
}

console.log(Math.max(1, 2, 3, -2, 54, 5, 435, 436));
