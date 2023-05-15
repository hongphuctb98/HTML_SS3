"use strict";

// const years = [1991, 1998, 2002, 2007];

// const age = [];
// for (let i = 0; i < years.length; i++) {
//   age.push(2023 - years[i]);
// }

// console.log(age);

// let studentCount = 0;
// var msg = "Coding is hard but super cool and fun";
// var msg2 = "asd";

// console.log(msg.startsWith("Coding"));

// console.log(msg);

// console.log(msg2.padEnd(5, "*"));
// console.log(studentCount);

// studentCount = 30;
// console.log(studentCount);
// console.log(msg);
// console.log(msg.toUpperCase());
// studentCount += parseInt(prompt("input student count: "));
// console.log(studentCount);
//6
// alert(`hi ${prompt("hi there, your name please")} `);
//7
// alert(`hi ${prompt("FirstName")} ${prompt("LastName")}`);
//8
// let width = prompt("input width");
// alert(Math.pow(width, 2));
// let s = width * width;

// alert(`hello phuc ${width * width}`);
// alert("hello phuc ${s}");

//9

// var r = prompt("input r");
// alert(Math.pow(r, 2) * Math.PI);
//11

// const phuc = {
//   firstName: "hong",
//   lastName: "phuc",
//   birthYear: 1998,
//   job: "BrSe",
//   friends: ["trump", "ha", "hanh"],
//   calcAge: function (birthYear) {
//     return 2023 - birthYear;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge(this.birthYear)}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };
// phuc.calcAge(phuc.birthYear);
// console.log(phuc.getSummary());

// const years = [1991, 1998, 2002, 2007];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }

// console.log(ages);
// console.log(typeof ages);

// console.log(Math.trunc(Math.random() * 6) + 1)

// var firstName = prompt("input first name");
// var lastName = prompt("input last Name");
// alert("hello " + firstName + " " + lastName);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // }

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYeah;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       jonas.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// function run() {
//   var person = {
//     firstName: "Trung",
//     lastName: "Vuong",
//     age: 50,
//     eyeColor: "blue",
//   };

//   for (let x of Object.values(person)) {
//     console.log(x);
//   }
// }

// let data = [1, 2, 3, 4, 5];
// console.log(data.every((x) => x % 2 == 0) ? "yes" : "no");

// let data1 = [-1, -2, 3, 4, -5];
// console.log(data1.filter((x) => x > 0));

// console.log(data1.map((x) => Math.abs(x)));

// let i = data1.findIndex((x) => x > 0);
// console.log(data1.findIndex((x) => x > 0));

// var data2 = [1, 5, 30, 26];

// data2.forEach((x) => {
//   if (x % 5 == 0) console.log(x);
// });

// var data3 = [1, 2, 3, 4, 5];
// console.log(data3.includes(3, 2));

// var data4 = ["A", "B", "C"];
// data4.shift();
// data4.pop();
// data4.push("X");
// console.log(data4);

// var data5 = ["A", "B", "C"];

// console.log(data5.reverse());

// data = [1, 5, 2, 6, 8];

// console.log(data.sort((a, b) => a - b));

// let result = Math.trunc(Math.random() * 6 + 1);
// console.log(result);
// let answer = prompt("input number");
// while (result != answer) {
//   if (result > answer) {
//     console.log("nho qua");
//   } else if (result < answer) {
//     console.log("lon qua");
//   }
//   answer = prompt("input number");
// }
// console.log("đung");

//1
// let inputNumber = prompr("input");
// if(inputNumber>0 && inputNumber<=4){
// alert("nua duoi");
// }else if(inputNumber< 9&&inputNumber>=5){
//  alert("nua tren");
// }

//2
// let n = prompt("input n");
// let x = prompt("input x");
// if(x>0 && x<n/2){
//   alert("nua duoi");
// }else(x<n&&x>n/2){
//   alert("nua tren");
// }

//3

// let x = prompt("input x");

// if (x % 2 == 0) {
//   alert("so chan");
// } else {
//   alert("so le");
// }

//4
// let weight = prompt("input weight");
// let height = prompt("input height");
// let bmi = weight / (height * height);
// if(bmi<16){
//   alert("gay qua")
// }else if(bmi>16 && bmi <18.5){
//     alert("chuan")
// }

//5
// let year = prompt("input year");
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       alert("nhuan");
//     } else {
//       alert("khong nhuan");
//     }
//   } else {
//     alert("nhuan");
//   }
// }

//8
// let a = +prompt("input a");
// let b = +prompt("input b");

// switch (true) {
//   case true:
//     console.log(a + b);
//   case true:
//     console.log(a - b);
//   case true:
//     console.log(a * b);

//   case true:
//     console.log(a / b);
// }

//11
// let a = +prompt("input a");
// if (Math.sqrt(a) % 1 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// let x = 7;
// while (x > 0) {
//   if (x % 2 == 0) console.log(x);
//   x--;
// }

// alert(+prompt("input x") % 2 == 0 ? "chan" : "le");
// let str = "this is Test"
// console.log()

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log("..." + str);
// };
// printForecast(data1);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// console.log(secretNumber);

// document.querySelector(".check").addEventListener("click", function () {
//   let guess = +document.querySelector("input").value;
//   if (!guess) {
//     displayMessage("No number!");
//   } else if (guess == secretNumber) {
//     displayMessage("Correct Number!");
//   } else if (guess != secretNumber) {
//     displayMessage(guess > secretNumber ? "Too high" : "Too low");
//     score--;
//   }
// });

// function displayMessage(message) {
//   document.querySelector(".message").textContent = message;
// }

// function calcAge(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// }
// calcAge(1998);

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split("");
//   return [first.toUpperCase(), ...others].join(" ");
// };
// console.log(upperFirstWord("hello world"));

const high5 = function () {
  console.log("hello");
};

document.body.addEventListener("click", high5);

["phuc", "huan", "linh"].forEach(high5);

Array.prototype.map2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

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

console.log(
  watchList
    .filter((x) => x.Director === "Christopher Nolan")
    .reduce((total, x, i, arr) => total + parseInt(x.imdbVotes) / arr.length, 0)
);
