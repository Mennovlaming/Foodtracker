import '../css/style.css';
import * as foodcounter from './modules/foodCounter.js';
import * as popup from './modules/popUp.js';
import * as dataService from './modules/dataService.js';
import { fetchData, sendData } from './modules/dataService.js';

document.addEventListener('DOMContentLoaded', () => {
   fetchData();
   sendData();
});

 



