/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accardion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accardion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function () {
  let headActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion-head--active';
  let contentActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'accordion-content--active';
  let paddings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;

  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion(); // my attempt accordion with display none and with change path icons;
// $.prototype.accordion = function() {
//   let checkIcon = false;
//   for (let i = 0; i < this.length; i++) {
//     this[i].addEventListener('click', () => {
//       const arr = $(".accordion-content").eq(i);
//       console.log(arr);
//       arr.fadeToggle(300);
//       const src = checkIcon ? "/assets/icons/plus.png" : "/assets/icons/minus.png";
//       this[i].setAttribute('src', src);
//       checkIcon = !checkIcon;
//     });
//   }
// };
//
// $(".accordion-head").accordion();

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function (created, autoPlay) {
  //corect bag when width of screen is change
  let savedWidth = document.documentElement.scrollWidth;
  window.addEventListener('resize', function () {
    if (document.documentElement.scrollWidth !== savedWidth) {
      savedWidth = document.documentElement.scrollWidth;
      window.location.reload();
    }
  });

  if (created) {
    for (let i = 0; i < this.length; i++) {
      const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
      const slides = this[i].querySelectorAll('.carousel-item');
      const slidesField = this[i].querySelector('.carousel-slides');
      const dots = this[i].querySelectorAll('.carousel-indicators li');
      const desc = this[i].querySelectorAll('.carousel-text');
      slidesField.style.width = 100 * slides.length + '%';
      slides.forEach(slide => {
        slide.style.width = width;
      });
      let offset = 0;
      let slideIndex = 0;
      let slideInt = 0;

      function setDesc() {
        for (var z = 0; z < desc.length; z++) {
          desc[z].style.display = 'none';
          desc[slideIndex].style.display = 'block';
        }
      }

      setDesc();

      function setInt(content, delay) {
        slideInt = setInterval(content, delay);
      }

      function clearInt(content) {
        clearInterval(content);
      }

      if (autoPlay) {
        const clickNextSlide = () => Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).click();

        setInt(clickNextSlide, autoPlay);
        this[i].addEventListener('mouseover', () => {
          clearInt(slideInt);
        });
        this[i].addEventListener('mouseleave', () => {
          setInt(clickNextSlide, autoPlay);
        }); //  });
      }

      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).click(e => {
        e.preventDefault();

        if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
          offset = 0;
        } else {
          offset += +width.replace(/\D/g, '');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length - 1) {
          slideIndex = 0;
        } else {
          slideIndex++;
        }

        if (dots.length !== 0) {
          dots.forEach(dot => dot.classList.remove('active'));
          dots[slideIndex].classList.add('active');
        }

        setDesc();
      });
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="prev"]')).click(e => {
        e.preventDefault();

        if (offset == 0) {
          offset = +width.replace(/\D/g, '') * (slides.length - 1);
        } else {
          offset -= +width.replace(/\D/g, '');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 0) {
          slideIndex = slides.length - 1;
        } else {
          slideIndex--;
        }

        if (dots.length !== 0) {
          dots.forEach(dot => dot.classList.remove('active'));
          dots[slideIndex].classList.add('active');
        }

        setDesc();
      });
      const sliderId = this[i].getAttribute('id');
      const pathLi = `#${sliderId} .carousel-indicators li`;
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${sliderId} .carousel-indicators li`).click(e => {
        const slideTo = e.target.getAttribute('data-slide-to');
        slideIndex = slideTo;
        offset = +width.replace(/\D/g, '') * slideTo;
        slidesField.style.transform = `translateX(-${offset}px)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
        setDesc();
      });
    }
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createCarousel = function (_ref) {
  let {
    slides = {},
    dots = true,
    autoPlay = false,
    desc = {},
    length = 0
  } = _ref;

  for (let i = 0; i < this.length; i++) {
    let carousel = document.createElement('div');
    const date = Date.now();
    let id = "carusel" + date + 1;
    carousel.classList.add('carousel');
    carousel.setAttribute('id', id);
    carousel.setAttribute('data-toggle', 'carousel');
    const liItems = [];
    const slidesBlock = [];
    const textBlock = [];

    for (let j = 0; j < length; j++) {
      if (dots) {
        const li = document.createElement('li');

        if (j == 0) {
          li.classList.add('active');
        }

        li.setAttribute('data-slide-to', j);
        liItems.push(li);
      }

      const imgBlock = document.createElement('div');
      imgBlock.classList.add("carousel-item");
      const img = document.createElement('img');
      img.setAttribute('src', slides[j]);
      imgBlock.append(img);
      slidesBlock.push(imgBlock);
      const descBlock = document.createElement('div');
      descBlock.classList.add("carousel-text");
      descBlock.textContent = desc[j];
      textBlock.push(descBlock);
    }

    carousel.innerHTML = //<div class="carousel" id=${carouselId}>
    `   <ol class="carousel-indicators">

          </ol>
          <div class="carousel-inner">
              <div class="carousel-slides">

              </div>
          </div>
          <div class="carousel-desc">

          </div>
          <a href="#" class="carousel-prev" data-slide="prev">
              <span class="carousel-prev-icon">&lt;</span>
          </a>
          <a href="#" class="carousel-next" data-slide="next">
              <span class="carousel-next-icon">&gt;</span>
          </a>`;
    carousel.querySelector(".carousel-indicators").append(...liItems);
    carousel.querySelector(".carousel-slides").append(...slidesBlock);
    carousel.querySelector(".carousel-desc").append(...textBlock);

    if (!this[i].querySelector('.carousel')) {
      for (var k = 0; k < this.length; k++) {
        this[k].appendChild(carousel);
      }
    }

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${id}`).carousel(true, autoPlay);
  }
}; // my option of carousel
// import $ from '../core';
//
// $.prototype.carousel = function() {
//   for (var i = 0; i < this.length; i++) {
//     let arrowLeft = this[i].querySelector(".carousel-left"),
//       arrowRight = this[i].querySelector(".carousel-right"),
//       dotsBlock = this[i].querySelector(".carousel-dots"),
//       dots = dotsBlock.querySelectorAll(".carousel-dot"),
//       slidesBlock = this[i].querySelector(".carousel-inner"),
//       slides = slidesBlock.querySelectorAll("img");
//
//       this.slideIndex = 0;
//
//
//
//     const triggercarousel = () => {
//       for (var i = 0; i < slides.length; i++) {
//         $(slides[this.slideIndex]).siblings().fadeOut(1);
//         $(slides[this.slideIndex]).fadeIn(500);
//         slides[i].classList.remove("active");
//         slides[this.slideIndex].classList.add("active");
//         dots[i].classList.remove("active");
//         dots[this.slideIndex].classList.add("active");
//       }
//     };
//
//     const triggercarouselLeft = () => {
//       this.slideIndex--;
//       if (this.slideIndex < 0) {
//         this.slideIndex = slides.length - 1;
//       }
//
//       triggercarousel();
//     }
//
//     const triggercarouselRight = () => {
//       this.slideIndex++;
//       if (this.slideIndex > slides.length - 1) {
//         this.slideIndex = 0;
//       }
//       triggercarousel();
//     }
//
//     const triggercarouselDots = (e) => {
//       const target = e.target;
//       dots.forEach((item, i) => {
//         if (target === item) {
//           this.slideIndex = i;
//         }
//       });
//       triggercarousel();
//     }
//
//     $(arrowLeft).click(triggercarouselLeft);
//     $(arrowRight).click(triggercarouselRight);
//     dots.forEach((item) => {
//       $(item).click(triggercarouselDots);
//     });
//   }
// };
//
//
// $("#fir").carousel();
// $("#sec").carousel();

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


function calcScroll() {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  const scroll = calcScroll();

  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      for (var i = 0; i < Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal').length; i++) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal')[i].style.left = `0px`;
      }

      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
    });
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(e => {
        e.preventDefault();

        for (var i = 0; i < Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal').length; i++) {
          Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal')[i].style.left = `${scroll / 2}px`;
        }

        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;

        if (created) {
          document.querySelector(target).remove();
        }
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains('modal')) {
        for (var i = 0; i < Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal').length; i++) {
          Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal')[i].style.left = `${scroll / 2}px`;
        }

        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;

        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  let {
    text,
    btns
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const scroll = calcScroll();

  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); // btns = {count: num, settings: [[text, classNames=[], close, cb]]}

    const buttons = [];

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement('button');
      btn.classList.add('btn', ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];

      if (btns.settings[j][2]) {
        btn.setAttribute('data-close', 'true');
      }

      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${text.title}
                    </div>
                </div>
                <div class="modal-body">
                    ${text.body}
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
        `;
    modal.querySelector(".modal-footer").append(...buttons);
    document.body.appendChild(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target')).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/parser.js":
/*!*****************************************!*\
  !*** ./src/js/lib/components/parser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$.prototype.parser = function (selector) {
  window.addEventListener('DOMContentLoaded', () => {
    if (selector) {
      for (var i = 0; i < this.length; i++) {
        let textNodes = [];

        function recursy(element) {
          element.childNodes.forEach(node => {
            if (node.nodeName.match(selector)) {
              const obj = {
                header: node.nodeName,
                content: node.textContent
              };
              textNodes.push(obj);
            } else {
              recursy(node);
            }
          });
        }

        recursy(this[i]);
        fetch('https://jsonplaceholder.typicode.com/posts/', {
          method: "POST",
          headers: {
            'Content-Type': 'aplication/json'
          },
          body: JSON.stringify(textNodes)
        }).then(response => response.json()).then(json => console.log(json));
      }
    }
  });
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item--active').siblings().removeClass('tab-item--active').closest('.tab').find('.tab-content').removeClass('tab-content--active').eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass('tab-content--active');
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accardion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/accardion */ "./src/js/lib/components/accardion.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/requests */ "./src/js/lib/services/requests.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/animation */ "./src/js/lib/modules/animation.js");
/* harmony import */ var _components_parser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/parser */ "./src/js/lib/components/parser.js");
/* harmony import */ var _components_parser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_parser__WEBPACK_IMPORTED_MODULE_13__);














