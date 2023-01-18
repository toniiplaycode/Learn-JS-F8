// //Promise
// //sync(đồng bộ)
//console.log(1);
//console.log(2);      
// //async(bất đồng bộ)
// setTimeout(function(){
//     console.log(1);
// });
// console.log(2);
// //vấn để khi sử dụng callbackL: callback hell (những việc được chạy tuần tự và callback sẽ lồng nhau)
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
// //ex1: dùng promise trả về resolve() hoặc trả về reject();
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
// //ex2: trả dữ liệu từ executor ra .then(function(){}) hoặc .catch(function(){})
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
//
// //CHAIN
// //ex1: promise có thể có nhiều .then(function(){}) hoặc .catch(function(){})
// var promise = new Promise(
//     function(resolve, reject){
//         resolve();
//     }
// )
// promise
//     .then(function(){
//         console.log(1);
//     })
//     .then(function(){
//         console.log(2);
//     })
//     .then(function(){
//         console.log(3);
//     })
//     .catch(function(){
//         console.log('loi!');
//     })
//     .finally(function(){
//         console.log('done!');
//     })
//
// //ex2: cái return của callback .then(function(){}) thứ nhất thì callback .then(function(){}) thứ 2 sẽ nhận được giá trị đó...
// var promise = new Promise(
//     function(resolve, reject){
//         resolve('console.log từ 1-2');
//     }
// )
// promise
//     .then(function(start){
//         console.log(start);
//         return 1;
//     })
//     .then(function(data){
//         console.log(data);
//         return 2;
//     })
//     .then(function(data){
//         console.log(data);
//         return 3;
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(){
//         console.log('loi!');
//     })
//     .finally(function(){
//         console.log('done!');
//     })
// //ex3: nếu .then(function(){}) thứ nhất return Promise thì thằng .then(function(){}) thứ 2 sẽ nhận được promise từ thằng .then(function(){}) thứ nhất
// var promise = new Promise(
//     function(resolve, reject){
//         resolve();
//     }
// )
// promise 
//     .then(function(){
//         return new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve([1,2,3,4]);
//             }, 2000);   
//         })
//     })
//     .then(function(array){
//         console.log(array);
//     })
//     .catch(function(){
//         console.log('loi!');
//     })
//     .finally(function(){
//         console.log('done!');
//     })
// //ex4: console.log từ 1->3 deplay 2s
// function sleep(millisecond){
//     return new Promise(function(resolve){
//         setTimeout(resolve, millisecond);
//     });
// }
// sleep(1000) // function sleep(1000) sẽ trả về 1 promise
//     .then(function(){
//         console.log(1);
//         return sleep(1000); // function sleep(1000) sẽ trả về 1 promise
//     })
//     .then(function(){
//         console.log(2);
//         return sleep(1000); // function sleep(1000) sẽ trả về 1 promise
//     })
//     .then(function(){
//         console.log(3);
//         return sleep(1000); // function sleep(1000) sẽ trả về 1 promise
//     })
//     .catch(function(){
//         console.log('loi!');
//     })
//     .finally(function(){
//         console.log('done!');
//     })
// //ex5: khi có một .then return promise reject() thì dừng ngay và .catch sẽ được tự động gọi
// var promise = new Promise(
//     function(resolve, reject){
//         resolve(1);
// })
// // promise 
//     .then(function(data){
//         console.log(data);
//         return(2);
//     }) 
//     .then(function(data){
//         console.log(data);
//         return new promise(function(resolve, reject){
//             reject(); // tới .then thứ 2 thì reject và ngưng luôn các .then còn lại 
//         });
//     }) 
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(){
//         console.log('loi!');
//     })
//     .finally(function(){
//         console.log('done!');
//     })