const container = document.querySelector('.big-picture__social');
const comments = container.querySelector('.social__comments');
const template = comments.querySelector('.social__comment');
const count = container.querySelector('.social__comment-count');
const loaderButton = container.querySelector('.comments-loader');

const createComments = (dataComments) => dataComments.map((data) => {
  const {avatar, message, name} = data;
  const item = template.cloneNode(true);
  item.querySelector('.social__picture').src = avatar;
  item.querySelector('.social__picture').alt = name;
  item.querySelector('.social__text').textContent = message;

  return item;
});

const renderComments = (dataComments) => {
  comments.querySelectorAll('.social__comment').forEach((comment) => comment.remove());
  comments.append(...createComments(dataComments));
  container.querySelector('.social__comment-count').textContent = dataComments.length;
  //скрывыем то что не работает
  count.classList.add('hidden');
  loaderButton.classList.add('hidden');
};

export {renderComments};
