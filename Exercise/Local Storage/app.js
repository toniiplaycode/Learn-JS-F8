const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const inputAdd = $('.input-add');
const btnAdd = $('#btn-add');
const btnEdit = $('#btn-edit');
const divShowItem = $('.show-item');
const btnClear = $('.btn-clear');

if(!localStorage.getItem('grocery')){ // nếu chưa có grocery trên local storage thì sẽ khởi tạo 1 mảng có sẵn 1 phần tử
    var groceryItems = [];
}else{ // nếu đã có rồi thì lấy luôn, khỏi cần khởi tạo 
    var groceryItems = JSON.parse(localStorage.getItem('grocery'));
}
 
//** DOM để thêm item vào mảng grocery trên local storage **
var eventAdd = btnAdd.onclick = function() {
    let valueInput = inputAdd.value;
    groceryItems.push(valueInput);

    localStorage.setItem('grocery', JSON.stringify(groceryItems));

    inputAdd.value = '';
    inputAdd.focus();
    render();   
}

inputAdd.onkeyup = function(e){
    if(e.keyCode === 13 && (btnEdit.getAttribute('class') === 'hide-btn-edit')){ // đúng nút enter và btnEdit được ẩn đi
        eventAdd(); // nếu nhấn nút enter thì gọi hàm btnAdd.oncick để thêm item
    }
}

// ** hàm để render ra các item, khi 1 item được thêm thì hàm này sẽ được gọi lại ** 
function render(){
    groceryItems.forEach(function(item){
        var html = groceryItems.map((item, index) => {  
            return `
                <p>
                    <span>${item}</span>
                    <span>
                        <i class="fas fa-edit" data-id="${index}"></i>
                        <i class="fas fa-trash" data-id="${index}"></i>
                    </span>
                </p>
                
            `;
        }).join('');
        divShowItem.innerHTML = html;
    });
  
    // gọi hàm edit, delete trong hàm render mới có thể lấy được các DOM elements
    selectElementsEdit();
    selectElementsDelelte();
}

// ** sửa item **
function selectElementsEdit() {
    var editButtons = document.querySelectorAll('.fa-edit');
    
    editButtons.forEach(function(item){
        item.onclick = function(){
            var index = item.dataset.id;
            inputAdd.value = groceryItems[index];
            inputAdd.focus();

            btnEdit.classList.remove('hide-btn-edit') // hiện nút sửa
            btnAdd.style.display = 'none'; // ẩn nút thêm

            btnEdit.onclick = function(){
                groceryItems[index] = inputAdd.value;  // gán lại giá trị mới theo index cần sửa 
                localStorage.setItem('grocery', JSON.stringify(groceryItems));
                render();
                inputAdd.value = '';

                btnEdit.classList.add('hide-btn-edit') // sửa xong thì ẩn nút sửa
                btnAdd.style.display = 'block'; // sửa xong thì hiện lại nút thêm
            }
        }
    });
} 


// ** xoá item **
function selectElementsDelelte() {  
    var editButtons = document.querySelectorAll('.fa-trash');
    // console.log(editButtons);
    editButtons.forEach(function(item){
        item.onclick = function(){
            groceryItems.splice(item.dataset.id, 1);    
            localStorage.setItem('grocery', JSON.stringify(groceryItems));
            render();

            if(groceryItems.length === 0){
                location.reload(); // xoá item cuối cùng thì load lại trang luôn
            }
        }
    });
}


// ** xoá tất cả item **
btnClear.onclick = function(){
    localStorage.clear('grocery');
    location.reload(); // xoá sạch thì load lại trang
}


//** khi mới vào trang thì render() sẽ được gọi tự động **
render();