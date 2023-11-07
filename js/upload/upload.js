import {openPopup} from '../upload/popup.js';
import {validateForm, resetValidateForm } from './validation.js';
import {getScaleValue} from './scale.js';
import {renderEffect, changeEffectValue} from'./effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const sliderElement = uploadForm.querySelector('.effect-level__slider');
const image = uploadForm.querySelector('.img-upload__preview');

sliderElement.noUiSlider.on('update', () => {
  changeEffectValue();
});

renderEffect();

const scaleImage = () => {
  image.style.transform = `scale(${getScaleValue() / 100})`;
};

uploadForm.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename': openPopup();
      break;
    case 'effect': renderEffect(event.target.id);
      break;
    case 'scale': scaleImage();
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
});
