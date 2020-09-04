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

export default calc;