"use strict";
//I.01

// let str = "123479";
function isIncreasingNumber(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}

//I.02

// let str = "94325";
function isDecreasingNumber(str) {
  let arr = str.split("");
  let flag = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      flag = false;
    }
  }
  return flag;
}

//I.03
// let str = "12345";
function isIncreasingNumber(n, x) {
  let arr = n.split("");
  let flag = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1] || arr[i + 1] - arr[i] != x) {
      flag = false;
    }
  }
  return flag;
}

//I.04
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
//I.05

function isPerectSquare(n) {
  return Math.sqrt(n) % 1 == 0 ? true : false;
}

//I.06

function isPerfectNumber(n) {
  if (n < 1 || n > 1000) return false;
  if (n > 1000 || n < 1) return false;
  let sum = 0;
  for (let i = 1; i < 6; i++) {
    if (n % i == 0) sum += i;
  }
  return sum == n ? true : false;
}

//I.09
function hasTwoDigitsWithSum(n, sum) {
  let arr = n.toString().split("");
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += Number(arr[i]);
  }

  return s == sum ? true : false;
}

//II.1

function countWords(str) {
  return str.split(" ").length;
}

//II.2

function statisticsWods(str) {
  let obj = {};
  let arr = str.split(" ");
  console.log(str);
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
    console.log(obj);
  }
  return obj;
}

//II.3
function statisticsCharacter(str) {
  let obj = {};
  let arr = str.split("");
  if (arr.length > 1) obj["space"] = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      obj["space"]++;
      continue;
    }
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}

// let str = "aa b cc ";

//II.4

function countEmail(str) {
  let domains = [".com", ".vn"];
  let flag = true;
  if (!str.includes("@")) {
    flag = false;
  }

  let [user, domain] = str.split("@");

  if (user.length < 4) {
    flag = false;
  }

  for (let i = 0; i < domains.length; i++) {
    if (domain.includes(domains[i])) {
      domain = domain.split(domains[i]);
      break;
    }
    flag = false;
  }
  if (domain[0].length < 4) {
    flag = false;
  }

  return flag;
}

// function countEmail(str) {
//   let count = 0;
//   let emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
//   let matches = str.match(emailRegex);
//   if (matches) {
//     count = matches.length;
//   }
//   return count;
// }

let str = "test@example.com";
// console.log(countEmail(str));

//III.1

function hasEvenNUmberGreaterThanN(numberList, n) {
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 == 0 && numberList[i] > n) {
      return true;
    }
  }
  return false;
}
// console.log(hasEvenNUmberGreaterThanN([2, 3, 4], 5));

//III.2
function hasOdddNumberDivisibleBy3(numberList) {
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 3 == 0) {
      return true;
    }
  }
  return false;
}

//III.3

function hasEasyFronEnd(wordList) {
  for (let i = 0; i < wordList.length; i++) {
    if (wordList.join(" ").indexOf("easy frontend") != -1) {
      return true;
    }
  }

  return false;
}

//III.6

function hasStudent(studentList, n) {
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].id == n) {
      return true;
    }
  }
  return false;
}

let studentList = [
  { id: 1, name: "Easy" },
  { id: 2, name: "fw" },
];

//III.7

function hasAlice(studentList) {
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].name.tolowerCase() == "Alice") {
      return true;
    }
  }
  return false;
}

//III.8
function hasFreeShip(productList, price) {
  productList.filter((product) => {
    return product.price > price;
  });
}

//III.9
function isIncreasingNumberList(numberList) {
  if (numberList.length < 3) return false;
  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] >= numberList[i + 1]) {
      return false;
    }
  }
  return true;
}

//III.b.1
function findMinposotove(numberList) {
  numberList = numberList.sort().reverse();
  let min;

  console.log(numberList);
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] < 0) {
      min = numberList[i - 1];
      break;
    }
  }

  return min;
}

//III.b.2
function findLongestWord(arr) {
  let lengthMax = 0;
  let strMax;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5 || arr[i].indexOf(" ") != 1) continue;
    if (arr[i].length > lengthMax) {
      lengthMax = arr[i].length;
      strMax = arr[i];
    }
  }
  return strMax;
}

//III.b.3

function findFirstpositionEven(arr) {
  return arr.find((num) => num % 2 == 0);
}

//III.b.4

function findLastNrgativeOdd(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0 && arr[i] < result) {
      result = arr[i];
    }
  }
  return result;
}

function findSecondLargestNumber(arr) {
  return arr.sort()[arr.length - 2];
}

function findPerfectSquare(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.sqrt(arr[i]) % 1 == 0 && arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

const productList = [
  { id: 1, code: "ip03", math: 10, english: 5, name: "Easy" },
  { id: 2, code: "ip02", math: 8, english: 8, name: "fFrontendw2" },
  { id: 3, code: "ip01", math: 10, english: 5, name: "fFrontendw3" },
];

// console.log(Math.max(...[5, 3, 4, 9, -2, 10]));

function findSTudentHavingHighestMath(productList) {
  return productList.reduce((acc, cur) => (cur.math > acc.amth ? cur : acc));
}

function findStudenthavingMinAvg(productList) {
  return productList.reduce((acc, cur) =>
    (cur.math + cur.english) / 2 <= (acc.math + acc.english) / 2 ? cur : acc
  );
}
let productList1 = [
  { id: 1, name: "Alice", marks: { math: 5, english: 6 } },
  { id: 2, name: "bob", marks: { math: 9, english: 8 } },
  { id: 3, name: "Ashe", marks: { math: 7, english: 7 } },
];

function countStudent(productList, point) {
  return productList.filter((product) => {
    console.log("start filter");
    const avg =
      Object.values(product.marks).reduce((acc, cur) => acc + cur) /
      Object.values(product.marks).length;
    return avg > point;
  });
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(2, 2, 10);
console.log(arr);
