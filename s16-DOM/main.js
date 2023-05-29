"use strict";

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let s = 0;
let m = 0;
let h = 0;

// setInterval(() => {
//   s++;
//   second.innerHTML = `${s}
//   <p>giay</p>`;
//   if (s == 60) {
//     s = 0;
//     m++;
//     minute.innerHTML = `${m}
//     <p>phut</p>`;
//   }
//   if (m == 60) {
//     m = 0;
//     h++;
//     hour.innerHTML = `${h}
//     <p>gio</p>`;
//   }
//   if (h == 24) {
//     h = 0;
//   }
// }, 100);

// let hourReverse = document.querySelector(".hourReverse");
// let minuteReverse = document.querySelector(".minuteReverse");
// let secondReverse = document.querySelector(".secondReverse");

// let sReverse = 60;
// let mReverse = 9;
// let hReverse = 0;

// function update() {
//   sReverse--;
//   second.innerHTML = `${sReverse}
//   <p>giay</p>`;
//   if (sReverse == 0) {
//     sReverse = 60;
//     mReverse--;
//     minute.innerHTML = `${mReverse}
//     <p>phut</p>`;
//   }
// }

// let countdown = setInterval(update, 100);
// setTimeout(() => {
//   clearInterval(countdown);
// }, 60000);

const container = document.getElementById("list");
console.log(container);
for (let i = 0; i < 3; i++) {
  container.insertAdjacentHTML("afterbegin", `<li>${i}</li>`);
  // container.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
}

// setInterval(() => {
//   console.log("heeHaw");
// }, 1000);

const bai4 = document.querySelector(".bai4").querySelectorAll("li");
bai4.forEach((item) => {
  console.log(item.textContent);
});

const element5 = document.querySelector(".bai5").querySelectorAll(".singer");
element5.forEach((item) => {
  console.log(item);
});

const btn = document.querySelectorAll("button");

// btn.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log(e.target);
//   });
// });

btn.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    console.log(e.key);
  });
});

const btnSelector = document.querySelector(".click");

const boxSelector = document.querySelector(".box");

btnSelector.addEventListener("click", () => {
  // boxSelector.style.display="none"
  // boxSelector.classList.toggle("hidden");
  // boxSelector.classList.toggle("bg-red");
  btnSelector.classList.toggle("btn-add");
  if (btnSelector.classList.contains("btn-add")) {
    boxSelector.classList.toggle("hidden");
  }
});

const upperSelector = document.querySelector(".upper");
const inputElement = document.querySelector("input");
const nameText = document.querySelector("label");

const list1Selector = document.querySelector(".list1");

upperSelector.addEventListener("click", () => {
  list1Selector.insertAdjacentHTML(
    "beforeend",
    `<li>${inputElement.value}</li>`
  );

  nameText.innerHTML = inputElement.value;
  inputElement.value = "";
});

upperSelector.addEventListener("click", () => {
  list1Selector.insertAdjacentHTML(
    "beforeend",
    `<input type="text" placeholder="input here">`
  );
});

const colorList = document.querySelectorAll(".color");
colorList.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle(`bg-${item.getAttribute("data-type")}`);
  });
});

let fitmentList = ["backpack", "shirt", "pants", "ring"];
let fitmentListSelector = document.querySelector(".fitmentList");
let btnFit = document.querySelector(".btn-fit");
let inputFit = document.querySelector(".input-fit");
const fitmentSelector = document.querySelectorAll(".fitment");
// console.log(...fitmentSelector);
// console.log(fitmentListSelector);

// function addfitment() {
//   fitmentListSelector.innerHTML = `<li class="fitment">Light</li>
//   <li class="fitment">Pen</li>`;
//   let html = "";
//   fitmentList.forEach((item) => {
//     html += `<li>${item}</li>`;
//   });

//   fitmentListSelector.insertAdjacentHTML("beforeend", html);
//   inputFit.value = "";
// }

function addfitment() {
  fitmentListSelector.innerHTML = `<li class="fitment">Light</li>
  <li class="fitment">Pen</li>`;
  fitmentList.forEach((item) => {
    let row = document.createElement("li");
    row.innerHTML = item;
    fitmentListSelector.appendChild(row);
  });
}

addfitment();
btnFit.addEventListener("click", () => {
  fitmentList.push(inputFit.value);
  addfitment();
});
