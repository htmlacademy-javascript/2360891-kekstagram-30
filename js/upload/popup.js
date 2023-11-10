const popup = document.querySelector('.img-upload__overlay');
const closeButton = popup.querySelector('.img-upload__cancel');


const onDocumentKeydown = (event) => {
  if (event.key.startsWith('Esc') && (!event.target.type?.startsWith('text'))) {
    event.preventDefault();
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

const onCloseButtonClick = () => {
  closePopup();
};

closeButton.addEventListener('click', onCloseButtonClick);

export {openPopup, closePopup};
