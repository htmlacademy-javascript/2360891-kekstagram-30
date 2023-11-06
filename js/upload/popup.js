import {isEscapeKey} from '../utilities.js';
import {validateForm} from '../upload/validation.js';

const popup = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeButton.click();
  }
};

const openPopup = () => {
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};


const closePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onkCloseButtonClick = () => {
  closePopup();
};

closeButton.addEventListener('click', onkCloseButtonClick);

const renderPopup = () => {
  openPopup();
};

uploadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

export {renderPopup};
