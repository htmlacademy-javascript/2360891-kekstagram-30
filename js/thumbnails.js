
const containerThumbnails = document.querySelector('.pictures');
const template = document.querySelector('#picture');

const createThumbnails = (picturesData) => picturesData.map(({url, description, likes, comments}) => {
  const thumbnail = template.content.querySelector('.picture').cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  return thumbnail;
});

const renderThumbnails = (picturesData) => {
  // containerThumbnails.querySelectorAll('.picture').forEach((thumbnail) => thumbnail.remove());
  containerThumbnails.append(...createThumbnails(picturesData));
};

export {renderThumbnails};
