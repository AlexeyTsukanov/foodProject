import {getResource} from '../services/services';

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


 getResource('http://localhost:3000/menu')
 .then(data => {
   data.forEach(({title, descr, price, altimg, img}) => {
    new MenuCards(title, descr, price, img, altimg, '.menu .container', 'menu__item').render();
   });
 });

}

export default cards;