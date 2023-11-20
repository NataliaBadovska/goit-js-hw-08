import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const LOCAL_KEY = 'feedback-form-state';

populateInput();
const inputData = {};

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
}

function onFormInput(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    
    inputData[name] = value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(inputData));
}

function populateInput() {
    const savedValue = localStorage.getItem(LOCAL_KEY);
    const vrem = JSON.parse(savedValue);

    if (savedValue) {
        input.value = vrem.email;
        textArea.value = vrem.message;
    }
}
