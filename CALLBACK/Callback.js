//ex1: Callback
// function myFunction(param) {
//   param(123);
// }
// function myCallback(value) {
//   console.log("value : ", value);
// }
// myFunction(myCallback);

//ex2: Callback + - * /
// function sumCb(a, b) {
//   return a + b;
// }

// function subCb(a, b) {
//   return a - b;
// }

// function multiCb(a, b) {
//   return a * b;
// }

// function divCb(a, b) {
//   return a / b;
// }

// function caculate(a, b, cb) {//Callback
//   return cb(a, b);
// }
// // Expected results
// // caculate(1, 2, sumCb) // Output: 3
// // caculate(1, 2, subCb) // Output: -1
// // caculate(1, 2, multiCb) // Output: 2
// // caculate(3, 1, divCb) // Output: 3

//ex3: lấy các element trong mảng
// Array.prototype.map2 = function(callback) {
//     var output = [], arrayLength = this.length;
//     for(var i = 0; i < arrayLength ; i++) {
//         var result = callback(this[i]);
//         output.push(result);
//     }
//     return output;
// }
// var languages = ['HTML', 'CSS', 'JS'];
// var showLanguage = languages.map2(function(laguage){
//     return laguage;
// });
// console.log(showLanguage.join(' '));
//
//ex4: dùng callback để thực hiện ra kết quả như output 
// Array.prototype.myMap = function(cb) {
//     var output = [], arrayLength = this.length;
//     for(var i = 0; i < arrayLength; i++){
//         var result = cb(this[i], i);
//         output.push(result);
//     }
//     return output;
// }
// const numbers = [1, 2, 3];
// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]
// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

//ex5: callback forEach2();
// Array.prototype.forEach2 = function(callback){
//     for(var index in this){
//         var check = this.hasOwnProperty(index); // kiểm tra các element nằm trong mảng thì true, nếu element nằm trong prototype thì false
//         if(check){
//             callback(this[index], index, this)
//         }        
//     }
// }
// var languages = ['HTML', 'CSS', 'JS'];
// languages.forEach2(function(laguage, index, array){
//     console.log(laguage, index, array);
// });

//ex6: callback filter2()
// Array.prototype.filter2 = function(callback){ 
//     var output = [];
//     for(var index in this){
//         var check = this.hasOwnProperty(index);
//         if(check){
//           var result = callback(this[index], index, this);
//           if(result){
//             output.push(this[index]);
//           }
//         }
//     }
//     return output;
// }
// var info = [
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
//         name: 'playps4'
//     }
// ];
// var filterArray = info.filter2(function(element, index, array){
//     return element.id > 1;
// });
// console.log(filterArray);