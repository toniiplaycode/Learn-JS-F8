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
var headingElement = document.querySelector('.heading-3');
headingElement.id = 'heading-3';
headingElement.title = 'heading-3';
// hoặc dùng hàm setAttribute();
headingElement.setAttribute('name', 'heading-3');
// lấy 1 attribute bằng hàm getAttribute();
console.log(headingElement.getAttribute('id'));
console.log(headingElement.getAttribute('title'));
console.log(headingElement.getAttribute('class'));
