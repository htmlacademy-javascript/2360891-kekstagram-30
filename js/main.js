import {renderGallery} from './gallery/gallery.js';
import {createPictureData} from './data.js';
import {renderUpload} from './upload/upload.js';

const pictureData = createPictureData();
renderGallery(pictureData);
renderUpload();

