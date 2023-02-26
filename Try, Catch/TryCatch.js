// ex1: dùng err.message để in ra lỗi JS có sẵn 
// try{
//     addlert('Welcome Try Catch'); // ghi sai chính tả hàm alert, 
// }catch(err){
//     console.log(err.message);
// }

// ex2: dùng throw để in ra lỗi mình muốn hiển thị (validation input), finnaly là khi try catch thực hiện xong thì finnaly luôn được chạy
function checkNumber(){
    const inputNumber = document.querySelector('.input-number').value;
    const showError = document.querySelector('.show-error');
    showError.innerHTML = '';
    try{
        if(inputNumber.trim() === '')  throw 'is empty !';
        if(isNaN(inputNumber)) throw 'is not a number !';
        if(inputNumber < 5 || inputNumber > 10) throw 'is out of range !';
    }catch(err){
        showError.innerHTML = 'Input ' + err;
    }finally{
        document.querySelector('.input-number').value = '';
    }
}
// --> làm để hiểu hơn về try catch thôi, validation đơn giản này dùng: <input id="demo" type="number" min="5" max="10" step="1"> cho lẹ