"use strict";

const menuBtn = document.querySelector(".menu-box");
const menu = document.querySelector(".menu");
const mainContainer = document.querySelector(".main-container");
const closeMenuBtn = document.querySelector(".menu__close-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menuBtn.classList.add("hidden");
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
  menuBtn.classList.remove("hidden");
});
