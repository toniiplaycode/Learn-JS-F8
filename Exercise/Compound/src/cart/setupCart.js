import {
    getElement,
    formatPrice,
    getStorageItem,
    setStorageItem
} from '../utils.js'
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';

let cart = getStorageItem('cart'); // mảng cart còn trống hoặc đã có product
// console.log(cart);

export const addToCart = (id) => {
    const item = cart.find(cartItem => cartItem.id === id); // check product đó có trong mảng cart ở localStorage hay chưa
    // console.log(item);

    if(!item){ // nếu chưa có thì thêm product đó vào mảng cart
        let product = findProduct(id);
        product = {...product, amount: 1}; // thêm key amount và value bằng 1
        // console.log(product);
        cart = [...cart, product]; // thêm product vào mảng cart
        // console.log(cart);
        addToCartDOM(product);
    } else { // nếu sản phẩm có rồi thì chỉ cần tăng amounts
        const amount = increaseAmount(id);
        console.log(amount);
    }
}

function increaseAmount(id) {
    console.log(id);
    let newAmount;
    cart = cart.map(cartItem => {
        if(cartItem.id === id){
            newAmount = cartItem.amount + 1;
            cartItem = {...cartItem, amount: newAmount};
        }
        return cartItem;
    });
    // console.log(cart);
    return newAmount;
}