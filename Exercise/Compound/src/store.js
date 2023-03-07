import { getStorageItem, setStorageItem } from "./utils.js";
let store = getStorageItem('store'); // get dữ liệu storage
// console.log(store);

const setupStore = (products) => { // set dữ liệu vào storage
    // console.log(products);
    store = products.map(product => {
        const {
            id,
            fields: {featured, name, price, company, image}
        } = product;
        const img = image[0].url;
        return {id, featured, name, price, company, img};
    });
    // console.log(store);
    setStorageItem('store', store);
}

const findProduct = (id) => {
    let product = store.find(product => product.id === id);
    return product;
}

export {store, setupStore, findProduct}