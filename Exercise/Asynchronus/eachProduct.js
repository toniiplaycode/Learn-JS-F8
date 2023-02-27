const url = 'https://course-api.com/javascript-store-single-product';
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const productCenter = $('.product-center');
const getID = new URLSearchParams(window.location.search);
const id = getID.get('id');

const fetchProduct = async() => {
    productCenter.innerHTML = '<div class="loading"></div>';
    try{
        let response = await fetch(`${url}?id=${id}`);
        let product = await response.json();
        return product;
    }catch(error){
        productCenter.innerHTML = `<h2 class="error">Something wrongs! ${error.message}</h2>`;
    }
}

const showProduct = async(product) => {
    console.log(product);
    let {company, name, price, description} = product.fields;
    let {url: img} = product.fields.image[0];
    price = price / 100;
    productCenter.innerHTML = `
        <div class="product-container">
            <img class="each-product-img" src="${img}" alt="">
            <div class="info">
                <p class="info-name">${name}</p>
                <p class="info-company">${company}</p>
                <p class="info-price">$${price}</p>
                <p class="info-des">${description}</p>
                <button class="btn-add-to-cart">Add To Cart</button>
            </div>
        </div>
    `
}

const start = async () => { 
    const data = await fetchProduct();
    showProduct(data);
}
start();