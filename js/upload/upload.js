import {openPopup, closePopup} from '../upload/popup.js';
import {validateForm, resetValidateForm } from './validation.js';
import {getScaleValue, renderScaleControl} from './scale.js';
import {setEffect, getEffectValue, resetEffect} from'./effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const image = uploadForm.querySelector('.img-upload__preview');
const submitButton = uploadForm.querySelector('.img-upload__submit');

uploadForm.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      openPopup();
      break;
    case 'effect':
      setEffect(event.target.value);
      break;
    case 'scale':
      image.style.transform = `scale(${getScaleValue() / 100})`;
      break;
    case 'effect-level':
      image.style.filter = getEffectValue();
      break;
  }
});

const setSubmitDisabled = (flag) => {
  submitButton.disabled = flag;
  submitButton.textContent = flag ? 'Публикую...' : 'Опубликовать';
};

uploadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()){
    new FormData(uploadForm);
  }
});

const resetForm = () => {
  uploadForm.reset();
  closePopup();
};

uploadForm.addEventListener('reset', () => {
  resetValidateForm();
  renderScaleControl();
  resetEffect();
});

export {closePopup, resetForm, setSubmitDisabled};
