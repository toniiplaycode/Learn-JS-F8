const url = 'https://course-api.com/javascript-store-products';
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const productsCenter = $('.products-center');
const productsContainer = $('.products-container');

const fetchProducts = async () =>{
    productsCenter.innerHTML = '<div class="loading"></div>'; // lúc sản phẩm chưa map để render ra thì loading sẽ hiện lên
    try{
        let response = await fetch(url);
        let products = await response.json();
        return products;
    }catch(error){
        productsCenter.innerHTML = `<h2 class="error">Something wrongs! ${error.message}</h2>`;
    }
}

const showProducts = async(list) => {
    const html = list.map((product) => {
        let { id } = product;
        let { price, name } = product.fields;
        let { url: img } = product.fields.image[0]; // đặt tên img cho url ảnh, image[0] là do key image có value là mảng
        price = price / 100;
        return `
            <a class="single-product" href="eachProduct.html?id=${id}">
                <img class="product-img" src="${img}" alt="">
                <footer>
                    <p class="name">${name}</p>
                    <p class="price">$${price}</p>
                </footer>
            </a>
        `;
    }).join('');
    productsCenter.innerHTML = `<div class="products-container"> ${html} </div>`; // lúc map rồi và sản phẩm được render ra thì sản phẩm sẽ đè loading (innerHTMl DOM là thằng nào sau cùng sẽ đè lên)
}

const start = async() => {
    const data =  await fetchProducts();
    showProducts(data);
};
start();