import {openPopup, closePopup} from '../upload/popup.js';
import {validateForm, resetValidateForm } from './validation.js';
import {getScaleValue, renderScaleControl} from './scale.js';
import {setEffect, getEffectValue, resetEffect} from'./effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const image = uploadForm.querySelector('.img-upload__preview');
const previewImage = uploadForm.querySelector('.img-upload__preview img');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const uploadFile = uploadForm.querySelector('.img-upload__input');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadImage = (fileTypes) => {
  const file = uploadFile.files[0];
  const matches = fileTypes.some((type) => file.name.toLowerCase().endsWith(type));
  if (matches){
    previewImage.src = URL.createObjectURL(file);
  }
};

uploadForm.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      uploadImage(FILE_TYPES);
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
