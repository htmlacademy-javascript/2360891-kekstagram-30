const filters = document.querySelector('.img-filters');
const buttons = document.querySelectorAll('.img-filters__button');

const configFilter = {type: 'filter-default'};

const renderFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const onFiltersClick = (event) => {
  if(event.target.type === 'button') {
    buttons.forEach((button) => {
      button.classList.remove('img-filters__button--active');
    });
    event.target.classList.add('img-filters__button--active');
    configFilter.type = event.target.id;
    filters.dispatchEvent(new CustomEvent('filter'));
  }
};

const getTypeFilter = () => configFilter.type;

filters.addEventListener('click', onFiltersClick);

export {renderFilters, getTypeFilter};
