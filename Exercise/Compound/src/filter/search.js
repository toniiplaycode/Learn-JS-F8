import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const inputSearch = getElement('.input-search');
const productsItem = getElement('.products-item');

const setupSearch = (store) => {
    // console.log(store);
    inputSearch.addEventListener('keyup', (e) => {
        const valueInput = inputSearch.value;
        // console.log(valueInput);
        if(valueInput){
            const newStore = store.filter(product => {
                let {name} = product;
                name = name.toLowerCase();
                if(name.startsWith(valueInput)){
                    return product;
                }
            });
            console.log(newStore);

            display(newStore, productsItem);

            if(newStore.length < 1){
                productsItem.innerHTML = '<h5 class="error">Sorry, No Products Matched Your Search !</h5>';
            }
        }else{
            display(store, productsItem);
        }
    });

}

export default setupSearch;