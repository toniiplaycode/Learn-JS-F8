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

//ex11: DOM EVENTS: Assign events
// 1 event cho 1 element
// var h1Element = document.querySelector('.h1AssignEvents');
// h1Element.onclick = function(){ //khi class h1AssignEvents được click thì event mới kich hoạt
//     console.log(Math.random());
// };
// h1Element.onclick = function(){ //khi class h1AssignEvents được click thì event mới kich hoạt
//     console.log(this);
// };
// 1 events cho nhiều element
// var manyH1Elements = document.querySelectorAll('.manyH1AssignEvents'); // --> trả về 1 Nodelist và dùng vòng lặp để duyệt
// for(var eachH1 of manyH1Elements){
//     eachH1.onclick = function(){
//         console.log(this);
//     }
// }
// hoặc
// for(var i = 0; i < manyH1Elements.length; ++i) {
//     manyH1Elements[i].onclick = function(e) { // tham s  ố e trong function là các thuộc tính của event
//     console.log(e.target); // thuộc tính target là trả về đúng element node có event
//     }
// }

//ex12: DOM EVENTS EXAMPLE
// var inputElement = document.querySelector('input[type="text"]');
// change
// inputElement.onchange = function(e){ // onchange sẽ thực thi khi mình trỏ chuột ra ngoài input, tham số e trong function là các thuộc tính của event
//     console.log(e.target.value);// thuộc tính target là trả về đúng element node, và trong thuộc tính target có thuộc tính con của nó là value, value trả về text node
// }
// input
// var inputValue;
// inputElement.oninput = function(e){ // nhập value đến đâu thì thì event sẽ thực thi tới đó, các value theo kiểu cộng dồn
//     inputValue = e.target.value; // biến inputValue sẽ được gán khi ta nhập 1 chữ hoặc số, và được gán liên tục nếu ta nhập 1 chuỗi hoặc 1 dãy số thì nó sẽ gán tương ứng
// }
//
// var inputElement = document.querySelector('input[type="checkbox"]');
// inputElement.onchange = function(e){
//     console.log(e.target.checked); // thuộc tính checked để trả về true hoặc false tương ứng với checkbox đã được check hay chưa
// }
//
// var selectElement = document.querySelector('select');
// selectElement.onchange = function(e){
//     console.log(e.target.value);
// }
// keydown
// var inputValueKeyDown;
// inputElement.onkeydown = function(e){   
//  inputValueKeyDown  = e.target.value;
// }
// keyup
// var inputValueKeyUp;
// inputElement.onkeydown = function(e){   
//     inputValueKeyUp  = e.target.value;
// }
//
// inputElement.onkeyup = function(e){
//     console.log(e.which); // which là mã ASC II của ký tự trên bàn phím (KeyBoardEvent)
//     switch(e.which){
//         case 27: 
//             console.log('ESC');
//             break;
//         case 13: 
//             console.log('ENTER');
//             break;
//     }
// }

// preventDefault
// ex1 bỏ hành vi chuyển trang mặc định của thẻ a
// var aElements = document.querySelectorAll('.prevent-default');
// for(var eachA of aElements){
//     eachA.onclick = function(e){
//         // console.log(e.target.href); // in ra href của từng thẻ a, vào console settings của devtools tích vào Preserve log để nhìn
//         if(!e.target.href.startsWith('https://google.com')){ // thuộc tính starsWith('<chuỗi cần kiểm tra>') kiểm tra chuỗi có trên href, trả về true false
//             e.preventDefault(); // nếu không phải href google.com thì sẽ không cho chuyển trang
//         }
//     }
// }
// ex2
// var ulElement = document.querySelector('.ul-prevent-default');
// ulElement.onmousedown = function(e){ // khi nhấn chuột thì sẽ không bị mất focus, mặc định khi nhấn chuột ngoài input thì sẽ mất focus
//     e.preventDefault();
// }
// var liElement = document.querySelectorAll('.ul-prevent-default > li');
// for(var eachLi of liElement){ // khi click vào li sẽ console.log ra text node của li đó
//     eachLi.onclick = function(){
//         console.log(this.innerText);
//     }
// }

//stopPropagation
// var divElement = document.querySelector('.div-stopPropagation');
// divElement.onclick = function(){ // event của thẻ cha
//     console.log('DIV');
// }
// var btnElement = document.querySelector('.btn-stopPropagation');
// btnElement.onclick = function(e){ // event của thẻ con
//     e.stopPropagation(); // loại bỏ nổi bọt ra thẻ div (thẻ cha), nếu không loại bỏ thì khi click vào thẻ con button thì thẻ cha div cũng thực thi event theo
//     console.log('BUTTON CLICK');
// }

