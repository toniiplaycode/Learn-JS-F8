import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const inputRange = getElement('.price-range');
const rangeValueDOM = getElement('.range-value');
const productsItem = getElement('.products-item');

const setupPrice = (store) => {
    let maxPrice = store.map(product => product.price / 100);
    maxPrice = Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice);
    // console.log(maxPrice);
    rangeValueDOM.innerHTML = `Price: $${maxPrice}`;

    inputRange.addEventListener('input', (e) => {
        const element = e.target;
        const value = element.value;

        rangeValueDOM.innerHTML = `Price: $${value}`;
        let newStore = store.filter(product => product.price / 100 <= value);
        // console.log(newStore);
        display(newStore, productsItem);

        if(newStore.length < 1){
            productsItem.innerHTML = '<h5 class="error">Sorry, No Products Matched Your Range Price !</h5>';
        }
    })
};

export default setupPrice;