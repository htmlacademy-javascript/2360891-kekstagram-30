const uploadForm = document.querySelector('.img-upload__form');
const scaleControl = uploadForm.querySelector('.scale__control--value');
const downScaleButton = uploadForm.querySelector('.scale__control--smaller');
const upScaleButton = uploadForm.querySelector('.scale__control--bigger');

let scale = 100;
const SCALE_STEP = 25;

const renderScaleControl = () => {
  scaleControl.value = `${scale}%`;
  scaleControl.dispatchEvent(new Event('change', {bubbles: true}));
};

const onDownScaleButtonClick = () => {
  if(scale > 25){
    scale -= SCALE_STEP;
  }
  renderScaleControl();
};

const onUpScaleButtonClick = () => {
  if(scale < 100){
    scale += SCALE_STEP;
  }
  renderScaleControl();
};

const getScaleValue = () => scale;
const resetScale = () => {
  scaleControl.value.value = '100%';
};

downScaleButton.addEventListener('click', onDownScaleButtonClick);
upScaleButton.addEventListener('click', onUpScaleButtonClick);

export {getScaleValue, resetScale};
