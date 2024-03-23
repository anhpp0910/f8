function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return new Promise(function (resolve, reject) {
      reject("Error!");
    });
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .then(function () {
    console.log(4);
    return sleep(1000);
  })
  .catch(function (error) {
    console.log(error);
  });

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// Thư viện: output luôn luôn là một promise

// var promise = Promise.resolve("Success!");
var promise = Promise.reject("Error!");

promise
  .then(function (result) {
    console.log("result:", result);
  })
  .catch(function (error) {
    console.log("error:", error);
  });

// Promise.all
var promise1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 2000);
});

var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 5000);
});

// var promise2 = Promise.reject("Error!");

Promise.all([promise1, promise2])
  .then(function ([result1, result2]) {
    console.log(result1.concat(result2));
  })
  .catch(function (error) {
    console.log(error);
  });
