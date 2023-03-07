//global imports
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
import '../toggleSidebar.js';
//specific imports
import { addToCart } from '../cart/setupCart.js';
import { singleProductURL, getElement, formatPrice} from '../utils.js';

const singleProduct = getElement('.single-product');
const pathTitle = getElement('.path-title');
const imgDOM = getElement('.single-product-img > img');
const infoName = getElement('.info-name');
const infoCompany = getElement('.info-company');
const infoPrice = getElement('.info-price');
const infoDes = getElement('.info-des');
const pageLoading = getElement('.page-loading');
const btnAddToCart = getElement('.btn-add-to-cart-single-product');

let productID;

window.addEventListener('load', async () => {
    const urlID = window.location.search; // lấy id của product trên thanh địa chỉ
    // console.log(urlID);
    const response = await fetch(`${singleProductURL}${urlID}`);
    if(response.status >= 200 && response.status <= 299){
        const product = await response.json();
        // console.log(product);
        const {id, fields} = product;
        productID = id;
        const {company, price, name, description: des} = fields;
        const img = fields.image[0].url;
        
        document.title = `${name.toUpperCase()}`;
        pathTitle.innerHTML = `Home / ${name}`;
        imgDOM.setAttribute('src', `${img}`);
        infoName.innerHTML = name;
        infoCompany.innerHTML = `BY ${company}`;
        infoPrice.innerHTML = `$${formatPrice(price)}`;
        infoDes.innerHTML = des;

        pageLoading.remove(); // load xong gở luôn element page-loading
    }else{
        singleProduct.innerHTML = `<div> <h1 class="error">Sorry, wrong something!</h1> <button class="error-btn" onclick ="window.location.href='index.html'" >back home</button> </div>`;
    }
});

btnAddToCart.addEventListener('click', () => {
    addToCart(productID);
});

