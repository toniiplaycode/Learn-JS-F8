import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const companiesDOM = getElement('.companies');
const productsItem = getElement('.products-item');

const setupCompanies = (store) => {
    // console.log(store);
    const companies = store.map(product => {
        return product.company;
    });
    // console.log(companies);
    const newCompanies = ["all", ...new Set(companies)]; // thêm all và lọc các company bị trùng
    // console.log(newCompanies);   
    const html = newCompanies.map(company => {
        return `
            <p class="company-filter">${company}</p>
        `
    }).join('');
    // console.log(html);
    companiesDOM.innerHTML = html;

    companiesDOM.addEventListener('click', (e) => {
        const element = e.target;
        let newStore;

        if(element.textContent === 'all'){
            newStore = [...store];
        }else{
            newStore = store.filter(product => {
               return product.company === element.textContent;
            });
        }

        display(newStore, productsItem);
        
    });
}

export default setupCompanies;