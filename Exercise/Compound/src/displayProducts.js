import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";

const display = (products, element) => {
    // console.log(products);
    const html =  products.map(product => {
        const {id, img, name, price} = product;
        return `
            <div class="product-item">
                <div class="product-container">
                    <img class="product-container-img" src="${img}">
                    <div class="product-container-icons">
                        <button class="btn-link-product" onclick="window.location.href='product.html?id=${id}'">
                            <i class="fas fa-search"></i>
                        </button>
                        <button class="btn-add-to-cart" data-id=${id}>
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <footer class="product-footer">
                    <p class="product-item-name">${name}</p>
                    <p class="product-item-price">$${formatPrice(price)}</p>
                </footer>
            </div>
        `
    }).join('');
    // console.log(html);
    element.innerHTML = html;
    
    element.addEventListener('click', function(e){
        const parent = e.target.parentElement;
        if (parent.classList.contains('btn-add-to-cart')) { 
            addToCart(parent.dataset.id);
            // console.log(parent.dataset.id);
          }
    });

}

export default display