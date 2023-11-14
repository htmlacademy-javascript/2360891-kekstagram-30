import {getTypeFilter, renderFilters} from './filters';
import {getRandomPictures} from '../utilities';

const container = document.querySelector('.pictures');
const template = document.querySelector('#picture');

const createThumbnailClickHandler = (properties) => (event) => {
  event.preventDefault();
  document.dispatchEvent(new CustomEvent('thumbnailSelect', {detail: properties}));
};

const createThumbnails = (picturesData) => picturesData.map((properties) => {
  const {url, description, likes, comments} = properties;
  const thumbnail = template.content.querySelector('.picture').cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.addEventListener('click', createThumbnailClickHandler(properties));

  return thumbnail;
});

const filter = (pictures, typeFilter) => {
  switch (typeFilter) {
    case 'filter-default':
      return pictures;
    case 'filter-random':
      return getRandomPictures(pictures, 10);
    case 'filter-discussed':
      return pictures.slice().sort((a, b) => b.likes - a.likes);
  }
};

const renderThumbnails = (picturesData) => {
  container.querySelectorAll('.picture').forEach((thumbnail) => thumbnail.remove());
  container.append(...createThumbnails(filter(picturesData, getTypeFilter())));
  renderFilters();
};

export {renderThumbnails, filter};
