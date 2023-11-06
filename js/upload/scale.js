const uploadForm = document.querySelector('.img-upload__form');
const scaleControl = uploadForm.querySelector('.scale__control--value');
const sizeImage = uploadForm.querySelector('.img-upload__preview');

let scale = 100;
const SCALE_STEP = 25;


const renderScaleControl = () => {
  scaleControl.value = `${scale}%`;
  sizeImage.style.transform = `scale(${scale / 100})`;
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

export {renderScaleControl, onDownScaleButtonClick, onUpScaleButtonClick};
