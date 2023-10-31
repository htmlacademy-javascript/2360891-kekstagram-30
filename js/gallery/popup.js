import {isEscapeKey} from '../utilities.js';
import {renderComments} from './comments.js';

const bigPictureModal = document.querySelector('.big-picture');
const bigPictureModalButtonClose = bigPictureModal.querySelector('.big-picture__cancel');
const avatarImage = bigPictureModal.querySelector('img');
const socialCaption = bigPictureModal.querySelector('.social__caption');
const likesCount = bigPictureModal.querySelector('.likes-count');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureModalButtonClose.click();
  }
};

const closePopup = () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onClickBigPictureModalButtonClose = () => {
  closePopup();
};

bigPictureModalButtonClose.addEventListener('click', onClickBigPictureModalButtonClose);

const openPopup = () => {
  bigPictureModal.classList.remove('hidden');
  bigPictureModal.scroll(0, 0);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const renderPopup = (properties) => {
  const {url, description, likes, comments} = properties;
  openPopup();
  avatarImage.src = url;
  socialCaption.textContent = description;
  likesCount.textContent = likes;
  renderComments(comments);
};

export {renderPopup};
