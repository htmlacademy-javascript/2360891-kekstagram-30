import {openPopup} from '../upload/popup.js';
import {validateForm, resetValidateForm } from './validation.js';
import {getScaleValue, resetScale} from './scale.js';
import {renderEffect, getEffectLevel, getFilterType, resetEffect} from'./effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const image = uploadForm.querySelector('.img-upload__preview');

const scaleImage = () => {
  image.style.transform = `scale(${getScaleValue() / 100})`;
};

const changeFilterImage = () => {
  const value = getEffectLevel();
  const filter = getFilterType();
  switch (filter) {
    case 'invert': image.style.filter = `${filter}(${value}%)`;
      break;
    case 'blur' : image.style.filter = `${filter}(${value}px)`;
      break;
    default: image.style.filter = `${filter}(${value})`;
  }
};

const resetImageScale = () => {
  image.style.transform = 'none';
};

const resetImageFilter = () => {
  image.style.filter = 'none';
};

uploadForm.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename': openPopup();
      break;
    case 'effect':
      if(event.target.id === 'effect-none') {
        resetImageFilter();
      }
      renderEffect(event.target.id);
      break;
    case 'scale': scaleImage();
      break;
    case 'effect-level': changeFilterImage();
      break;
  }
});

uploadForm.addEventListener('submit', (event) => {
  if (!validateForm()){
    event.preventDefault();
  }
});

uploadForm.addEventListener('reset', () => {
  resetValidateForm();
  resetScale();
  resetImageScale();
  resetImageFilter();
  resetEffect();
});
