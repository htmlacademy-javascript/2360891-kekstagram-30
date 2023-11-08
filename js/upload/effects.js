import '../../vendor/nouislider/nouislider.js';
import '../../vendor/nouislider/nouislider.css';

const container = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueEffect = document.querySelector('.effect-level__value');

const ranges = {
  none: [0, 100, 1],
  chrome: [0, 1, .1],
  sepia: [0, 1, .1],
  marvin: [0, 100, 1],
  phobos: [0, 3, .1],
  heat: [1, 3, .1]
};

const formatters = {
  none: () => '',
  chrome: (value) => `grayscale(${value})`,
  sepia: (value) => `sepia(${value})`,
  marvin: (value) => `invert(${value}%)`,
  phobos: (value) => `blur(${value}px)`,
  heat: (value) => `brightness(${value})`
};

const createOptions = (type) => {
  const [min, max, step] = ranges[type];
  return {
    range: {min, max},
    step,
    start: max,
    format: {from: String, to: formatters[type]},
    connect: 'lower',
    behaviour: 'snap smooth-steps'
  };
};

const slider = noUiSlider.create(sliderElement, createOptions('none'));

const setEffect = (type) => {
  container.classList.toggle('hidden', type === 'none');
  slider.updateOptions(createOptions(type));
};

const getEffectValue = () => slider.get();
const resetEffect = () => setEffect('none');

slider.on('update', () => {
  valueEffect.value = slider.get(true);
  valueEffect.dispatchEvent(new Event('change', {bubbles: true}));
});

export {setEffect, getEffectValue, resetEffect};
