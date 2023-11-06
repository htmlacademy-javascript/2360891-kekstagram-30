import '../../vendor/pristine/pristine.min.js';

const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const split = (text) => text.split(' ').filter(Boolean);

pristine.addValidator(uploadForm.hashtags, (text) => {
  const hashtagPattern = /^#[a-zа-яё0-9]+$/i;
  return split(text).every((word) => hashtagPattern.test(word));
}, 'невалидный ХэшТег', 1, true);

pristine.addValidator(uploadForm.hashtags, (text) => {
  const maxHashtagLength = 20;
  return split(text).every((word) => word.length < maxHashtagLength);
}, 'слишком длинный ХэшТег', 1, true);

pristine.addValidator(uploadForm.hashtags, (text) => {
  const maxHashtags = 5;
  return split(text).length <= maxHashtags;
}, 'много ХэшТегов', 1, true);

pristine.addValidator(uploadForm.hashtags, (text) => {
  const words = split(text.toLowerCase());
  return words.length === new Set(words).size;
}, 'одинаковые ХэшТеги', 1, true);


pristine.addValidator(uploadForm.description, (text) => {
  const maxTextLength = 140;
  return text.length < maxTextLength;
}, 'слишком длинное описание', 1, true);

const validateForm = () => {
  pristine.validate();
};

const resetValidateForm = () => {
  pristine.reset();
};

export {validateForm, resetValidateForm};
