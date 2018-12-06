/* eslint-disable max-len */
/* global  document */
const loginFormInpunts = document.forms['main-form'].getElementsByTagName('input');

function validate(event) {
  if (!event.target.validity.valid || !event.target.value) {
    event.target.classList.add('invalid');
  } else {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  }
  checkItem();
}

function checkItem() {
  const sendBtn = document.getElementById('send-btn');
  const isValid = [...loginFormInpunts].every((el) => el.classList.contains('valid'));
  if (isValid) {
    sendBtn.classList.remove('disabled');
  }
}

const validForm = {
  valid: () => {
    document.forms['main-form'].addEventListener('keyup', validate);
  },
};


export default validForm;

