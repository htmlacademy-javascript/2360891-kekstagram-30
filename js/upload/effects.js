import '../../vendor/nouislider/nouislider.js';
import '../../vendor/nouislider/nouislider.css';

const uploadForm = document.querySelector('.img-upload__form');
const containerSlider = uploadForm.querySelector('.img-upload__effect-level');
const sliderElement = uploadForm.querySelector('.effect-level__slider');
const image = uploadForm.querySelector('.img-upload__preview');
const valueEffect = uploadForm.querySelector('.effect-level__value');

let filter = 'none';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const changeEffectValue = () => {
  containerSlider.classList.remove('hidden');
  valueEffect.value = sliderElement.noUiSlider.get();
  switch (filter) {
    case 'invert': image.style.filter = `${filter}(${valueEffect.value}%)`;
      break;
    case 'blur' : image.style.filter = `${filter}(${valueEffect.value}px)`;
      break;
    default: image.style.filter = `${filter}(${valueEffect.value})`;
  }
};

const noEffect = () => {
  containerSlider.classList.add('hidden');
  image.style.filter = '';
};

const chromeEffect = () => {
  filter = 'grayscale';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });
};

const sepiaEffect = () => {
  filter = 'sepia';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });
};

const marvinEffect = () => {
  filter = 'invert';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};

const phobosEffects = () => {
  filter = 'blur';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
  });
};

const heatEffects = () => {
  filter = 'brightness';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
  });
};

const renderEffect = (effect = 'effect-none') => {
  switch (effect) {
    case 'effect-none': noEffect();
      break;
    case 'effect-chrome': chromeEffect();
      break;
    case 'effect-sepia': sepiaEffect();
      break;
    case 'effect-marvin':marvinEffect();
      break;
    case 'effect-phobos': phobosEffects();
      break;
    case 'effect-heat': heatEffects();
  }
};

export {renderEffect, changeEffectValue};
