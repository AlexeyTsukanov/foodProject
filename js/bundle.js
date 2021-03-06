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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc(){

    /**
     * 
     * 
     * --------------calc------------
     */

    const result = document.querySelector('.calculating__result span');
    let sex = 'female', height, weight, age, ratio;
    console.log(localStorage.getItem('sex'));
    if(localStorage.getItem('sex')){
      sex = localStorage.getItem('sex');
    }else{
     sex = 'female';
     localStorage.setItem('sex', 'female');
    }
    if(localStorage.getItem('ratio')){
     ratio = localStorage.getItem('ratio');
    }else{
     ratio = 1.375;
     localStorage.setItem('ratio', 1.375);
    }

    function initLocalSeatings(selector, activeClass){
     const elements = document.querySelectorAll(`${selector} div`);
     elements.forEach(e => {
       e.classList.remove(activeClass);
       if(e.getAttribute('id') === localStorage.getItem('sex')){
         e.classList.add(activeClass);
       }
       if(e.getAttribute('data-ratio') === localStorage.getItem('ratio')){
         e.classList.add(activeClass);
       }
     });
    }

    initLocalSeatings('#gender', 'calculating__choose-item_active');
    initLocalSeatings('#ratio', 'calculating__choose-item_active');

    function culcTotal(){
      if(!sex || !height || !weight || !age || !ratio){
        result.textContent = '0';
        return;
      }
      if(sex === 'female'){
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
      }else{
       result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
      }
    }

    culcTotal();

    function getStaticInformation(parrentSelector, activeClass){
     const elements = document.querySelectorAll(`${parrentSelector} div`);

     elements.forEach(elem => {
       elem.addEventListener('click', () => {
         if(elem.getAttribute('data-ratio')){
           ratio = +elem.getAttribute('data-ratio');
           elem.classList.add(activeClass);
           localStorage.setItem('ratio', +elem.getAttribute('data-ratio'));
         }
         else{
           sex = elem.getAttribute('id');
           elem.classList.add(activeClass);
           localStorage.setItem('sex', elem.getAttribute('id'));
         }
 
         elements.forEach(element => {
           element.classList.remove(activeClass);
         });
 
         elem.classList.add(activeClass);
 
         culcTotal();
       });
     });
    }

    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('#ratio', 'calculating__choose-item_active');

    function getDinamicInfirmation(selector){
     const input = document.querySelector(selector);
     input.addEventListener('input', (e) => {
       if(input.value.match(/\D/g)){
         input.style.border = '2px solid red';
         return;
       }
       else{
         input.style.border = 'none';
       }
       switch(input.getAttribute('id')){
         case 'height' :
           height = input.value;
           break;
         case 'weight' :
           weight = input.value;
           break;
         case 'age' :
           age = input.value;
           break;
         }
         culcTotal();
       });
     }

     getDinamicInfirmation('#height');
     getDinamicInfirmation('#weight');
     getDinamicInfirmation('#age');

    
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards(){

  /**
   * 
   * --------------cards------------------
   */

  class MenuCards {
    constructor(menuName, description, price, imagSrc, imagDescr, parrentSelector, ...classes) {
      this.menuName = menuName;
      this.description = description;
      this.price = price;
      this.imagSrc = imagSrc;
      this.imagDescr = imagDescr;
      this.parrentSelector = document.querySelector(parrentSelector);
      this.classes = classes;
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
                        <img src="${this.imagSrc}" alt="${this.imagDescr}">
                        <h3 class="menu__item-subtitle">${this.menuName}</h3>
                        <div class="menu__item-descr">${this.description}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>`;
      this.parrentSelector.append(element);
    }

  }


 Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/menu')
 .then(data => {
   data.forEach(({title, descr, price, altimg, img}) => {
    new MenuCards(title, descr, price, img, altimg, '.menu .container', 'menu__item').render();
   });
 });

}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function form(timerID, formsSelector, modalSelector){

  /**
   * ------forms---------
   */

   const forms = document.querySelectorAll(formsSelector),
   prevModalDialog = document.querySelector('.modal__dialog');

const message = {
loading: 'img/form/spinner.svg',
seccess: 'We will call you soon!',
failur: 'Error!'
};

forms.forEach(i => bindPostData(i));

function bindPostData(form) {
form.addEventListener('submit', (e) => {
 e.preventDefault();

 const statusMassage = document.createElement('img');
 statusMassage.src = message.loading;
 statusMassage.style.cssText = `
   display: block;
   margin: 0 auto;
   backgroung: white;
 `;
 form.insertAdjacentElement('afterend', statusMassage);

 const formData = new FormData(form);

 const json = JSON.stringify(Object.fromEntries(formData.entries()));

 Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
 .then(data => {
   console.log(data);
   showThanksModal(message.seccess, modalSelector);
   statusMassage.remove();
 }).catch(request => {
   showThanksModal(message.failur, modalSelector);
 }).finally(() => {
   form.reset();
 });

});
}


function showThanksModal(message, modal) {
 
  Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModalWindow"])(modal, timerID);
  const modalItem = document.querySelector(modal);

  const thanksModal = document.createElement('div');
  thanksModal.classList.add('modal__dialog');
  thanksModal.innerHTML = `
  <div class="modal__content">
    <div data-close="" class="modal__close">×</div>
    <div class="modal__title">${message}</div>
  </div> 
  `;

  modalItem.innerHTML = '';

  modalItem.append(thanksModal);
  setTimeout(() => {
    thanksModal.remove();
    modalItem.append(prevModalDialog);
    Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModalWindow"])(modal);
  }, 4000);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, closeModalWindow, openModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModalWindow", function() { return closeModalWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModalWindow", function() { return openModalWindow; });
function closeModalWindow(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'none';
  document.body.style.overflow = "";
}

function openModalWindow(modalSelector, timerID) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'block';
  document.body.style.overflow = "hidden";
  if(timerID){
    clearTimeout(timerID);
  }
}

function modal(triggerSelector, modalSelector, timerID){
    /** --------------modal----------- */

  const modal = document.querySelector(modalSelector),
  modalOpen = document.querySelectorAll(triggerSelector);



function showModalByScroll() {
if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
openModalWindow(modalSelector, timerID);
window.removeEventListener('scroll', showModalByScroll);
}
}

modalOpen.forEach(btn => {
  btn.addEventListener('click', () => openModalWindow(modalSelector, timerID));
});


modal.addEventListener('click', e => {
if (e.target === modal || e.target.getAttribute('data-close') == '') {
closeModalWindow(modalSelector);
}
});
document.addEventListener('keydown', e => {
if (e.code === 'Escape') {
closeModalWindow(modalSelector);
}
}); 

window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./js/modules/timer.js");


function slider({wrapper, sliderSection, prevBtn, nextBtn, currentCounter, totalCounter, field, slide}){

   /**
    * 
    * ------slider--------
    */


   const slider = document.querySelector(sliderSection),
   sliderItems = slider.querySelectorAll(slide),
   slidePrevBtn = slider.querySelector(prevBtn),
   slideNextBtn = slider.querySelector(nextBtn),
   currentSlide = slider.querySelector(currentCounter),
   totalSlides = slider.querySelector(totalCounter),
   slidesWrapper = slider.querySelector(wrapper),
   slideField = slider.querySelector(field),
   sliderWidth = window.getComputedStyle(slidesWrapper).width;

let slideIndex = 1;
let offset = 0;

function changeWidthToNumber(width){
return +width.replace(/\D/g, '');
}

if(slideIndex <= 0 || slideIndex > sliderItems.length){
slideIndex = 1;
console.error(`Bad slide index value. Slide index changed to first slide`);
}

function setCurrentSlide(current){
offset = +sliderWidth.slice(0, sliderWidth.length - 2) * (current - 1);
slideField.style.transform = `translateX(-${offset}px)`;
currentSlide.innerHTML = Object(_timer__WEBPACK_IMPORTED_MODULE_0__["addZero"])(current);
}
setCurrentSlide(slideIndex);

totalSlides.innerHTML = Object(_timer__WEBPACK_IMPORTED_MODULE_0__["addZero"])(sliderItems.length);
console.log(Object(_timer__WEBPACK_IMPORTED_MODULE_0__["addZero"])(4));

slideField.style.width = 100 * sliderItems.length + '%';

sliderItems.forEach(i => {
i.style.width = sliderWidth;
});

slideField.style.display = 'flex';
slideField.style.transition = '.5s all linear';
slidesWrapper.style.overflow = 'hidden';

slideNextBtn.addEventListener('click', () => {
if(offset == changeWidthToNumber(sliderWidth) * (sliderItems.length - 1)){
 slideIndex = 1;
 offset = 0;
}else{
 offset += changeWidthToNumber(sliderWidth);
 slideIndex++;
}
slideField.style.transform = `translateX(-${offset}px)`;
currentSlide.innerHTML = Object(_timer__WEBPACK_IMPORTED_MODULE_0__["addZero"])(slideIndex);
showCurrentDot(slideIndex);
});

slidePrevBtn.addEventListener('click', () => {
if(offset == 0){
 offset = changeWidthToNumber(sliderWidth) * (sliderItems.length - 1);
 slideIndex = sliderItems.length;
}else{
 offset -= changeWidthToNumber(sliderWidth);
 slideIndex--;
}
slideField.style.transform = `translateX(-${offset}px)`;
currentSlide.innerHTML = Object(_timer__WEBPACK_IMPORTED_MODULE_0__["addZero"])(slideIndex);
showCurrentDot(slideIndex);
});

const dotsWrapper = document.createElement('ul');
let  dots = [];

dotsWrapper.classList.add('carousel-indicators');

for (let i = 0; i < sliderItems.length; i++){
const dot = document.createElement('li');
dot.classList.add('dot');
dot.setAttribute('data-slide-to', i);
dotsWrapper.append(dot);
if(i === slideIndex - 1){
 dot.classList.add('current');
}
dots.push(dot);
}

function showCurrentDot(current){
dots.forEach(i => i.classList.remove('current'));
dots[current - 1].classList.add('current');
}

slider.append(dotsWrapper);

dots.forEach(dot => {
dot.addEventListener('click', e => {
 const slideTo = e.target.getAttribute('data-slide-to');
 offset = changeWidthToNumber(sliderWidth) * slideTo;
 slideField.style.transform = `translateX(-${offset}px)`;
 slideIndex = +slideTo + 1;
 currentSlide.innerHTML = Object(_timer__WEBPACK_IMPORTED_MODULE_0__["addZero"])(slideIndex);
 showCurrentDot(slideIndex);
});
});


}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

function tabs(tabsSelector, tabsPerrent, tabItems, TabActiveClass){
/**
   * 
   * ----------- Tabs ------------------------
   */
  const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsPerrent),
        tabsParent = document.querySelector(tabItems);

  function hideTubContent() {
    tabsContent.forEach(item => {
      item.classList.remove('show');
      item.classList.add('hide');
    });
    tabs.forEach(tab => {
      tab.classList.remove(TabActiveClass);
    });
  }

  function showTubContent(i = 0) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(TabActiveClass);
  }

  hideTubContent();
  showTubContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTubContent();
          showTubContent(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);




/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default, addZero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addZero", function() { return addZero; });
function addZero(num) {
  if (num < 10 && num >= 0) {
    return `0${num}`;
  } else {
    return num;
  }
}

function timer(deadline, perrentSelector){
    
  /** --------timer ---------- */

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / 1000 / 60 % 60),
          seconds = Math.floor(t / 1000 % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(upDateClock, 1000);
    upDateClock();

    function upDateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(perrentSelector, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);


/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");










window.addEventListener('DOMContentLoaded', () => {
    const timerID = setTimeout( () => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_4__["openModalWindow"])('.modal', timerID) , 50000);

    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    Object(_modules_calc__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])(timerID, 'form', '.modal');
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-modal]', '.modal', timerID);
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
            wrapper: '.offer__slider-wrapper', 
            sliderSection: '.offer__slider',
            prevBtn: '.offer__slider-prev', 
            nextBtn: '.offer__slider-next', 
            currentCounter: '#current', 
            totalCounter: '#total', 
            field: '.offer__slider-inner',
            slide: '.offer__slide'
        });
    Object(_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('2020-09-07', '.timer');
});


/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });



 const postData = async (url, data) => {
     console.log('post');
    const res = await fetch(url, {
     method: 'POST',
     body: data,
     headers: {
       'Content-type' : 'application/json'
     }
    });
    return await res.json();
    };

    const getResource = async (url) => {
        const res = await fetch(url);
    
        if(!res.ok){
          throw new Error(`Couldn't fetch url ${url}, status: ${res.status}`);
        }
    
       return await res.json();
     };

    

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map