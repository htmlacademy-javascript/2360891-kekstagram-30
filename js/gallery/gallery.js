import {renderThumbnails} from './thumbnails.js';
import {renderPopup} from './popup.js';
import {renderFilters} from './filters';
import {getRandomPictures} from '../utilities.js';

const renderGallery = (createPictureData, reduceFrequency) => {
  renderFilters();
  renderThumbnails(createPictureData);
  document.addEventListener('thumbnailSelect', (event) => {
    renderPopup(event.detail);
  });
  document.addEventListener('filterSelect', reduceFrequency((event) => {
    switch (event.detail) {
      case 'filter-default':
        return renderThumbnails(createPictureData);
      case 'filter-random':
        return renderThumbnails(getRandomPictures(createPictureData, 10));
      case 'filter-discussed':
        return renderThumbnails(createPictureData
          .slice()
          .sort((a, b) => b.comments.length - a.comments.length));
    }
  }));
};

export {renderGallery};
