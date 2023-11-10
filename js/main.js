import {renderGallery} from './gallery/gallery.js';
import {request} from './utilities.js';
import {resetForm, setSubmitDisabled} from'./upload/upload.js';
import {renderStatus} from './status.js';

const baseUrl = 'https://30.javascript.pages.academy/kekstagram';

document.addEventListener('formdata', async (event) => {
  try {
    setSubmitDisabled(true);
    await request(baseUrl, {method:'POST', body: event.formData});
    resetForm();
    renderStatus('success');
  } catch (error) {
    renderStatus('error');
  } finally {
    setSubmitDisabled(false);
  }
});

request((`${baseUrl}/data`), {method:'GET'})
  .then((data) => renderGallery(data))
  .catch(() => renderStatus('data-error', {autoHide: 5000}));

