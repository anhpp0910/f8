// 1. Front-end: Xây dựng giao diện người dùng

// 2. Back-end: Xây dựng logic xử lý
// + Cơ sở dữ liệu

// API (URL) -> Application programing interface

// Cổng giao tiếp giữa các phần mềm

// Backend (OK) -> API (URL) -> Fetch -> JSON/XML
// -> JSON.parse -> Javascript types
// -> Render ra giao diện với HTML

var postAPI = "https://jsonplaceholder.typicode.com/posts";

// stream
fetch(postAPI)
  .then(function (res) {
    return res.json();
    // JSON.parse: JSON -> Javascript types
  })
  .then(function (posts) {
    var htmls = posts.map(function (post) {
      return `<li>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </li>`;
    });
    htmls = htmls.join("");
    document.getElementById("post-block").innerHTML = htmls;
  })
  .catch(function (err) {
    console.log("Error!");
  });
