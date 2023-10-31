const container = document.querySelector('.big-picture__social');
const commentsContainer = container.querySelector('.social__comments');
const templateComment = commentsContainer.querySelector('.social__comment');
const commentCount = container.querySelector('.social__comment-count');
const commentsLoaderButton = container.querySelector('.comments-loader');

const createComments = (dataComments) => dataComments.map((data) => {
  const {avatar, message, name} = data;
  const item = templateComment.cloneNode(true);
  item.querySelector('.social__picture').src = avatar;
  item.querySelector('.social__picture').alt = name;
  item.querySelector('.social__text').textContent = message;

  return item;
});

const renderComments = (dataComments) => {
  commentsContainer.querySelectorAll('.social__comment').forEach((comment) => comment.remove());
  commentsContainer.append(...createComments(dataComments));
  container.querySelector('.social__comment-count').textContent = dataComments.length;
  //скрывыем то что не работает
  commentCount.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');
};

export {renderComments};
