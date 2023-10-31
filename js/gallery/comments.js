const createComments = (dataComments) => dataComments.map((data) => {
  const {avatar, message, name} = data;
  const item = document.createElement('li');
  item.classList.add('social__comment');

  const avatarImg = document.createElement('img');
  avatarImg.classList.add('social__picture');
  avatarImg.src = avatar;
  avatarImg.alt = name;
  avatarImg.width = '35';
  avatarImg.height = '35';

  const textComment = document.createElement('p');
  textComment.classList.add('social__text');
  textComment.textContent = message;

  item.append(avatarImg);
  item.append(textComment);

  return item;
});

const renderComments = (dataComments, container) => {
  container.querySelectorAll('.social__comment').forEach((comment) => comment.remove());
  container.append(...createComments(dataComments));
};

export {renderComments};
