// Tagged template literals

function highlight([first, ...strings], ...values) {
  console.log(first);
  return values.reduce(
    (acc, curr) => `${acc} <b>${curr}</b> ${strings.shift()}`,
    first
  );
}

var brand = "F8";
var course = "Javascript";

const html = highlight`Học lập trình ${course} tại ${brand}!`;

document.getElementById("content").innerHTML = html;
