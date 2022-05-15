// import throttle from "lodash.throttle";

// const form = document.querySelector('.feedback-form');


// const STORAGE_KEY = "feedback-form-state";



// form.addEventListener('input', throttle(onFormData, 500));
// form.addEventListener('submit', onFormSubmit);

// dataLocalStorage();

// const formData = {};

// function onFormData(evt) { 
//     formData[evt.target.name] = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// };


// function onFormSubmit(evt) { 
//     console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
//     evt.preventDefault();
//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);

// };


// function dataLocalStorage() {
    
//   const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   const email = document.querySelector('.feedback-form input')
//   const message = document.querySelector('.feedback-form textarea')

//   if (data) {
//       email.value = data.email;
//       message.value = data.message;
       
//     }
  
  

// }



///////////////////////////////

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state'
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  const formElements = e.currentTarget.elements;
  const mail = formElements.email.value;
  const textarea = formElements.message.value;

  if (mail === '' || textarea === '' ) { 
  alert('пустые поля')
  }

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.preventDefault();
  
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const formInput = document.querySelector('.feedback-form input');
  const formTextarea = document.querySelector('.feedback-form textarea');

  if (data) {
    formInput.value = data.email;
    formTextarea.value = data.message;
  }
  
})();

///////////////////////
