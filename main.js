// --function--

//ex1:
//var isConfirm = confirm('Message!');
// console.log(isConfirm); // ok thì true, cancel thì false

//ex2:
// function cong(a, b) {
//     return a + b;
// }
// console.log(cong(11, 7));

//ex3: hàm trong hàm
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

//ex: arrow function(have paramater)
// var printYourName = (name) => {
//     console.log('hello', name);
// }
// printYourName('thanh toan');
//ex: arrow function(no paramater)
// var printHello = _ =>{
//     console.log('hello world');
// }
// printHello();

//ex: IIFE function (sau khi định nghĩa xong là chạy liền)
// (function (name) {
//   console.log("Hello", name);
// })("thanh toan");

//ex: closures function (hàm lồng nhau)
// function f1() {
//   var N = 0; // N luon duoc khoi tao khoi ham f1 duoc thuc thi
//   console.log(N);
//   function f2() {
//     // Ham f2
//     N += 1; // cong don cho bien N
//     console.log("-->>", N);
//   }

//   return f2;
// }
// var result = f1();
// result(); // Chay lan 1
// result(); // Chay lan 2
// result(); // Chay lan 3

//ex: arguments
// function printYourName() {
//   console.log(arguments);
// }
// printYourName("thanh toan", "nam can tho");

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
// function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;
// }
// User.prototype.className = "F8"; // tạo thêm thuộc tính bên ngoài constructor dùng prototype và các object điều sẽ được thừa hưởng
// User.prototype.getLastName = function () {
//   // tạo thêm phương thức bên ngoài constructor dùng prototype và các object điều sẽ được thừa hưởng
//   return this.lastName;
// };
// var admin = new User("Thanh", "Toan", "avatar1");
// var client = new User("Minh", "Hung", "avatar2");
// console.log(admin, client); // className = 'F8' và getLastName nằm trong prototype của dev tool
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

//ex19: loop while
// var i = 0;
// while(i < 10){
//     i++;
//     console.log(i);
// }

//ex20: loop do/while
// var i = 0;
// do {
//     i++;
//     console.log(i);
// } while(i < 10);

//ex21: break & continue loop
// ex1:
// for(var i = 0; i < 10 ; i++){
//     if(i >= 5){
//         break;
//     }
//     console.log(i);
// }
// ex2:
// for(var i = 0; i < 10 ; i++){
//     if(i % 2 === 1){
//         continue;
//     }
//     console.log(i);
// }

//ex22: nested loop: vòng lặp lòng nhau
// var array = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// for(var i = 0 ; i < array.length ; i++){
//     for(var j = 0 ; j < array[i].length ; j++){
//         console.log(array[i][j])
//     }
// }

//ex23: array method: forEach();
// ex1:
// var array = ['HTML', 'CSS', 'JS'];
// array.forEach(function(arrayElement, index){
//    console.log(arrayElement, index);
// });
// ex2:
// var array = [1,2,3,4,5];
// var sum = 0;
// array.forEach(function(element){
//     sum += element;
// });
// console.log(sum);

//ex24: array method: every();
// var array = [1,2,3,4,5];
// var checkPositiveNumber = array.every(function(element){
//     return element >= 0;
// });
// console.log(checkPositiveNumber);

//ex25: array method: some();
// var array = [1,2,'toan',4,5];
// var checkString = array.some(function(element){
//     return element === 'toan';
// });
// console.log(checkString);

//ex26: array method: fine();
// ex1:
// var array = [1,2,'toan',4,5];
// var find = array.find(function(element){
//     return element === 'toan';
// });
// console.log(find);
// ex2:
// var array = [
//     {
//         id: 1,
//         name: 'toan'
//     },
//     {
//         id: 2,
//         name: 'tonii'
//     }
// ];
// var find = array.find(function(element){
//     return element.id === 2;
// })
// console.log(find);

