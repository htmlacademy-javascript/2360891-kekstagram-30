import {isEscapeKey} from '../utilities.js';
import {renderComments} from './comments.js';

const bigPictureModal = document.querySelector('.big-picture');
const bigPictureModalButtonClose = bigPictureModal.querySelector('.big-picture__cancel');
const avatarImage = bigPictureModal.querySelector('img');
const socialCaption = bigPictureModal.querySelector('.social__caption');
const commentsLikesCount = bigPictureModal.querySelector('.likes-count');
const commentsCount = bigPictureModal.querySelector('.social__comment-total-count');
const commentCount = bigPictureModal.querySelector('.social__comment-count');
const commentsContainer = bigPictureModal.querySelector('.social__comments');
const commentsLoaderButton = bigPictureModal.querySelector('.comments-loader');

const closePopup = () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

bigPictureModalButtonClose.addEventListener('click', () => {
  closePopup();
});

const openPopup = (properties) => {
  const {url, description, likes, comments} = properties;

  bigPictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  avatarImage.src = url;
  socialCaption.textContent = description;
  commentsLikesCount.textContent = likes;
  commentsCount.textContent = comments.length;

  //скрывыем то что не работает
  commentCount.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');

  renderComments(comments, commentsContainer);
};

const renderPopup = (properties) => {
  openPopup(properties);
};

export {renderPopup};
