import {openModalWindow, closeModalWindow} from './modal';
import {postData} from '../services/services';

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

 postData('http://localhost:3000/requests', json)
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
 
  openModalWindow(modal, timerID);
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
    closeModalWindow(modal);
  }, 4000);
  }

}

export default form;