//DOM EVENT: xử lý nhiều việc khi 1 event xảy ra, lắng nghe và huỷ bỏ lắng nghe
// var btnElement = document.querySelector('.btn-DOM-EVENT');
// được lắng nghe và xử lý nhiều việc khi 1 event xảy ra
// btnElement.onclick = function(){
//     console.log('viec 1');
//     console.log('viec 1');
//     alert('viec 3');
// }
// huỷ bỏ lắng nghe
// setTimeout(function(){ // sau 5s thì sẽ huỷ bỏ lắng nghe
//     btnElement.onclick = function(){}; // cho gán function trống cho event là huỷ bỏ lắng nghe 
// }, 5000)

//EVENT LISTENER: xử lý nhiều việc khi 1 event xảy ra, lắng nghe và huỷ bỏ lắng nghe
// var btnElement = document.querySelector('.btn-EVENT-LISTENER');
// được lắng nghe và xử lý nhiều việc khi 1 event xảy ra
// function viec1(){
//     console.log('viec 1');
// }
// function viec2(){
//     console.log('viec 2');
// }
// function viec3(){
//     console.log('viec 3');
// }
// btnElement.addEventListener('click', viec1);
// btnElement.addEventListener('click', viec2);
// btnElement.addEventListener('click', viec3);
// huỷ bỏ lắng nghe
// setTimeout(function(){ // sau 5s thì sẽ huỷ bỏ lắng nghe của viec1
//     btnElement.removeEventListener('click', viec1);
// }, 5000);

//JSON
// --- các dạng chuỗi của JSON ---
//number
// var json1 = '1';
//string
// var json2 = '"tonii"'; // dạng chuỗi thì được để trong dấu nháy kép "<chuỗi>"
//null
// var json3 = 'null';
//boolean
// var json4 = 'true';
//boolean
// var json5 = 'false';
//array
// var json6 = '["HTML", "CSS", "JS"]'; // các element trong mảng dạng chuỗi thì được để trong dấu nháy kép "<chuỗi>"
//object
// var json7 = '{"name": "thanh toan", "age": 19}'; // các key trong object dạng JSON cũng là chuỗi nên phải để trong dấu nháy kép "<key>" và value cũng thế,  trừ value ở dạng number thì không cần dấu nháy kép
// in ra các json
// console.log(json1);
// console.log(json2);
// console.log(json3);
// console.log(json4);
// console.log(json5);
// console.log(json6);
// console.log(json7);
//parse (từ dạng chuỗi JSON -> kiểu dữ liệu JS)
// console.log(JSON.parse(json1));
// console.log(JSON.parse(json2));
// console.log(JSON.parse(json3));
// console.log(JSON.parse(json4));
// console.log(JSON.parse(json5));
// console.log(JSON.parse(json6));
// console.log(JSON.parse(json7));
// --- các kiểu dữ liệu của JS ---
// var jsType1 = 1;
// var jsType2 = 'tonii';
// var jsType3 = null;
// var jsType4 = true;
// var jsType5 = false;
// var jsType6 = ['HTML', 'CSS', 'JS'];
// var jsType7 = {
//     name: 'thanh toan',
//     age: 19
// };
// console.log(jsType1);
// console.log(jsType2);
// console.log(jsType3);
// console.log(jsType4);
// console.log(jsType5);
// console.log(jsType6);
// console.log(jsType7);
//stringify (từ kiểu dữ liệu JS -> dạng chuỗi JSON);
// console.log(JSON.stringify(jsType1));
// console.log(JSON.stringify(jsType2));
// console.log(JSON.stringify(jsType3));
// console.log(JSON.stringify(jsType4));
// console.log(JSON.stringify(jsType5));
// console.log(JSON.stringify(jsType6));
// console.log(JSON.stringify(jsType7));

//Promise
//sync(đồng bộ)
//console.log(1);
//console.log(2);      
//async(bất đồng bộ)
// setTimeout(function(){
//     console.log(1);
// });
// console.log(2);
//vấn để khi sử dụng callbackL: callback hell (những việc được chạy tuần tự và callback sẽ lồng nhau)
//  setTimeout(function(){
//     console.log(1);
//     setTimeout(function(){
//         console.log(2);
//         setTimeout(function(){
//             console.log(3);
//             setTimeout(function(){
//                 console.log(4);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
//ex1: dùng promise trả về resolve() hoặc trả về reject();
// var promise = new Promise(
//     function(resolve, reject){
//         resolve(); // hoặc trả về reject();
//     }
// )
// promise
//     .then(function(){
//         console.log('successully!');
//     })
//     .catch(function(){
//         console.log('failure!');
//     })
//     .finally(function(){
//         console.log('done!');
//     })
//ex2: trả dữ liệu từ executor ra .then(function(){}) hoặc .catch(function(){})
// var promise = new Promise(
//     function(resolve, reject){
//         resolve(['HTML','CSS','JS']);
//         // hoặc reject('lỗi rồi !');
//     }
// )
// promise
//     .then(function(laguages){
//         console.log(laguages);
//     })
//     .catch(function(error){
//         console.log(error);
//     })
//     .finally(function(){
//         console.log('done!');
//     })
