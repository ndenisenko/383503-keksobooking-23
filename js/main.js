import './map.js';
import './form-modal.js';
import {getData} from './api.js';
import {renderMarkers} from './map.js';
import {setUserFormSubmit, setUserFormReset} from './form-modal.js';
import {showAlert} from './utils/show-alert.js';


getData(renderMarkers, showAlert);
setUserFormSubmit();
setUserFormReset();
