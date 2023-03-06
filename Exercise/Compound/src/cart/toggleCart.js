import { getElement } from "../utils.js";

const cartOverlay = getElement('.cart-overlay'); 
const toggleCartBtn = getElement('.toggle-cart-btn');
const cartCloseBtn = getElement('.cart-close');
const cart = getElement('.cart');

toggleCartBtn.addEventListener('click', ()=>{
    cartOverlay.classList.add('show');
    cart.style.animation = 'cart-aside-on linear 0.3s';
});

cartCloseBtn.addEventListener('click', ()=>{
    cart.style.animation = 'cart-aside-off linear 0.3s';
    setTimeout(() => {
        cartOverlay.classList.remove('show');
    }, 300);
});

export function openCart() {
    cartOverlay.classList.add('show');
    cart.style.animation = 'cart-aside-on linear 0.3s'; 
}