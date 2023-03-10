// global import
import '../cart/setupCart.js';
import '../cart/toggleCart.js';
import '../toggleSidebar.js';
// specific import
import { store } from '../store.js';
import { getElement } from '../utils.js';
import display from '../displayProducts.js';
// filter import
import setupSearch from '../filter/search.js'; 
import setupCompanies from  '../filter/companies.js';
import setupPrice from '../filter/price.js';

const pageLoading = getElement('.page-loading');
const produtsItem = getElement('.products-item');

const init = () => {
    display(store, produtsItem);
    setupSearch(store);    
    setupCompanies(store);
    setupPrice(store);

    pageLoading.remove();
}

init();