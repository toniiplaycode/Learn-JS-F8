// ex: scope var / let, const
// if(true){
//     var test = 'thanh toan';
// }
// console.log(test); // vì dùng var nên có thể gọi biến ngoài code block, còn let, const thì không 
//
// ex: const
// if(true){
//     const a = 'thanh toan';
//     if(true){
//         const a = 'tonii';
//         console.log(a);
//     }
// } // biến const a được khai báo ở 2 block nên không bị lỗi, nếu biến const a khai báo chung 1 block thì sẽ bị lỗi liền
//
// ex2: const (biến object)
// const a = {
//     name : 'thanh toan'
// }
// a.name = 'tonii'; // vì là thuộc tính nên gán lại được
// // a = 123; // như thế này là sai, vì a được gán lại, chứ không phải thuộc
// console.log(a);
//
// ex3: const (biến mảng)
// const b = [1,2,3];
// b[0] = 7; // vì b[0] là element của a nên gán lại được
// // b = 123; // như thế này là sai, vì b được gán lại, chứ không phải element 
// console.log(b);
//
// ex: local scope (function)
// function logger(){
//     var name = 'thanh toan';
//     const age = 18;
//     let address = 'Can Tho';
//     console.log(name, age, address);
// }
// logger();
// console.log(name, age, address); // không thể gọi các biến này bên ngoài function được(local scope)
//

// ex: class
// class User {
//     constructor(name, address){
//         this.name = name;
//         this.address = address;
//     }
//     getName(){
//         return this.name;
//     }
//     getAddress(){
//         return this.address;
//     }
// }
// var user1 = new User('thanh toan', 'can tho');
// var user2 = new User('le minh hung', 'HCM');
// console.log(user1, user2);
// console.log(user1.getName(), user1.getAddress());
// console.log(user2.getName(), user2.getAddress());
// ex: default paramater
// function showDefaultParamater(log = 'gia tri mac dinh'){
//     console.log(log);
// }
// showDefaultParamater();
// ex: Enhanced object literals
// //định nghĩa key, value của 1 object ngắn gọn 
// var name = 'thanh toan';
// var address = 'can tho';
// var user = {
//     name,
//     address
// }
// console.log(user);
// //định nhĩa method của 1 object ngắn ngọn
// var name = 'thanh toan';
// var address = 'can tho';
// var user = {
//     name,
//     address,
//     getName(){
//         return this.name
//     }
// }
// console.log(user.getName());
// //định nghĩa key của object dưới dạng biến(dạng này ít dùng)
// var userName = 'name';
// var userAddress = 'address';
// var user = {
//     [userName]: 'thanh toan',
//     [userAddress]: 'can tho'
// }
// console.log(user);
// ex: destructuring(mảng)
// var array = [1,2,3,4];
// var [a,b,c,d] =  array; // khai báo biến [<các biến được lấy từ array>], đây là cách dùng destructuring
// console.log(a,b,c,d);
// var array2 = [1,2,3];
// var [a, ,c] = array2;
// console.log(a, c); 
// ex: destructuring(object)
// var user = {
//     name: 'thanh toan',
//     address: 'can tho',
//     phone: '0123456'
// }
// var {name, address, phone} = user; // các tên biến phải giống tên key của object
// console.log(name, address, phone); 
// ex: destructuring trong object có object
// var user = {
//     name: 'thanh toan',
//     address: 'can tho',
//     phone: '0123456',
//     children: {
//         name: 'thanh long'
//     }
// }
// var {name: parentName, children: { name: childName }} = user; // vì 2 biến name bị trùng tên nên ta đặt tên cho từng biến
// console.log(parentName, childName);
// ex: default destructuring
// var user = {
//     name: 'thanh toan',
//     address: 'can tho',
//     phone: '0123456'
// }
// var {name, address, phone, dateOfBirth = '2003'} = user;
// console.log(name, address, phone, dateOfBirth);
// ex: rest paramaters(mảng)
// var array = [1,2,3,4];
// var [a, b, ...rest] = array;
// console.log(a, b);
// console.log(rest);
// ex: rest paramater(object)
// var user = {
//     name: 'thanh toan',
//     address: 'can tho',
//     phone: '0123456'
// }
// var {name, ...rest} = user;
// console.log(name);
// console.log(rest);
// ex: rest paramaters(function) dùng rest là tham số của 1 function (cơ chế giống giống arguments)
// function restFunciton(...params){  // chưa lấy ra và xoá phần tử nào 
//     console.log(params);
// }
// restFunciton(1, 2, 3, 4, 5, 'thanh toan', {id:1, name: 'tonii'}); // truyền không giới hạn đối số
// function restFunciton2(a, b, ...params){ // lấy ra và xoá 2 phần tử đầu
//     console.log(a, b);
//     console.log(params);
// }
// restFunciton2(1, 2, 3, 4, 5, 'thanh toan', {id:1, name: 'tonii'});
//ex: destructuring & rest truyền vào tham số của 1 function (mảng)
// function logger([a, b, ...rest]){
//     console.log(a, b);
//     console.log(rest);
// }   
// logger([1, 2, 3, 4, 5, 6]);
//ex: destructuring & rest truyền vào tham số của 1 function (object)
// function logger({name, address, ...rest}){
//     console.log(name, address);
//     console.log(rest);
// }
// logger({
//     name: 'thanh toan',
//     address: 'can tho',
//     phone: '0123456'
// });
// ex: spread (nối 2 mảng cơ chế giống concat())
// var array1 = [1, 2, 3]; 
// var array2 = [4, 5, 6]; 
// var array3 = [...array1, ...array2];
// console.log(array3);
// ex: spread (nối 2 object)
// var obj1 = {
//     name: 'thanh toan'
// }
// var obj2 = {
//     address: 'can tho'
// }
// var obj3 = {
//     ...obj1,
//     ...obj2
// }
// console.log(obj3);
// ex: spread là 1 đối số của 1 hàm (mảng) 
// var arrayLanguages = ['HTML', 'CSS', 'JS'];
// function languages(...rest){ // ở đối số thì là spreak, còn ở tham số là rest
//     // rest là dạng mảng nên có thể dùng forOf
//     for (const language of rest) {
//         console.log(language);
//     }
// }
// languages(...arrayLanguages); // spread sẽ giải mảng arrayLanguages thành: 'HTMl', 'CSS', 'JS' (3 đối số)

