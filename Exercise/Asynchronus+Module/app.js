import fetchFollowers from "./fetchFollowers.js";
import paginate from "./paginate.js";
import displayFollowers from "./displayFollowers.js";
import displayButtons from "./displayButtons.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let index = 0;
let pages = [];

const setUI = () => {
    // console.log(pages[index]);
    displayFollowers(pages[index]);
    displayButtons(pages, index);
}

const init = async() => {
    const title = $('.title');
    try{
        const followers = await fetchFollowers();
        // console.log(followers);
        title.innerHTML = '<h1 class="title-text">Pagination</h1> <div class="title-underline"></div>';
        pages = paginate(followers);
        // console.log(pages);
        setUI(); // vì setUI được gọi trong local scope của hàm init nên sẽ nhận được 1 mảng mới của biến pages mới, nếu hàm setUI ở ngoài thì biến pages global là 1 mảng rỗng
    }catch(error){
        title.innerHTML = `<h1 class="error-message">Something Wrongs! ${error.message}</h1>`;
    }
}

init();

const paginationDOM = $('.pagination'); // dùng querySelectorAll không lấy hết được các button, vì các button được render bằng JS, nên phải dùng hàm function có tham số là event để lấy được các nút
paginationDOM.onclick = function(e){
    // console.log(e.target); // in ra từng button khi click vào
    // console.log(e.target.dataset.index); // lấy data-index của từng button

    const indexBtn = parseInt(e.target.dataset.index);
    // console.log(indexBtn);
    if(Number.isInteger(indexBtn)){ // hàm kiểm tra cố phải là số không, để loại ra 2 nút next và prev
        // console.log(indexBtn);
        index = indexBtn;
        setUI();
    }

    if(e.target.classList.contains('next-btn')){ // click đúng vào next-btn
        index ++;
        if(index > pages.length - 1){
            index = 0;
        }
        setUI();
    }

    if(e.target.classList.contains('prev-btn')){ // click đúng vào prev-btn
        index --;
        if(index < 0){
            index = pages.length - 1;
        }
        setUI();
    }
}