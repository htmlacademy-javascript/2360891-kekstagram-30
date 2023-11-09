const ALERT_SHOW_TIME = 5000;

const renderStatus = (id) => {
  const template = document.querySelector(`#${id}`);
  const statusElement = template.content.querySelector(`.${id}`).cloneNode(true);
  document.body.append(statusElement);

  const removeElement = () => {
    document.querySelector(`.${id}`).remove();
  };

  if (id === 'data-error') {
    setTimeout(() => {
      removeElement(id);
    }, ALERT_SHOW_TIME);
  }else {
    const button = document.querySelector(`.${id}__button`);
    statusElement.addEventListener('click', (event) => {
      if((event.target === statusElement) || (event.target === button)){
        document.dispatchEvent(new CustomEvent('closeStatus', {detail: id}));
        removeElement();
      }
    });
  }
};

export {renderStatus};
