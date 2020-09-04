import {addZero} from './timer';

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
currentSlide.innerHTML = addZero(current);
}
setCurrentSlide(slideIndex);

totalSlides.innerHTML = addZero(sliderItems.length);
console.log(addZero(4));

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
currentSlide.innerHTML = addZero(slideIndex);
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
currentSlide.innerHTML = addZero(slideIndex);
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
 currentSlide.innerHTML = addZero(slideIndex);
 showCurrentDot(slideIndex);
});
});


}

export default slider;