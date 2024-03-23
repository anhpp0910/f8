function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var user1 = new User("Anh", "Phan", "Avatar 1");
var user2 = new User("Thien", "Nguyen", "Avatar 2");

User.prototype.className = "CLC";
User.prototype.getClassName = function () {
  return this.className;
};

console.log(user1.className);
console.log(user2.getClassName());

// Đối tượng Date
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(year);
console.log(month);
console.log(day);
console.log(`${day}/${month}/${year}`);

// Math.random
var random = Math.floor(Math.random() * 5);
var bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin"];
console.log(bonus[random]);
