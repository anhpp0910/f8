// Promise
// - Sync
// - Async: setTimeout, setInterval, fetch
// XMLHttpRequest, file reading, request animation frame

// Dùng Promise để xử lý thao tác bất đồng bộ
// Trước khi có Promise dùng callback nhưng phát sinh callback he;l
// Callback hell
// Pyramid of doom

// 1. Pending
// 2. Fulfilled
// 3. Rejected

var promise = new Promise(
  // Executor
  function (resolve, reject) {
    // Logic
    // Thành công: resolve()
    // Thất bại: reject()

    // Fake call API
    resolve();
  }
);

// chain
promise
  .then(function () {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve([1, 2, 3]);
      }, 3000);
    });
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Done!");
  });
