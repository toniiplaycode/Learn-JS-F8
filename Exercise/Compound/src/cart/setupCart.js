import {
    getElement,
    formatPrice,
    getStorageItem,
    setStorageItem,
} from '../utils.js'
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';

const cartItemsDOM = getElement('.cart-items');
const toggleCartCountDOM = getElement('.toggle-cart-count');
const totalDOM = getElement('.total-title');
 
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
        // console.log(amount);
        const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')]; // lấy tất cả item DOM (chỉ lấy những element có class là 'cart-item-amount') vào 1 cái mảng items
        // console.log(items);
        const newAmount = items.find(value => value.dataset.id === id); // sau đó tìm đúng item có class cart-item-amount theo id
        newAmount.textContent = amount; // rồi text Node mình render ra amout của nó
    }

    displayCartItemCount();  // đếm số lượng item item có trong cart
    displayCartTotal(); // tính tổng giá trong cart
    setStorageItem('cart', cart); // đẩy mảng cart lên local storage
    openCart(); // mở cart
}

function displayCartItemCount() {
    const amount = cart.reduce((total, cartItem) => {
        return (total += cartItem.amount);
    }, 0);
    toggleCartCountDOM.textContent = amount;
}

function displayCartTotal() {
    const total = cart.reduce((total, cartItem) => {
        return (total += cartItem.price * cartItem.amount);
    }, 0);
    totalDOM.textContent = `Total: $${formatPrice(total)}`;
}

function displayCartItemsDOM() { // hiển thị tất cả item có trong mảng cart ra ngoài DOM
    cart.forEach(cartItem => {
        addToCartDOM(cartItem);
    });
}

function removeItem(id) {
    cart = cart.filter(cartItem => cartItem.id !== id); // filter để loại ra item có id bằng id được truyền tham số vào
    // console.log(cart);
}

function increaseAmount(id) {
    // console.log(id);
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

function decreaseAmount(id) {
    // console.log(id);
    let newAmount;
    cart = cart.map(cartItem => {
        if(cartItem.id === id){
            newAmount = cartItem.amount - 1;
            cartItem = {...cartItem, amount: newAmount};
        }
        return cartItem;
    });
    // console.log(cart);
    return newAmount;
}

function setupCartFunctionality(){
    cartItemsDOM.addEventListener('click', function(e) {
        const element = e.target;
        const id = e.target.dataset.id;
        const parent = e.target.parentElement;

        if(element.classList.contains('cart-item-remove')){
            const id = e.target.dataset.id;
            // console.log(id)
            removeItem(id);
            parent.parentElement.remove(); // xoá luôn DOM, xoá thằng cha của thằng cha nó (cart-item)
        }
        if(parent.classList.contains('cart-item-increase-btn')){
            const newAmount = increaseAmount(id);
            parent.nextElementSibling.textContent = newAmount;
        }
        if(parent.classList.contains('cart-item-decrease-btn')){
            const newAmount = decreaseAmount(id);
            if(newAmount === 0){
                removeItem(id);
                parent.parentElement.parentElement.remove(); 
            }else{
                parent.previousElementSibling.textContent = newAmount;
            }
            
        }

        displayCartTotal();
        displayCartItemCount();
        setStorageItem('cart', cart);
    });
}

function init() { // các hàm sẽ được chạy tự động
    displayCartItemCount();
    displayCartTotal();
    displayCartItemsDOM();
    setupCartFunctionality();
}
init();