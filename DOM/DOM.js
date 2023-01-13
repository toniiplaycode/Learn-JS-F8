//ex1: document.write(<biến hoặc chuỗi>);
// document.write('Hello DOM');

//ex2: get element ID
// console.log(document.getElementById('heading'));

// ex3: get element class
// console.log(document.getElementsByClassName('heading-2'));

// ex4: get element tag name
// console.log(document.getElementsByTagName('h2'));

// ex5: get element CSS selector
// console.log(document.querySelector('#heading'));
// console.log(document.querySelectorAll('.heading-2'));
// console.log(document.querySelectorAll('.app .appItem'));
// console.log(document.querySelectorAll('.app .appItem:first-child'));

// ex5: get element HTML collection
// console.log(document.anchors);

// ex5: get element bằng 1 cách khác
// var div_main = document.querySelector('.div-main');
// console.log(div_main);
// console.log(div_main.getElementsByTagName('a'));

// ex5: get element bằng vòng lặp
// var app = document.getElementsByClassName('appItem');
// for(var item of app){
//     console.log(item);
// }

// ex6: attribute node:
// var headingElement = document.querySelector('.heading-3');
// headingElement.id = 'heading-3';
// headingElement.title = 'heading-3';
// hoặc dùng hàm setAttribute();
// headingElement.setAttribute('name', 'heading-3');
// lấy 1 attribute bằng hàm getAttribute();
// console.log(headingElement.getAttribute('id'));
// console.log(headingElement.getAttribute('title'));
// console.log(headingElement.getAttribute('class'));

//ex7: innerText & textContent: 
// lấy ra text node
// var headingElement = document.querySelector('.heading-text');
// console.log(headingElement.innerText);
// console.log(headingElement.textContent);
// sửa text
// headingElement.innerText = 'new innterText';
// hoặc
// headingElement.textContent = 'new textContent';
//
// khác nhau giữa innerText và textContent
// var innerTextVStextContent = document.querySelector('.innerTextVStextContent');
// console.log(innerTextVStextContent.innerText);
// console.log(innerTextVStextContent.textContent);

//ex8: innerHMTL & outerHTML:
//innerHMTL:
//setter
// var boxElement =  document.querySelector('.box');
// boxElement.innerHTML = '<h1>HELLO innerHTML</h1>'; // thêm element node và text node;
// boxElement.innerHTML = '<h2 style="color: grey">HELLO innerHTML</h2>'; // thêm element node và text node, attribute;
// //geter
// console.log(boxElement.innerHTML);

//ex9: DOM CSS
// var boxCssElement = document.querySelector('.box-css')
// // dùng cách bình thường
// // boxCssElement.style.width = '100px';
// // boxCssElement.style.height = '100px';
// // boxCssElement.style.background = 'red';
// // dùng Object.assign();
// Object.assign(boxCssElement.style, {
//    width: '100px',
//    height: '100px',
//    background: 'blue',
// });

//ex10: Classlist: add, contains, remove, toggle
// var boxClassList = document.querySelector('.box-lastlist');
// thêm phương thức
// boxClassList.classList.add('red');
// kiểm tra phương thức, trả về boolean
// console.log(boxClassList.classList.contains('red'));
// console.log(boxClassList.classList.contains('blue')); // class blue không có nên trả về false
// gở phương thức
// boxClassList.classList.remove('red');
// nếu có thì gở, nếu không có thì thêm
// boxClassList.classList.toggle('red');
// ứng dụng của toggle
// setInterval(() => {
//    boxClassList.classList.toggle('red');
// }, 500);