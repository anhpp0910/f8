// DOM events
// 1. Input / select
// 2. Key up / down

document.onkeypress = function (e) {
  console.log(e.which);
  switch (e.which) {
    case 27:
      console.log("EXIT");
      break;
    case 13:
      console.log("SEND");
      break;
  }
};
