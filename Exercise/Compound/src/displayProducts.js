import { getElement, formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";

const display = (products, element, filter) => {
    // console.log(products);
    const html =  products.map(product => {
        const {id, img, name, price} = product;
        return `
            <div class="featured-item">
                <div class="featured-container">
                    <img class="featured-container-img" src="${img}">
                    <div class="featured-container-icons">
                        <button class="btn-link-product" onclick="window.location.href='product.html?id=${id}'">
                            <i class="fas fa-search"></i>
                        </button>
                        <button class="btn-add-to-cart" data-id=${id}>
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <footer class="featured-footer">
                    <p class="featured-item-name">${name}</p>
                    <p class="featured-item-price">$${formatPrice(price)}</p>
                </footer>
            </div>
        `
    }).join('');
    // console.log(html);
    element.innerHTML = html;
    getElement('.loading').classList.add('hide'); // khi products được render ra thì ẩn loading
    
    element.addEventListener('click', function(e){
        const parent = e.target.parentElement;
        if (parent.classList.contains('btn-add-to-cart')) { 
            addToCart(parent.dataset.id);
            // console.log(parent.dataset.id);
          }
    });

}

export default display