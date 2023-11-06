import {renderPopup} from '../upload/popup.js';

const uploadButton = document.querySelector('.img-upload__input');

const onUploadButtonClick = () => {
  renderPopup();
};

const renderUpload = () => {
  uploadButton.addEventListener('change', onUploadButtonClick);
};


export {renderUpload};
