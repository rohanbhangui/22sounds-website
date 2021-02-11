'use strict';

import './assets/scss/index.scss';

import Glide from '@glidejs/glide';
import '../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
import '../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';

document.addEventListener("DOMContentLoaded", () => {

  // for mobile menu open
  document.querySelector("header.header .mobile-open-button i").addEventListener('click', event => {
    document.querySelector("header.header .links").classList.add("mobile-open");
  });
  
  // for mobile menu close
  document.querySelector("header.header .links .mobile-close-button i").addEventListener('click', event => {
    document.querySelector("header.header .links").classList.remove("mobile-open");
  });
  

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
    
    if(window.scrollY >= window.innerHeight/2) {
      document.querySelector("header.header").classList.add("show");
      // document.querySelector("#container-1 video").classList.add("show");
    }
    else {
      setTimeout(() => {
        document.querySelector("header.header").classList.add("show");
        // document.querySelector("#container-1 video").classList.add("show");
      }, LOADING_TIMER+2750);
    }

    window.addEventListener('scroll', (e) => {
      if(window.scrollY >= window.innerHeight/2) {
        document.querySelector("header.header").classList.add("show");
      }
    });

    new Glide('#container-3 .glide', {
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
          perView: 1.2
        }
      }
    }).mount()
  } else if (document.querySelector("body").classList.contains("about")) {
    document.querySelector("header.header").classList.add("active");
  } else if (document.querySelector("body").classList.contains("video")) {
    const sliders = document.querySelectorAll('.slider-container .glide');
    const config =  {
      type: 'slider',
      perView: 2.5,
      gap: 20,
      rewind: false,
      breakpoints: {
        1440: {
          perView: 2.5,
        },
        1200: {
          perView: 2.5,
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
          perView: 1.2
        }
      }
    }

    sliders.forEach(item => {
      new Glide(item, config).mount()
    });
  }
});