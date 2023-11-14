import {renderThumbnails} from './thumbnails.js';
import {renderPopup} from './popup.js';
import {renderFilters} from './filters';
import {shuffleItems} from '../utilities.js';

const PICTURES_LIMIT = 10;

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
        return renderThumbnails(shuffleItems(createPictureData, PICTURES_LIMIT));
      case 'filter-discussed':
        return renderThumbnails(createPictureData
          .slice()
          .sort((a, b) => b.comments.length - a.comments.length));
    }
  }));
};

export {renderGallery};
