import Pristine from 'pristinejs';

const uploadForm = document.querySelector('.img-upload__form');
const hashtags = uploadForm.querySelector('.text__hashtags');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const validateHashTags = () => {
  hashtags.value.startsWith('#');
};

pristine.addValidator(hashtags, validateHashTags, 'ХэшТаг должен начинаться с #');

const validateForm = () => {
  pristine.validate();
};

export {validateForm};
