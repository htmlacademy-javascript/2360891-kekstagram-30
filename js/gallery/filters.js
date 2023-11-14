const filters = document.querySelector('.img-filters');
const buttons = document.querySelectorAll('.img-filters__button');

const renderFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const onFiltersClick = (event) => {
  if(event.target.type === 'button') {
    buttons.forEach((button) => {
      button.classList.remove('img-filters__button--active');
    });
    event.target.classList.add('img-filters__button--active');
    document.dispatchEvent(new CustomEvent('filterSelect', {detail: event.target.id}));
  }
};

filters.addEventListener('click', onFiltersClick);

export {renderFilters};
