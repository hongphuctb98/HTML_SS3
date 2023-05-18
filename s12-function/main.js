"use strict";

// const a = 15;
// const b = 20;

// function display(x, y) {
//   console.log(x * y);
// }
// display(a, b);
// display(5, 6);

// function inso(x) {
//   console.log(x);
// }

// let str = "abcdefedcba";
// function isPalindrome(s) {
//   let i = 0;
//   let j = s.length - 1;
//   while (i <= j) {
//     if (s[i] != s[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// }
// console.log(isPalindrome(str));

// function caapitalize(s) {
//   let [first, ...other] = s;
//   return first.toUpperCase() + other.join("").toLowerCase();
// }

// let arr = "abcdef";
// // console.log(arr.reverse());
// let res = arr.split("");
// console.log(res);

// let arr = [1, 2, 3, 5, 6, 7, 9, 10];

// function sumTen(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == 10) {
//         console.log(arr[i], arr[j]);
//       }
//     }
//   }
// }

// sumTen(arr);

// function countChars(str) {
//   let charCount = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }

//   let result = "";
//   for (let char in charCount) {
//     result += `The character ${char} appears ${charCount[char]} times.\n`;
//   }
//   return result;
// }

// let str = "Hello world";
// console.log(countChars(str));

// let arr = ["a", "b", "c", "d", "e"];

// arr.forEach((x, i) => {
//   if (x == "b") arr.splice(i, 1);
// });

// console.log(arr);

function giaithua(n) {
  if (n == 1) return 1;
  return n * giaithua(n - 1);
}

console.log(giaithua(5));

function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArr([10, 12, 9, 5, 15, 20, 11]));

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// const ford = new CarCl("Ford", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// let staff = {
//   id: 1,
//   name: "Ronaldo",
//   age: 30,
//   salary: 1000,
// };

// let company = [];
// company.push(staff);
// console.log(company);

// const todoList = [
//   { id: 1, todo: "Have breakfast", completed: false },
//   { id: 2, todo: "Have breakfast", completed: true },
//   { id: 3, todo: "Have breakfast", completed: false },
// ];

// function addTodo(todo) {
//   let newId = todoList.length + 1;
//   let newTodo = {
//     id: newId,
//     todo: todo,
//     completed: false,
//   };
//   todoList.push(newTodo);
// }

// function removeToDo(id) {
//   todoList.filter((x, i) => {
//     if (x.id == id) {
//       todoList.splice(i, 1);
//     }
//   });
// }

// function reloadTodo() {
//   todoList.forEach((x, i) => {
//     x.id = i + 1;
//   });
// }

// addTodo("choi");

// removeToDo(2);
// reloadTodo();
// console.log(todoList);

// function isNumber(n) {
//   return parseInt(n) ? true : false;
// }

// console.log(isNumber("a4"));

let products = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];

function removePro(id) {
  products.filter((x, i) => {
    if (x.id == id) products.splice(i, 1);
  });
}

function findName(name) {
  products.filter((x) => {
    if (x.name == name) console.log(x);
  });
}

function addPro(name) {
  let newPro = {
    id: products.length + 1,
    name: name,
    count: 0,
  };
  products.push(newPro);
}

findName("Milk");
console.log(products);
let courseList = [];
class Course {
  constructor(name, complete) {
    this.name = name;
    this.complete = complete;
  }
  set setComplete(complete) {
    this.complete = complete;
  }
  get getComplete() {
    return this.complete;
  }
}

function addCourse(name, complete) {
  let newCourse = new Course(name, complete);
  courseList.push(newCourse);
}

function deleteProduct(button) {
  button.parentElement.remove();
}

// function add() {
//   let newDisplay = "";

//   for (let i = 0; i < 4; i++) {
//     newDisplay += `<li>
//     <span> product ${[i + 1]}</span>
//     <button onclick="editProduct(this)">Edit</button>
//     <button onclick="deleteProduct(this)">Delete</button>
//   </li>`;
//   }

//   document.querySelector("#product-list").innerHTML = newDisplay;
// }

// add();

// let a = +prompt("input number a");
// let b = +prompt("input number b");
// let c = +prompt("input number c");

// function findMin(x, y, z) {
//   return Math.min(x, y, z);
// }

// console.log(findMin(a, b, c));

// function soNt(a){
//   for(let i = 2 ; i <=Math.sqrt(a); i++){
//       if(a%i==0) return false;
//   }
//   return true
// }7

// let str = "hello world";
// let arr = {};
// function acountS(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (!arr[str[i]]) {
//       arr[str[i]] = 1;
//     } else {
//       arr[str[i]]++;
//     }
//   }
// }
// acountS(str);
// for (let key in arr) {
//   console.log(`${key} : ${arr[key]}`);
// }

// function fibo(n) {
//   if (n == 1) return 1;
//   return n * fibo(n - 1);
// }

let str1 = "hello world";

for (let i = 0; i < str1.length; i++) {
  let count = 0;
  for (let j = 0; j < str1.length; j++) {
    if (str1[i] == str1[j]) {
      count++;
    }
  }

  console.log(`${str1[i]} : ${count}`);
}
