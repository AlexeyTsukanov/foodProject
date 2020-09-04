import tabs from './modules/tabs';
import calc from './modules/calc';
import cards from './modules/cards';
import form from './modules/form';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import {openModalWindow} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
    const timerID = setTimeout( () => openModalWindow('.modal', timerID) , 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
    cards();
    form(timerID, 'form', '.modal');
    modal('[data-modal]', '.modal', timerID);
    slider({
            wrapper: '.offer__slider-wrapper', 
            sliderSection: '.offer__slider',
            prevBtn: '.offer__slider-prev', 
            nextBtn: '.offer__slider-next', 
            currentCounter: '#current', 
            totalCounter: '#total', 
            field: '.offer__slider-inner',
            slide: '.offer__slide'
        });
    timer('2020-09-07', '.timer');
});