/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = item => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);

    if (arr.length == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);
    counter++;
  }

  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/animation.js":
/*!*****************************************!*\
  !*** ./src/js/lib/modules/animation.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animation = function () {
  let style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  let repeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  // Получаем нужный элемент
  const visible = target => {
    // Все позиции элемента
    const targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
          // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) {
      // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).addClass('animate__animated', style);
    } else {
      // Если элемент не видно, то запускаем этот код
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).removeClass(style);
    }
  };

  for (let i = 0; i < this.length; i++) {
    // Запускаем функцию при прокрутке страницы
    window.addEventListener('scroll', () => {
      if (repeat || !this[i].classList.contains('animate__animated')) {
        visible(this[i]);
      }
    }); // А также запустим функцию сразу. А то вдруг, элемент изначально видно

    visible(this[i]);
  }
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(classNames);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / dur, 1);
    cb(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this[i].style.display = display || 'block';

      const _fadeIn = complection => {
        this[i].style.opacity = complection;
      };

      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = complection => {
        this[i].style.opacity = 1 - complection;

        if (complection === 1) {
          this[i].style.display = 'none';
        }
      };

      const ani = this.animateOverTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/services/requests.js":
/*!*****************************************!*\
  !*** ./src/js/lib/services/requests.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url) {
  let dataTypeAnswer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();

    case 'blob':
      return await res.blob();
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, data) {
  let dataTypeAnswer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
  let res = await fetch(url, {
    method: "POST",
    body: data
  });

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();

    case 'blob':
      return await res.blob();
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
 //
// $('#first').on('click', () => {
//   $('div').eq(1).fadeToggle(800);
// });
//
// $('[data-count="second"]').on('click', () => {
//   $('div').eq(2).fadeToggle(800);
// });
//
// $('button').eq(2).on('click', () => {
//   $('.w-500').fadeToggle(800);
// });
//
// $('[data-toggle="modal"]').modal(); //modal write in HTML

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('body').parser(/^H\d/);
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.card-title').animation('animate__bounce', false);
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.card-img').animation('animate__bounce'); // $('#trigger').click(() => $('#trigger').createModal({ //modal write in JS
//   text: {
//     title: 'Modal title',
//     body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
//   },
//   btns: {
//     count: 3,
//     settings: [
//       [
//         'Close',
//         ['btn-danger', 'mr-10'],
//         true
//       ],
//       [
//         'Save changes',
//         ['btn-success'],
//         false,
//         () => {
//           alert('Данные сохранены');
//         }
//       ],
//       [
//         'Another btn',
//         ['btn-warning', 'ml-10'],
//         false,
//         () => {
//           alert('Hello World');
//         }
//       ]
//     ]
//   }
// }));
//

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-target="example"]').carousel(true, 8000); //carousel write in HTML
//

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-on="carousel"]').createCarousel({
  //carousel write in JS
  slides: {
    0: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg",
    1: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg"
  },
  length: 2
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-on="carousel1"]').createCarousel({
  //carousel write in JS
  slides: {
    0: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg",
    1: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg",
    2: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg"
  },
  desc: {
    0: '1111111',
    1: '2222222',
    2: '3333333'
  },
  length: 3
}); // $('[data-on="carousel3"]').createCarousel({
//   slides: {
//     0: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg",
//     1: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg",
//     2: "https://pixlr.com/images/best-photo-editor-cover.jpg",
//     3: "https://pixlr.com/images/best-photo-editor-cover.jpg"
//   },
//   length: 4
// });

/***/ })

/******/ });
//# sourceMappingURL=script.js.map