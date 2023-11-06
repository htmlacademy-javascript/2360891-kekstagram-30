import {openPopup} from '../upload/popup.js';
import { validateForm, resetValidateForm } from './validation.js';

const uploadForm = document.querySelector('.img-upload__form');

uploadForm.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename': openPopup();
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


