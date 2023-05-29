"use strict";

//1
// let str = "program";
// let arr = str.split("");
// let n = arr.length;

// for (let i = 0; i < n / 2; i++) {
//   let temp = arr[i];
//   arr[i] = arr[n - i - 1];
//   arr[n - i - 1] = temp;
// }
// console.log(arr);

//2
// let str = "hello rikkei academy";
// let arr = str.split(" ");
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }

// console.log(arr.join(" "));

//3
// let arr = [
//   "one",
//   "two",
//   "three",
//   "one",
//   "one",
//   "four",
//   "five",
//   "four",
//   "five",
//   "five",
// ];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!newArr.includes(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

// 4;
// let arr = [5, 2, 3, 4, 1];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     console.log(arr);
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

//5

// let staff = [
//   { name: "Nam", age: 20 },
//   { name: "Hung", age: 30 },
//   { name: "Momo", age: 40 },
// ];
// function display() {
//   staff.forEach((member) =>
//     console.log(`
//   Name : ${member.name}
//   Age : ${member.age}`)
//   );
// }

// function addStaff(name, age) {
//   staff.push({ name: name, age: age });
// }

// function updateStaff(pos, newName, newAge) {
//   staff[pos - 1].name = newName;
//   staff[pos - 1].age = newAge;
// }

// function deleteStaff(pos) {
//   staff.splice(pos - 1, 1);
// }

//6
function validateDay(day, month, year) {
  let flag = true;
  if (month < 1 || month > 12) {
    flag = false;
  }
  if (year < 1) {
    flag = false;
  }

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day < 1 || day > 31) {
        flag = false;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (day < 1 || day > 30) {
        flag = false;
      }
      break;
    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        if (day < 1 || day > 29) {
          flag = false;
        }
      } else {
        if (day < 1 || day > 28) {
          flag = false;
        }
      }
  }

  return flag;
}
let day = 2018;
let month = 2;
let year = 2024;
let flag = validateDay(day, month, year);
console.log(
  `${day}/${month}/${year} la ngay ${flag ? "hợp lệ" : "không hợp lệ"}`
);

function nextDay(day, month, year) {
  let check = validateDay(day + 1, month, year);
  if (check) {
    console.log(`${day + 1}/${month}/${year} `);
  } else {
    check = validateDay(day, month + 1, year);
    if (check) {
      console.log(`01/${month + 1}/${year} `);
    } else {
      console.log(`01/01/${year + 1} `);
    }
  }
}
nextDay(day, month, year);

//7
let bookStore = [
  "Tôi thấy hoa vàng trên cỏ xanh",
  "Đắc nhân tâm",
  "Hong dai",
  "",
];
let cart = [];

function addBook(book) {
  bookStore.push(book);
}

function removeBook(pos) {
  bookStore.slice(pos - 1, 1);
}
function readBook() {
  bookStore.forEach((book) => console.log(book));
}

function updateBook(pos, newBook) {
  bookStore[pos - 1] = newBook;
}

let map = new Map();
map.set("firstName", "hong");
map.set("midName", "Luke");
map.set("lastName", "Skywalker");
map.set("occupation", "Jedi Knight");

console.log(map);
console.log(map.has("hong"));
console.log(map.get("midName"));

let x = [3, 5, 6, 9];

console.log(x);
let a = 0;
let b = "5";
console.log(b++ + 3, b);

console.log(0.1 + 0.2 == 0.3);
