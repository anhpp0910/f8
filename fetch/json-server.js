// Fetch
// response.json()
// JSON server: Fake API server / Mock API
// CRUD (Create POST, Read GET, Update PUT/PATCH, Delete DELETE)
// Postman

var courseAPI = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);
  handleCreateForm();
}

start();

// Functions
function getCourses(callback) {
  fetch(courseAPI)
    .then(function (res) {
      return res.json();
    })
    .then(callback);
}

function createCourse(data, callback) {
  fetch(courseAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (res) {
      res.json();
    })
    .then(callback);
}

function handleDeleteCourse(id) {
  fetch(courseAPI + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (res) {
      res.json();
    })
    .then(function () {
      var courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}

function renderCourses(courses) {
  var listCoursesBlock = document.getElementById("list-courses");
  var htmls = courses.map(function (course) {
    return `
  <li class="course-item-${course.id}">
  <h4>${course.name}</h4>
  <p>${course.description}</p>
  <button onclick='handleDeleteCourse(${course.id})'>Xoá</button>
  </li>
  `;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var btnCreate = document.getElementById("btnCreate");
  btnCreate.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
    var formData = {
      name: name,
      description: description,
    };
    createCourse(formData, getCourses(renderCourses));
  };
}
