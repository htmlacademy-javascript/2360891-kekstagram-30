import {openPopup} from '../upload/popup.js';
import {validateForm, resetValidateForm } from './validation.js';
import {renderScaleControl, onDownScaleButtonClick, onUpScaleButtonClick} from './scale.js';
import {renderEffect, changeEffectValue} from'./effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const downScaleButton = uploadForm.querySelector('.scale__control--smaller');
const upScaleButton = uploadForm.querySelector('.scale__control--bigger');
const sliderElement = uploadForm.querySelector('.effect-level__slider');

sliderElement.noUiSlider.on('update', () => {
  changeEffectValue();
});

renderScaleControl();
renderEffect();
downScaleButton.addEventListener('click', onDownScaleButtonClick);
upScaleButton.addEventListener('click', onUpScaleButtonClick);


uploadForm.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename': openPopup();
      break;
    case 'effect': renderEffect(event.target.id);
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
