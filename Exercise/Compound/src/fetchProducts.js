import {allProductsURL} from './utils.js';

const fetchProducts = async () => {
    const response = await fetch(allProductsURL).catch(err => console.log(err));
    return response.json();
}

export default fetchProducts