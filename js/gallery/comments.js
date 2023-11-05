const container = document.querySelector('.big-picture__social');
const comments = container.querySelector('.social__comments');
const template = comments.querySelector('.social__comment');
const loaderButton = container.querySelector('.comments-loader');
const showCount = container.querySelector('.social__comment-shown-count');
const count = container.querySelector('.social__comment-total-count');

const createComments = (dataComments) => dataComments.map((data) => {
  const {avatar, message, name} = data;
  const item = template.cloneNode(true);
  item.querySelector('.social__picture').src = avatar;
  item.querySelector('.social__picture').alt = name;
  item.querySelector('.social__text').textContent = message;

  return item;
});

const currentCommentsData = [];

const onLoaderButtonClick = () => {
  comments.append(...createComments(currentCommentsData.splice(0, currentCommentsData.step)));
  showCount.textContent = comments.childElementCount;
  loaderButton.classList.toggle('hidden', !currentCommentsData.length);
};

const renderComments = (commentsData, step = 5) => {
  currentCommentsData.splice(0, currentCommentsData.length, ...commentsData);
  currentCommentsData.step = step;
  comments.replaceChildren();
  count.textContent = commentsData.length;
  loaderButton.addEventListener('click', onLoaderButtonClick);
  loaderButton.click();
};

export {renderComments, onLoaderButtonClick};
