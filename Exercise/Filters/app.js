var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var companies = $('.companies');
var productsContainer = $('.products-container');
var inputSearch = $('.input-search');

function render(products){
    var html = products.map(function (product) {
        return `
                <div class="product">
                    <img class="product-img" src="${product.image}">
                    <footer>
                        <h5 class="product-name">${product.title}</h5>
                        <span class="product-price">$${product.price}</span>
                    </footer>
                </div>
            ` 
    }).join('');
    
    productsContainer.innerHTML = html;
}

render(products);

// ***show company**
var productsCompany = ['all', ...new Set(products.map(function (product) {
    return product.company;
}))];
// console.log(productsCompany);
var htmlFilterCompany = productsCompany.map(function (company) {
    return `<a href="#" class="company-link">${company}</a>`
}).join('') ;
// console.log(htmlFilterCompany);
companies.innerHTML = htmlFilterCompany;

// **filter company**
var companyLink = $$('.company-link');

companyLink.forEach(function (link) {
    link.onclick = function(){
        // console.log(link.innerText.toLowerCase());
        var filterProducts;
        if(link.innerText.toLowerCase() === 'all') { // nếu click vào 'all' thì biến filterProducts sẽ bằng nguyên cái mảng products và render nó ra
            filterProducts = products;
        }else{ // nếu click không phải vào 'all' thì sẽ filter theo từng company và render nó ra
            filterProducts = products.filter(function(element){
                return element.company === link.innerText.toLowerCase();
            });
        } 
        inputSearch.value = ''; // khi click vào filter thì value của input luôn luôn phải trống
        // console.log(filterProducts);
        render(filterProducts);
    }
});

// **search**
inputSearch.onkeyup = function(){ // mỗi lần nhấn 1 phím trong input thì function này sẽ thực hiện
    var inputValue = inputSearch.value;
    console.log(inputValue);
    var filterProducts = products.filter(function(element){
        return element.title.includes(inputValue.toLowerCase()); // includes sẽ duyệt chuỗi inputValue có trong element.title không
    });

    if(filterProducts.length === 0){ // nếu filterProducts là 1 mảng trống thì thì in ra dòng này
        productsContainer.innerHTML = '<h4>No products matched your search</h4>'
    }else{
        render(filterProducts);
    }
}