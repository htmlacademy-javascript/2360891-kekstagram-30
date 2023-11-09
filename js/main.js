import {renderGallery} from './gallery/gallery.js';
import {request} from './utilities.js';
import './upload/upload.js';
import {renderStatus} from './status.js';

const PHOTOS_URL = 'https://30.javascript.pages.academy/kekstagram/data';
const SEND_URL = 'https://30.javascript.pages.academy/kekstagram/';

document.addEventListener('formdata', (event) => {
  request(SEND_URL, {method:'POST', body: event.formData})
    .then(() => {
      renderStatus('success');
    })
    .catch(() => {
      renderStatus('error');
    });
});

request(PHOTOS_URL, {method:'GET'})
  .then((data) => renderGallery(data))
  .catch(() => renderStatus('data-error'));