// ex: tagged template
// var logger = (x, y, z) => { // các tham số: x là array string, y là expression1, z là expression2
//     console.log(x); 
//     console.log(y);
//     console.log(z);
// }
// var a = 1;
// var b = 2;
// var result = logger`day la 2 con so: ${a} ${b}`;
//ex: tagged template cộng 2 số (biểu thức nằm ở giữa giữa, không nằm ở đầu hoặc cuối)
// var math = ([x, y], calculation) => calculation(Number(x), Number(y));
// var plus = (x, y) => x + y;
// var result = math`11 ${plus} 7`;
// console.log(result); // --> 18
//ex: dùng reduce bằng arrow function trong ES6
// var array = [1, 2, 3, 4, 5];
// var sumElement  = array.reduce((total, element) => total + element, 0);
// console.log(sumElement);
//ex: tagged template kết hợp reduce (arrow function) để render hightlight(màu cam) các expression, xem video 192 của F8
function hightlight([first, ...strings], ...values){  // dùng destructuring & rest để nhận 2 tham số
    console.log(first);
    console.log(strings);
    console.log(values);
    return values.reduce(
        (accumulator, currentElement) => [...accumulator, `<span style="color: orange">${currentElement}</span>`, strings.shift()],
        [first]
    ).join(''); //nó là mảng. muốn thành chuỗi thì phải join('');
}
var brand = 'F8';
var course = 'Javascript';
var html = hightlight`Học lập trình ${course} tại ${brand} !`; // trong template string này gồm: 1 array sting (['học lập trình', 'tại', '!']), 1 mảng chứa(dùng rest) 2 biến nội suy: ${course}, ${brand}. --> hàm hightlight sẽ nhận được 2 đối số
console.log(html);
// dùng DOM để show
var divTaggedTemplate = document.querySelector('#show-hightlight-tagged-template');
divTaggedTemplate.innerHTML = html;

//ex: optional chaining (element array)
// var array = [1, , 3, 4];
// if(array?.[1]){ // vì array[1] không có nên nó sẽ không console.log
//     console.log(array[1]);
// }
//ex: optional chaining (object)
// var obj = {
//     name: 'Alice',
//     cat: {
//         name: 'meo meo'
//     }
// }
// if(obj?.cat?.name){ // nếu không có key là cat trong object thì cũng không báo lỗi
//     console.log(obj.cat.name);
// }
//ex: optional chaining (function)
// var obj = {
//     func(){
//         console.log('have func() !');
//     }
// }
// obj.func?.();