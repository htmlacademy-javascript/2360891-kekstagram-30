import {renderThumbnails} from './thumbnails.js';
import {createPictureData} from '../data.js';
import {renderPopup} from './popup.js';

const renderGallery = () => {
  renderThumbnails(createPictureData());
  document.addEventListener('thumbnailSelect', (event) => {
    renderPopup(event.detail);
  });
};


export {renderGallery};
