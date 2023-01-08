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
// var date = new Date();
// console.log(date);
// + date.getFullYear(); // lấy năm;
// + date.getMonth() + 1; // lấy tháng;
// + date.getDate(); // lấy ngày;
// + date.getHours(); // lấy giờ;
// + date.getMinutes(); // lấy phút;
// + date.getSeconds(); // lấy giây;
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());

//ex11: Math object
// var PI = Math.PI;
// console.log(PI);
// console.log(Math.round(1.5)); // làm tròn lên 2
// console.log(Math.abs(-117));
// console.log(Math.ceil(1.00000001));
// console.log(Math.floor(1.99999));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10)); // random từ 0-10
// var nhoNhat = [1, 2, 3, 4, 5, 6];
// console.log(Math.min(...nhoNhat)); // dùng dấu 3 chấm mới truyền được mảng
// var lonNhat = [1, 2, 3, 4, 5, 6];
// console.log(Math.max(...lonNhat)); // dùng dấu 3 chấm mới truyền được mảng

//ex11: Math object : trả về một số ngẫu nhiên có trong mảng
// function getRandomItem(array) {
//     return array[Math.floor(Math.random() * 5)];
// }
// var array = [1,2,3,4,5];
// console.log(getRandomItem(array));

//ex13: ternary operator
// var n = 8;
// var x;
// x = (n > 10) ? "n lớn hơn 10" : "n nhỏ hơn 10";
// console.log(x);

//ex13: loop for
// for(var i = 0; i <= 10; i++){
//     console.log(i);
// }

//ex14: loop for/in: in ra key của 1 object
// var myInfo = {
//     name: 'Thanh Toan',
//     age: 19,
//     address: 'Can Tho'
// }
// for(var key in myInfo){
//     console.log(key);
// }

//ex14: loop for/in: in ra các value của 1 object thông qua key
// var myInfo = {
//     name: 'Thanh Toan',
//     age: 19,
//     address: 'Can Tho'
// }
// for(var key in myInfo){
//     console.log(myInfo[key]);
// }

//ex15: loop for/in: in ra index của 1 mảng
// var languages = [
//         'C++',
//         'JS',
//         'PHP'
// ];
// for(var index in languages){
//     console.log(index);
// }

// //ex16: loop for/in: in ra các element của 1 mảng thông qua index
// var languages = [
//     'C++',
//     'JS',
//     'PHP'
// ]
// for(var index in languages){
//     console.log(languages[index]);
// }

//ex16: loop for/of: in ra từng element của 1 mảng
// var languages = [
//     'C++',
//     'JS',
//     'PHP'
// ];
// for(var element of languages){
// console.log(element);
// }

//ex17: loop for/of: in ra từng chữ cái trong 1 chuỗi
// var name = "lethanhtoan";
// for(var value of name){
//     console.log(value);
// }

//ex18: loop for/of: in ra từng value của 1 object
// var myInfo = {
//     name: 'Thanh Toan',
//     age: 19
// }
// var valueMyInfo = Object.values(myInfo); // lấy từng value trong object
// for(var value of valueMyInfo){
//     console.log(value);
// }