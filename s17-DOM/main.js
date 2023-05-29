"use strict";
const hideBtn = document.querySelector(".hide-btn");
const showBtn = document.querySelector(".show-btn");
const p1 = document.querySelector(".p1");

hideBtn.addEventListener("click", () => {
  p1.classList.add("hide");
  p1.classList.remove("show");
});

showBtn.addEventListener("click", () => {
  p1.classList.add("show");
  p1.classList.remove("hide");
});

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".box-modal");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

function closeModal() {
  overlay.classList.add("hide");
  modal.classList.add("hide");
}

function openModal() {
  overlay.classList.remove("hide");
  modal.classList.remove("hide");
}

modalBtn.addEventListener("click", () => {
  console.log("modal clicked");
  openModal();
});
closeBtn.addEventListener("click", () => {
  closeModal();
});

overlay.addEventListener("click", () => {
  closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

const boxList = document.querySelectorAll(".box");

boxList.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add(`${box.getAttribute("data-tyle")}`);
  });

  box.addEventListener("mouseout", () => {
    box.classList.remove(`${box.getAttribute("data-tyle")}`);
  });
});

const hoverP = document.querySelector(".hover-p");
const boxTootlip = document.querySelector(".box-tootlip");

hoverP.addEventListener("mouseover", () => {
  boxTootlip.classList.remove("hide");
});
hoverP.addEventListener("mouseout", () => {
  boxTootlip.classList.add("hide");
});

const darkMode = document.querySelector(".dark-mode");
darkMode.addEventListener("click", () => {
  darkMode.classList.toggle("dark-mode");
});
