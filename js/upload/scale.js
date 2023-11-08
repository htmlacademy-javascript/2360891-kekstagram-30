const uploadForm = document.querySelector('.img-upload__form');
const scaleControl = uploadForm.querySelector('.scale__control--value');
const downScaleButton = uploadForm.querySelector('.scale__control--smaller');
const upScaleButton = uploadForm.querySelector('.scale__control--bigger');

const config = {min: 25, max: 100, step: 25, defaultValue: 100};

const renderScaleControl = (value) => {
  scaleControl.value = `${value}%`;
  scaleControl.dispatchEvent(new Event('change', {bubbles: true}));
};
const getScaleValue = () => Number.parseFloat(scaleControl.value);

const onDownScaleButtonClick = () => {
  let value = getScaleValue();
  if(value > config.min){
    value -= config.step;
  }
  renderScaleControl(value);
};

const onUpScaleButtonClick = () => {
  let value = getScaleValue();
  if(value < config.max){
    value += config.step;
  }
  renderScaleControl(value);
};

const resetScale = () => {
  scaleControl.value = `${config.defaultValue}%`;
};

downScaleButton.addEventListener('click', onDownScaleButtonClick);
upScaleButton.addEventListener('click', onUpScaleButtonClick);

export {getScaleValue, resetScale};
