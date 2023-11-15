import {renderGallery} from './gallery/gallery.js';
import {request, debounce} from './utilities.js';
import {resetForm, setSubmitDisabled} from'./upload/upload.js';
import {renderStatus} from './status.js';

const DELAY = 5000;
const BASE_URL = 'https://30.javascript.pages.academy/kekstagram/';

document.addEventListener('formdata', async (event) => {
  try {
    setSubmitDisabled(true);
    await request(BASE_URL, {method:'POST', body: event.formData});
    resetForm();
    renderStatus('success');
  } catch (error) {
    renderStatus('error');
  } finally {
    setSubmitDisabled(false);
  }
});

request((`${BASE_URL}data`), {method:'GET'})
  .then((data) => renderGallery(data, debounce))
  .catch(() => renderStatus('data-error', {autoHide: DELAY}));

