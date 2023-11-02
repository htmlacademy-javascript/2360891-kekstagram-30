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
const SLICE_STEP = 5;

const onLoaderButtonClick = (slice) => () => {
  slice += SLICE_STEP;
  comments.replaceChildren(...createComments(currentCommentsData).slice(0, slice));
  showCount.textContent = (currentCommentsData).slice(0, slice).length;
  if(slice >= currentCommentsData.length) {
    loaderButton.classList.add('hidden');
  } else {
    loaderButton.classList.remove('hidden');
  }
};

const renderComments = (commentsData) => {
  const slice = SLICE_STEP;
  currentCommentsData.splice(0, currentCommentsData.length, ...commentsData);
  comments.replaceChildren(...createComments(currentCommentsData).slice(0, slice));
  count.textContent = commentsData.length;
  if(commentsData.length <= SLICE_STEP){
    showCount.textContent = commentsData.length;
    loaderButton.classList.add('hidden');
  } else {
    loaderButton.classList.remove('hidden');
    showCount.textContent = slice;
  }
  loaderButton.addEventListener('click', onLoaderButtonClick(slice));
};

export {renderComments};
