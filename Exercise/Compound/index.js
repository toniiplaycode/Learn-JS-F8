// global import
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific import
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init = async() => {
    const products = await fetchProducts(); // lấy dữ liệu từ API
    // console.log(products);
    setupStore(products); // set dữ liệu vào storagea

    const featured = store.filter(product => product.featured === true); // mảng store đã được map bên file store.js
    // console.log(featured);

    display(featured, getElement('.featured-products')); // render ra 3 sản phẩm đặc trưng
}

window.addEventListener('load', init);