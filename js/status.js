const ALERT_SHOW_TIME = 5000;

const renderStatus = (id) => {
  const template = document.querySelector(`#${id}`);
  const statusElement = template.content.querySelector(`.${id}`).cloneNode(true);
  document.body.append(statusElement);

  if (id === 'data-error') {
    setTimeout(() => {
      statusElement.remove();
    }, ALERT_SHOW_TIME);
  }else {
    const button = document.querySelector(`.${id}__button`);

    const onDocumentKeydown = (event) => {
      if (event.key.startsWith('Esc')) {
        event.stopPropagation();
        button.click();
      }
    };

    const closeStatusPopup = () => {
      if(id === 'success'){
        document.dispatchEvent(new CustomEvent('closeStatusPopup'));
      }
      document.removeEventListener('keydown', onDocumentKeydown, true);
      statusElement.remove();
    };

    statusElement.addEventListener('click', (event) => {
      if((event.target === statusElement) || (event.target === button)){
        closeStatusPopup();
      }
    });

    document.addEventListener('keydown', onDocumentKeydown, true);
  }
};

export {renderStatus};
