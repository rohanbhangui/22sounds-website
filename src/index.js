require('./assets/scss/index.scss');

const rolly = require("rolly.js");

document.addEventListener("DOMContentLoaded", () => {

  const LOADING_TIMER = 500;
  setTimeout(() => {
    document.querySelector(".numbers-1").classList.add("active");
  }, 500);
  setTimeout(() => {
    document.querySelector(".numbers-2").classList.add("active");
  }, LOADING_TIMER+1000);
  setTimeout(() => {
    document.querySelector(".sounds-text").classList.add("active");
  }, LOADING_TIMER+1750);
  setTimeout(() => {
    document.querySelector(".social").classList.add("active");
  }, LOADING_TIMER+2750);

  // const r = rolly({
  //   view: document.querySelector('.container-wrapper'),
  //   native: true,
  //   // other options
  // });
  // r.init();
});