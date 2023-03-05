import { getElement, formatPrice } from "../utils.js";

const cartItemsDOM = getElement('.cart-items');

const addToCartDOM = ({id, name, price, img, amount}) => {
    const article = document.createElement('acricle');
    article.classList.add('cart-item');
    article.setAttribute('data-id', id);
    article.innerHTML = `
        <img class="cart-item-img" src="${img}" alt="">
        <div class="cart-item-info">
            <span class="name">${name}</span>
            <span class="price">$${formatPrice(price)}</span>
            <a class="cart-item-remove" href='' data-id="${id}">remove</a>
        </div>
        <div class="incre-and-decre">
            <button class="cart-item-increase-btn" data-id="${id}">
                <i class="fas fa-chevron-up"></i>
            </button>

            <p class="cart-item-amount" data-id="${id}">${amount}</p>

            <button class="cart-item-decrease-btn" data-id="${id}">
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>
    `   
    cartItemsDOM.appendChild(article);
}

export default addToCartDOM;