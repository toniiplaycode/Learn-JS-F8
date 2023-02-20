
// IIFE
// // không có tham số
// (function(){
//     console.log('call function now');
// })();
// // có tham số
// (function(log){
//     console.log(log);
// })('hello');
//// dùng IIFE để tạo 1 hàm quản lý xe
// const app = (function(){
//     const cars = []; // mảng cars để lưu lại các xe, biến này bên ngoài IIFE không thể truy cập được "private"; 
//     return {
//         get(index){
//             return cars[index];
//         },
//         add(car){
//             cars.push(car);
//         },
//         edit(index, car){
//             cars[index] = car;
//         },
//         delete(index){
//             cars.splice(index, 1);
//         }
//     }
// })();
// console.log(app);
// app.add('HONDA');
// console.log('get cars[0]: ', app.get(0));
// app.add('YAMAHA');
// console.log('get cars[1]: ', app.get(1));
// app.edit(1, 'SUZUKI');
// console.log('edited car[1]: ', app.get(1));
// app.delete(1);
// console.log('deleted car[1]: ', app.get(1));

// closure
// function counter(){
//     var count = 0;
//     function increase(){
//         return ++count;
//     }
//     return increase;
// }
// var counterTimes = counter(); 
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// //--> do hàm counter() được gán cho 1 biến counterTimes nên biến count trong hàm counter() sẽ được lưu lại 

//hàm gọi hàm khi cha return hàm con bên trong (có return hàm con mới gọi hàm gọi hàm được)
// function a(x){
//     var X = x;
//     return function b(y){
//         var Y = y;
//         console.log(X + Y);
//     }
// }
// a(1)(2);

// Strict mode
// // dùng biến nhưng không khai báo
// 'use strict';
// a = 123;
// console.log(123);
// // truy cập biến của 1 function (theo đúng thì không thể truy cập vì biến trong function là local scope)
// 'use strict';
// function testStrict(){
//     b = 123;
// }
// testStrict();
// console.log(b);
// // hàm có 2 tham số trùng tên
// 'use strict';
// function a(x, x){ // nếu bình thường không dùng strict mode để check thì nó sẽ lấy tham số sau cùng đè lên
//     console.log(x + x); // 20
// }
// a(5, 10);
// // khai báo function trong phạm vi code block và gọi từ bên ngoài code block
// 'use strict';
// {
//     function funcInBlock(){
//         console.log('outside is not call this function');
//     }
// }
// funcInBlock(); // nếu không dùng strict mode thì bên ngoài code block có thể call được 

// this
// ex1: this trả về object nó thuộc về
// var myPhone = {
//     name: 'iphone 11',
//     ram: '3GB',
//     color: 'black',
//     getName(){
//         console.log(this.name);  // tương đương myPhone.name;
//     }
// }
// myPhone.getName();
// ex2: this trả về object nó thuộc về (trong object có object)
// var phone = {
//     name: 'iphon 11',
//     brand: 'apple',
//     configuration : {
//         ram: '3GB',
//         camera: '12MP',
//         getAll(){
//             console.log(this);
//         }
//     }
// }
// console.log(phone.configuration.getAll());
// ex3: không có đối tượng trước this thì nó sẽ trả về đối lượng global(window)
// function func(){
//     console.log(this);
// } 
// func();
// ex4: this trong hàm tạo
// function Car(name, color){
//     this.name = name;
//     this.color = color;
// }
// var honda = new Car('Winner X', 'black'); // biến honda là đối tượng được tạo
// console.log(honda); 

// bind()
// this ở object có thể được tham chiếu từ 1 object khác
// const teacher = {
//     firstName: 'Minh',
//     lastName: 'Thảo',
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const student = {
//     firstName: 'Thanh',
//     lastName: 'Toàn',
// }
// const getStudentName = teacher.getFullName.bind(student); // tuy dùng hàm getFullName của object teacher nhưng this tham chiếu tới student
// console.log(getStudentName());
// get DOM element tiện hơn khi gán vào biến $
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// console.log($('h1'));

// bài tổng hợp kiến thức QUẢN LÝ Ô TÔ 
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// const app = (() => { 
//     const cars = ['Harley Davison']; // mảng cars để lưu xe
//     const root = $('#root');
//     const input = $('#input');
//     const submit = $('#submit');
//     return { // function IIFE sẽ trả về 1 object có các phương thước cho biến app(global)
//         add(car){
//             cars.push(car);
//         },
//         delete(index){
//             cars.splice(index, 1);
//         },
//         render(){
//             const html = cars.map((car, index) => {
//                 return `
//                     <li>
//                         ${car}
//                         <button class="delete" data-index="${index}">x</button>
//                     </li>`;
//             }).join('');
            
//             root.innerHTML = html;

//         },
//         handleDelete(e){
//             const deleteBtn = e.target.closest('.delete'); // click đúng vào nút class delete
//             if(deleteBtn){ // nếu click đúng mới thực hiện
//                 const indexElement = deleteBtn.dataset.index // dataset.index, index là mình tên mình đặt cho data ở element
//                 this.delete(indexElement);
//                 this.render();
//             }
//         },
//         init(){ // hàm init là khởi tạo, lắng nghe xự kiện và thêm dữ liệu
//             // handle DOM events
//             submit.onclick = () => { // dùng arrow function để không có context và this lúc này sẽ nhảy ra ngoài và tham chiếu đến biến app, nếu dùng function bình thường thì this sẽ tham chiếu tới element submit và sẽ bị lỗi
//                 const car = input.value; // lấy dữ liệu từ input
//                 this.add(car); // tương đuơng app.add(car)
//                 this.render(); // tương đương app.render()
//                 input.value = '';
//                 input.focus();
//             }
//             root.onclick = this.handleDelete.bind(this); // bind(this) là this sẽ tham chiếu tới biến app(global), nếu không dùng bind() this sẽ tham chiếu tới root và sẽ bị lỗi 
//             this.render(); 
//         }
//     }
// })();
// app.init();

// call
// // dùng call để gọi hàm như bình thường (biết thêm thôi chứ ít ai dùng)
// function logger(){
//     console.log('hello');
// }
//  logger.call();
// // mượn hàm (function borrowing)
// const teacher = {
//     firstName: 'Son',
//     lastName: 'Dang'
// }
// const me = {
//     firstName: 'Thanh',
//     lastName: 'Toan',
//     getFullName(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// me.getFullName.call(teacher);
// // kế thừa (extends)
// function Animal(name, weight){
//     this.name = name;
//     this.weight = weight;
// }
// function Chicken(name, weight, legs){
//     Animal.call(this, name, weight); // this tham chiếu tới biến thanhToan
//     this.legs = legs;
// }
// const thanhToan = new Chicken('Thanh Toàn', 55, 2);
// console.log(thanhToan);

// apply
// // mượn hàm(borrowing)
// const teacher = {
//     firstName: 'Son',
//     lastName: 'Dang'
// }
// const me = {
//     firstName: 'Thanh',
//     lastName: 'Toan',
//     getFullName(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// me.getFullName.apply(teacher);
// // thừa kế(extends)
// function Animal(name, weight){
//     this.name = name;
//     this.weight = weight;
// }
// function Chicken(name, weight, legs){
//     Animal.apply(this, [name, weight]); // this tham chiếu tới biến thanhToan
//     this.legs = legs;
// }
// const thanhToan = new Chicken('Thanh Toàn', 55, 2);
// console.log(thanhToan);
