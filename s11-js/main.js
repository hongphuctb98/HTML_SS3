"use strict";
// let n = +prompt("Enter n number");
// if (Number.isInteger(n) && n >= 0) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += j + " ";
//     }

//     console.log(str + "\n");
//   }
//

// let arr = [5, 8, 1, 3, 9, -4, 2, 6, 8];

// let arr1 = [9, 7, 4, 3, 4, -9, 2, 6, 41];
// let arr2 = [];
// let max = arr[0];
// let temp;
// let n = arr.length;
// arr.forEach((x) => {
//   if (x > max) max = x;
// });

// console.log(max);
// console.log(arr.reduce((sum, a, i, arr) => sum + a / arr.length, 0));

// let reverseArr = [];
// for (let i = 0; i < n; i++) {
//   reverseArr[i] = arr[n - i - 1];
// }

// // arr.includes(+prompt("input")) ? console.log("yes") : console.log("no");

// for (let i = 0; i < n; i++) {
//   for (let j = i + 1; j < n; j++) {
//     if (arr[i] > arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);
// for (let i = 0; i < n; i++) {
//   arr2[i] = arr[i];
//   arr2[9 + i] = arr1[i];
// }
// console.log(arr2);

// let arr = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];

// for (let i = 0; i < arr.length; i++) {
//   console.log("row" + i);

//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// let str = ["c", "s", "c", "2", "6", "1"];
// console.log(str.reverse().join(""));

// let str = "a,1,3,g,5,h,s,4,7,t,j,k";
// let strtArr = str.split(",");
// let sum = 0;
// for (let i = 0; i < strtArr.length; i++) {
//   if (parseInt(strtArr[i])) sum += parseInt(strtArr[i]);
// }

// console.log(sum);

// let array = ["Hello", "Rikkei", "Academy"];
// console.log(array.join(" "));

// let array = ["Hello", "World", "Rikkei", "Academy"];
// array.slice(1, 2);
// // array.splice(1, 1);
// console.log(array);

// Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// console.log(oneWord("ngo hong phuc"));

// console.log(upperFirstWord("ngo hong phuc"));

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Jonas Schmedtmann");
// lufthansa.book(635, "John Smith");

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// Does NOT work
// book(23, "Sarah Williams");

// Call method
// book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);
//1
// let input = prompt("Enter a number list");
// console.log(input);
// console.log(input.split(",").reduce((sum, a) => sum + parseInt(a), 0));
//2
// let max = 0;
// input.split(",").forEach((a) => {
//   if (max < a) max = a;
// });
// console.log(max);

//3
// const arr = [3, 4, 6, -9, 10, -88, 2];
// console.log(
//   arr.find((x, index) => {
//     return x == input ? index : "not found";
//   })
// );

//4

// let todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
// let input = prompt("Enter a todo action");
// while (input != 0) {
//   switch (input) {
//     case "C":
//       let todo = prompt("Enter a todo");
//       todoList.push(todo);
//       console.log(todoList);
//       input = prompt("Enter a todo action");
//       break;
//   }
// }

//6;
// let input = prompt("Enter a name");
// let newString = input.split(",");
// newString.forEach((a) => {
//   a = "<" + a + ">";
//   console.log(a);
// });

// for (let i = 0; i < newString.length; i++) {
//   newString[i] = "<" + newString[i] + ">";
// }

// console.log(newString.join(","));

//7

// input.split(",").forEach((a) => {
//   a % 2 == 1 ? console.log(a) : "";
// });

// console.log(
//   input.split(",").filter((a) => {
//     return a > 0;
//   })
// );

//10
// let input = prompt("enter a str");
// let changeArr = input.split(" ");
// for (let i = 0; i < changeArr.length; i++) {
//   let up = changeArr[i].charAt(0).toUpperCase();
//   let other = changeArr[i].substring(1).toLowerCase();
//   changeArr[i] = up + other;
// }
// console.log(changeArr.join(" "));

// let newStr = "";
// changeArr.forEach((x) => {
//   let [first, ...other] = x;
//   x = [first.toUpperCase(), ...other.join("").toLowerCase()].join("");
//   newStr += x + " ";

//   x += "1";
// });

// console.log(newStr);

// let str = "hEllo";
// let [first, ...other] = str;

// console.log([first.toUpperCase(), ...other.join("").toLowerCase()].join(""));

// let arr = ["a", "b", "c", "d", "e"];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

//12
let input = prompt("input number 100-999");
let text = ["mot", "hai", "ba", "bon", "nam", "sau", "bay", "tam", "chin"];
let arr = input.split("");

let mess = "";
if (arr[0] != "0") {
  mess += text[parseInt(arr[0] - 1)] + " tram ";
}

if (arr[1] == 0) {
  if (arr[2] == 0) {
    mess += "";
  } else {
    mess += " linh " + text[parseInt(arr[2] - 1)];
  }
} else {
  if (arr[2] == 0) {
    mess += text[parseInt(arr[1] - 1)] + " muoi ";
  } else {
    mess += text[parseInt(arr[1] - 1)] + " muoi " + text[parseInt(arr[2] - 1)];
  }
}
console.log(mess);
