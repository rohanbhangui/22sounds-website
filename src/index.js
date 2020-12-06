'use strict';

require('./assets/scss/index.scss');

// const rolly = require("rolly.js");

import Glide from '@glidejs/glide';
require('../node_modules/@glidejs/glide/dist/css/glide.core.min.css');
require('../node_modules/@glidejs/glide/dist/css/glide.theme.min.css');

document.addEventListener("DOMContentLoaded", () => {

  if(document.querySelector("body").classList.contains("index")) {
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
      document.querySelector("header.header").classList.add("show");
    }, LOADING_TIMER+2750);

    // const r = rolly({
    //   view: document.querySelector('.container-wrapper'),
    //   native: true,
    //   // other options
    // });
    // r.init();

    window.glide = new Glide('#container-3 .glide', {
      type: 'slider',
      perView: 3.5,
      gap: 20,
      rewind: false,
      breakpoints: {
        1440: {
          perView: 3.5,
        },
        1200: {
          perView: 3.5,
        },
        960: {
          perView: 2.5,
        },
        800: {
          perView: 1.5
        },
        600: {
          perView: 1.5
        },
        400: {
          perView: 1
        }
      }
    }).mount()
  } else if (document.querySelector("body").classList.contains("about")) {
    document.querySelector("header.header").classList.add("active");
  }
});