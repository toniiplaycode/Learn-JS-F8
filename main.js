// --function--

//ex1: 
//var isConfirm = confirm('Message!');
// console.log(isConfirm); // ok thì true, cancel thì false

//ex2:
// function cong(a, b) {
//     return a + b;
// }
// console.log(cong(11, 7));

//ex3: hàm trong hàmP
// function Message(){
//     function sayHello(){
//         console.log('hello');
//     }
//     sayHello();
// }
// Message();

//ex4:
// var sayHello = function(){
//     console.log('hello');
// }
// sayHello();

//ex5: hoisting dùng được cho declaration function
// sayHello();
// function sayHello(){
//     console.log('hello');
// }

//ex6: object
// var myInfo = {
//     name: 'Thanh Toan',
//     age: '19',
//     address: 'Can Tho'
// }
// myInfo.email = 'toan@gmail.com'; // thêm key và value từ object đã có
// myInfo['my-email'] = 'toan@gmail.com'; // nếu tên key có ký tự đặc biệt thì dùng cách này
// delete myInfo.age; // xoá key
// console.log(myInfo);
// console.log(myInfo.name); // lấy value thông qua key
// console.log(myInfo['my-email']); // nếu key có ký tự đặc biệt

//ex7: object có value là function
// var myInfo = {
//     name: 'Thanh Toan',
//     age: '19',
//     address: 'Can Tho',
//     getName: function(){
//         return this.name;
//     }
// }
// console.log(myInfo.getName()); //gọi function trong object myInfo

// //ex8: object constructor
// function User(firstName, lastName, avatar){ // tên object constructor phải viết hoa chữ cái đầu (quy ước)
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getFullName = function() {
//         return this.firstName + this.lastName;
//     }
// };
// var admin = new User('Thanh', 'Toan', 'avatar1');
// var client =  new User('Minh', 'Hung', 'avatar2');
// admin.age = 20; // thêm thuộc tính riêng của admin
// client.address = 'Ho Chi Minh'; // thêm thuộc tính riêng của client
// delete admin.avatar // xoá thuộc tính avatar của admin
// console.log(admin, client);
// console.log(admin.getFullName(), client.getFullName())

//ex9: objectt prototype
// function User(firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// };
// User.prototype.className = 'F8'; // tạo thêm thuộc tính bên ngoài constructor dùng prototype và các object điều sẽ được thừa hưởng
// User.prototype.getLastName = function() { // tạo thêm phương thức bên ngoài constructor dùng prototype và các object điều sẽ được thừa hưởng
//     return this.lastName;
// }
// var admin = new User('Thanh', 'Toan', 'avatar1');
// var client =  new User('Minh', 'Hung', 'avatar2');
// console.log(admin, client); // className = 'F8' nằm trong prototype của dev tool
// console.log(admin.getLastName(), client.getLastName());

//ex10: object Date
var date = new Date();
console.log(date);
+ date.getFullYear(); // lấy năm;
+ date.getMonth() + 1; // lấy tháng;
+ date.getDate(); // lấy ngày;
+ date.getHours(); // lấy giờ;
+ date.getMinutes(); // lấy phút;
+ date.getSeconds(); // lấy giây;
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());