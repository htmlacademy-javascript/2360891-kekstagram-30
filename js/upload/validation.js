import '../../vendor/pristine/pristine.min.js';

const config = {maxHashtagLength: 20, maxHashtags: 5, maxTextLength: 140};
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
  const maxHashtagLength = config.maxHashtagLength;
  return split(text).every((word) => word.length < maxHashtagLength);
}, 'слишком длинный ХэшТег', 1, true);

pristine.addValidator(uploadForm.hashtags, (text) => {
  const maxHashtags = config.maxHashtags;
  return split(text).length <= maxHashtags;
}, 'много ХэшТегов', 1, true);

pristine.addValidator(uploadForm.hashtags, (text) => {
  const words = split(text.toLowerCase());
  return words.length === new Set(words).size;
}, 'одинаковые ХэшТеги', 1, true);


pristine.addValidator(uploadForm.description, (text) => {
  const maxTextLength = config.maxTextLength;
  return text.length < maxTextLength;
}, 'слишком длинное описание', 1, true);

const validateForm = () => pristine.validate();

const resetValidateForm = () => pristine.reset();

export {validateForm, resetValidateForm};
