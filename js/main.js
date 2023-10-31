import {renderGallery} from './gallery/gallery.js';
import {createPictureData} from './data.js';

const pictureData = createPictureData();
renderGallery(pictureData);
