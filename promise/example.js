var users = [
  {
    id: 1,
    name: "AnhPP",
  },
  {
    id: 2,
    name: "Bae",
  },
  {
    id: 3,
    name: "MaiHT",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Love you <3",
  },
  {
    id: 2,
    user_id: 2,
    content: "Love you 2 <3",
  },
  {
    id: 3,
    user_id: 1,
    content: "Moah",
  },
];

// 1. Lấy comments từ API
// 2. Từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng

// Fake API

// 1. Array
// 2. Function, callback
// 3. Promise
// 4. DOM

function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var result = users.filter(function (user) {
        return userIds.includes(user.id);
      });
      resolve(result);
    }, 1000);
  });
}

// Callback hell
// Promise hell
// Async / Await

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });

    return getUsersByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    console.log(data);
    var commentBlock = document.getElementById("comment-block");
    var htmls = "";
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      htmls += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentBlock.innerHTML = htmls;
  });
