const renderStatus = (type, options = {}) => {
  const template = document.querySelector(`#${type}`);
  const status = template.content.querySelector(`.${type}`).cloneNode(true);

  const onDocumentKeydown = (event) => {
    if (event.key.startsWith('Esc')) {
      event.stopPropagation();
      status.click();
    }
  };

  const onStatusClick = (event) => {
    if (event.target.matches(`.${type}, .${type}__button`)){
      status.remove();
      document.removeEventListener('keydown', onDocumentKeydown, true);
    }
  };

  document.body.append(status);

  if (options.autoHide) {
    setTimeout(() => status.remove(), options.autoHide);
  } else {
    document.addEventListener('keydown', onDocumentKeydown, true);
    status.addEventListener('click', onStatusClick);
  }
};

export {renderStatus};