//ex27: array method: filter();
// var array = [
//     {
//         id: 1,
//         name: 'toan'
//     },
//     {
//         id: 2,
//         name: 'tonii'
//     },
//     {
//         id: 3,
//         name: 'toan'
//     }
// ];
// var listFind = array.filter(function(element){
//     return element.name === 'toan';
// })
// console.log(listFind);

//ex28: array method: map()
// var languages = [
//     {
//         id: 1,
//         name: 'HTML',
//     },
//     {
//         id: 2,
//         name: 'CSS',
//     },
//     {
//         id: 3,
//         name: 'JS',
//     },
//     {
//         id: 4,
//         name: 'PHP',
//     },
// ];
// var newLanguages = languages.map(function(element, index){ //newLanguages mới sẽ nhận được toàn bộ element của laguages và có thêm các key và value mới của từng element trong mảng
//     return {
//         id: element.id,
//         name: element.name,
//         type: 'built webisite', // thêm key và value mới cho mỗi element
//         stringId: 'DNC ' + element.id, // thêm key và value mới cho mỗi element
//         index: index
//     };z
// });
// console.log(newLanguages);

//ex29: array method: reduce()
// tính tổng các coin có trong mảng courses
// var courses = [
//     {
//         id: 1,
//         name: 'HTML',
//         coin: 100,
//     },
//     {
//         id: 2,
//         name: 'CSS',
//         coin: 200,
//     },
//     {
//         id: 3,
//         name: 'JS',
//         coin: 300,
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400,
//     }
// ];
// var totalCoin = courses.reduce(function(total, currentValue){
//     return total + currentValue.coin;
// }, 0); // có 2 tham số trong hàm reduce: 1 function, 1 giá trị khởi tạo. trong function có tối đa 4 tham số (lên mạng xem), nhưng ở đây mình chỉ dùng 2 tham số: 1 biến khởi tạo (biến này được nhận từ tham số thứ 2 của hàm reduce), 1 biến để lấy giá trị trong từng element của mảng courses
// console.log(totalCoin);

//ex30: array method: reduce() chuyên sâu hơn chút
// ex1: tính tổng các element trong mảng không cần tham số initial value
// var numbers = [1,2,3,4,5];
// var totalNumber = numbers.reduce(function(total, number){
//     return total + number;
// }, 0);
// console.log(totalNumber);
// //--> các mảng flat (mảng phẳng, chỉ có 1 cấp) và cùng kiểu dữ liệu thì có thể không dùng initial value còn lại thì nên dùng initial value
//
// ex2: flat mảng từ depth mảng (làm phẳng mảng(mảng 1 cấp) từ 1 mảng sâu(mảng có nhiều cấp))
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9], 10];
// var flatArray = depthArray.reduce(function(flat, depthArrayItem){
//     return flat.concat(depthArrayItem);
// }, []) // initital value là 1 mảng trống
// console.log(flatArray);
//
// ex3: lấy ra các courses đưa vào 1 mảng mới
// var topics = [
//     {
//         topic: 'front-end',
//         courses:[
//             {
//                 id: 1,
//                 title: 'HTML, CSS'
//             },
//             {
//                 id: 2,
//                 title: 'JS'
//             }
//         ]
//     },
//     {
//         topic: 'back-end',
//         courses:[
//             {
//                 id: 1,
//                 title: 'PHP'
//             },
//             {
//                 id: 2,
//                 title: 'NodeJS'
//             }
//         ]
//     }
// ];
// var newCourses = topics.reduce(function(courses, topic){
//     return courses.concat(topic.courses);
// }, []); // trả về 1 mảng các khoá học
// console.log(newCourses);

//ex31: từ một mảnh cấp 2 thành một object như kỳ vọng
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// function arrToObj(arr) {
//   return arr.reduce(function (result, a) {
//     result[a[0]] = a[1];
//     return result;
//   }, {});
// }
// console.log(arrToObj(arr)); // kỳ vọng: { name: 'Sơn Đặng', age: 18 }
