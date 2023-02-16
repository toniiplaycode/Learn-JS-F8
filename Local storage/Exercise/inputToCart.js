// hàm để show list cart (hàm được gọi nhiều lần vãi lèn)
function showListCartFunc(){
    var showListCart = carts.map((element, index) => {
        return `<li>${element} <button onclick="remove(${index});">X</button> </li>`;
    }).join('');
    document.querySelector('ul').innerHTML = showListCart;
}

if(localStorage.getItem('cartList')){ // nếu cartList có trên localStorage rồi thì chỉ cần push thêm phần tử vào
    var carts = JSON.parse(localStorage.getItem('cartList'));
    showListCartFunc();
}else{ // nếu chưa có cartList trên localStorage thì khởi tạo 1 mảng chống 
    var carts = [];
}

function addToCart(){
    var input = document.querySelector('input');
    carts.push(input.value);
    localStorage.setItem('cartList', JSON.stringify(carts)); 

    var cartList = JSON.parse(localStorage.getItem('cartList'));

    showListCartFunc();

    input.value = '';
    input.focus();
}

function remove(index){
    // xoá theo index của mảng và setItem() lại (ghi đè)
    carts.splice(index, 1);
    localStorage.setItem('cartList', JSON.stringify(carts)); 
    
    // xoá 1 value xong thì getItem() để show lên HTML lại    
    showListCartFunc();
}

//--> vì 2 function của DOM khi muốn thêm hoặc xoá value rồi hiển thị HTML ngay sau khi thực hiện, nên mình phải lập lại đoạn code set và get
//--> mình chưa optimal được code. bị lập lại quá nhiều 

