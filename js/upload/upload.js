import {openPopup, closePopup} from '../upload/popup.js';
import {validateForm, resetValidateForm } from './validation.js';
import {getScaleValue, resetScale} from './scale.js';
import {setEffect, getEffectValue, resetEffect} from'./effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const image = uploadForm.querySelector('.img-upload__preview');

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

uploadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()){
    new FormData(uploadForm);
  }
});

document.addEventListener('closeStatus', (event) => {
  if(event.detail === 'success') {
    closePopup();
    uploadForm.reset();
  }
});

const resetForm = () => {
  uploadForm.reset();
};

document.addEventListener('closePopup', () => {
  resetForm();
});

uploadForm.addEventListener('reset', () => {
  resetValidateForm();
  image.style.transform = `scale(${getScaleValue() / 100})`;
  resetScale();
  resetEffect();
});

export {closePopup, resetForm};
