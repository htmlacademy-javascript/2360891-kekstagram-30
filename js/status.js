const renderStatus = (type, options = {}) => {
  const template = document.querySelector(`#${type}`);
  const statusElement = template.content.querySelector(`.${type}`).cloneNode(true);

  const onDocumentKeydown = (event) => {
    if (event.key.startsWith('Esc')) {
      event.stopPropagation();
      statusElement.click();
    }
  };

  const onStatusElementClick = (event) => {
    if (event.target.matches(`.${type}, .${type}__button`)){
      statusElement.remove();
    }
  };

  document.body.append(statusElement);

  if (options.autoHide) {
    setTimeout(() => statusElement.remove(), options.autoHide);
  } else {
    document.addEventListener('keydown', onDocumentKeydown, true);
    statusElement.addEventListener('click', onStatusElementClick);
  }
};

export {renderStatus};
