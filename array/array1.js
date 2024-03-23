/*
Array method:
forEach()
every()
some()
find()
filter()
map()
reduce()
*/

var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 0,
  },
  {
    id: 2,
    name: "HTML, CSS",
    coin: 30,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 200,
  },
  {
    id: 4,
    name: "PHP",
    coin: 200,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 200,
  },
  {
    id: 6,
    name: "ReactJS",
    coin: 10,
  },
  {
    id: 7,
    name: "ReactJS",
    coin: 10,
  },
];

//
courses.forEach(function (course, index) {
  console.log(index, course);
}); // callback

//
var isFree = courses.every(function (course, index) {
  console.log(index);
  return course.coin === 0;
});
console.log(isFree);

//
var isFree2 = courses.some(function (course, index) {
  console.log(index);
  return course.coin === 0;
});
console.log(isFree2);

//
var findCourse = courses.find(function (course, index) {
  return course.name === "ReactJS";
});
console.log(findCourse);

//
var findCourse2 = courses.filter(function (course, index) {
  return course.name === "ReactJS";
});
console.log(findCourse2);

// BT
const sports = [
  {
    name: "Bóng rổ",
    like: 6,
  },
  {
    name: "Bơi lội",
    like: 5,
  },
  {
    name: "Bóng đá",
    like: 10,
  },
];

function getMostFavoriteSport(sportsArr) {
  var favSports = sportsArr.filter(function (sport, index) {
    return sport.like > 5;
  });
  return favSports;
}
console.log(getMostFavoriteSport(sports));

// map
var courseHandler = function (course, index) {
  return `<h2>${course.name}</h2>`;
};
var newCourses = courses.map(courseHandler);
console.log(newCourses.join(""));

// reduce
// biến lưu trữ
// thực hiện việc lưu trữ

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//   var total = accumulator + currentValue.coin;
//   console.table({
//     "Biến lưu trữ: ": accumulator,
//     "Giá khoá học: ": currentValue.coin,
//     "Tích trữ được: ": total,
//   });
//   return total;
// }
// var totalCoin = courses.reduce(coinHandler, 0); // initial value
// console.log(totalCoin);

// var totalCoin = courses.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue.coin;
// }, 0);
// console.log(totalCoin);

var totalCoin = courses.reduce(function (total, course) {
  return total + course.coin;
}, 0); // initial value - giá trị k bắt buộc

console.log(totalCoin);
// BT reduce

var sports2 = [
  {
    name: "Bơi lội",
    gold: 11,
  },
  {
    name: "Boxing",
    gold: 3,
  },
  {
    name: "Đạp xe",
    gold: 4,
  },
  {
    name: "Đấu kiếm",
    gold: 5,
  },
];

function getTotalGold(array) {
  var totalGold = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.gold;
  }, 0);
  return totalGold;
}

// Expected results:
console.log(getTotalGold(sports2)); // Output: 23

// reduce k truyền accumulator
var numbers = [100, 200, 220, 200, 480];
var totalCoin2 = numbers.reduce(function (total, number) {
  return total + number;
});

console.log(totalCoin2);

// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = [];
for (var i = 0; i < depthArray.length; i++) {
  if (depthArray[i].length > 0) {
    flatArray = flatArray.concat(depthArray[i]);
  } else flatArray.push(depthArray[i]);
}
console.log(flatArray);

var flatArray2 = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);
console.log(flatArray2);

// Lấy ra các khoá học và đưa vào 1 mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "Javascript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "NodeJS",
      },
    ],
  },
];

var coursesList = topics.reduce(function (courses, topicItem) {
  return courses.concat(topicItem.courses);
}, []);
console.log(coursesList);

var htmls = coursesList.map(function (course) {
  return `
  <div>
   <h2>${course.title}</h2>
   <p>${course.id}</p>
  </div>`;
});

console.log(htmls.join(" "));

// NOLAN FILM
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];

function calculateRating(array) {
  var nolanFilm = array.filter(function (film) {
    return film["Director"] === "Christopher Nolan";
  });
  console.log(nolanFilm);
  var totalIMDB = nolanFilm.reduce(function (total, film) {
    console.log(film["imdbRating"]);
    return total + Number(film["imdbRating"]);
  }, 0);
  return totalIMDB / nolanFilm.length;
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675
