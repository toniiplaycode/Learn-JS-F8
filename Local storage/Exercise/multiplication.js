var spanValue = parseInt(document.querySelector('span').innerText);
if(window.localStorage.getItem('quantity')){
    spanValue = parseInt(window.localStorage.getItem('quantity'));
}

function updateQuantity(type){
    if(type === 'incre'){
        spanValue++;
    }else {
        spanValue--;
    }
    document.querySelector('span').innerHTML = spanValue;
    window.localStorage.setItem('quantity', `${spanValue}`);
    
    // phép nhân
    var multi = parseInt(window.localStorage.getItem('quantity')) * 9;
    window.localStorage.setItem('total', `${multi}`);
    var result = window.localStorage.getItem('total'); 
    document.querySelector('p').innerHTML = `${spanValue} * 9 = ${result}`;   
}

if(window.localStorage.getItem('quantity')){
    var getQuantity = window.localStorage.getItem('quantity');
    document.querySelector('span').innerHTML = getQuantity;
}
