const allProductsURL = 'https://course-api.com/javascript-store-products';
const singleProductURL = 'https://course-api.com/javascript-store-single-product';

const getElement = (section) => {
    return document.querySelector(section);
}

const formatPrice = (price) => {
    return price = (price / 100).toFixed(2); // lấy 2 chữ số thập phân
}

const getStorageItem = (item) => { // get dữ liệu từ storage
    let storageItem = localStorage.getItem(item);

    if(storageItem) { // nếu đã có dữ liệu ở storage thì lấy ra
        storageItem = JSON.parse(localStorage.getItem(item));
    } else { // nếu chưa có dữ liệu ở storage thì gán bằng mảng rỗng
        storageItem = [];
    }
    return storageItem;
}

const setStorageItem = (name, data) => { // set dữ liệu từ storage
    localStorage.setItem(name, JSON.stringify(data));
}

export {
    allProductsURL,
    singleProductURL,
    getElement,
    formatPrice,
    getStorageItem,
    setStorageItem,
}
