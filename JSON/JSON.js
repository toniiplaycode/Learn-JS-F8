// //JSON
// // --- các dạng chuỗi của JSON ---
// //number
// var json1 = '1';
// //string
// var json2 = '"tonii"'; // dạng chuỗi thì được để trong dấu nháy kép "<chuỗi>"
// //null
// var json3 = 'null';
// //boolean
// var json4 = 'true';
// //boolean
// var json5 = 'false';
// //array
// var json6 = '["HTML", "CSS", "JS"]'; // các element trong mảng dạng chuỗi thì được để trong dấu nháy kép "<chuỗi>"
// //object
// var json7 = '{"name": "thanh toan", "age": 19}'; // các key trong object dạng JSON cũng là chuỗi nên phải để trong dấu nháy kép "<key>" và value cũng thế,  trừ value ở dạng number thì không cần dấu nháy kép
// // in ra các json
// console.log(json1);
// console.log(json2);
// console.log(json3);
// console.log(json4);
// console.log(json5);
// console.log(json6);
// console.log(json7);
// // parse (từ dạng chuỗi JSON -> kiểu dữ liệu JS)
// console.log(JSON.parse(json1));
// console.log(JSON.parse(json2));
// console.log(JSON.parse(json3));
// console.log(JSON.parse(json4));
// console.log(JSON.parse(json5));
// console.log(JSON.parse(json6));
// console.log(JSON.parse(json7));
// // --- các kiểu dữ liệu của JS ---
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
// //stringify (từ kiểu dữ liệu JS -> dạng chuỗi JSON);
// console.log(JSON.stringify(jsType1));
// console.log(JSON.stringify(jsType2));
// console.log(JSON.stringify(jsType3));
// console.log(JSON.stringify(jsType4));
// console.log(JSON.stringify(jsType5));
// console.log(JSON.stringify(jsType6));
// console.log(JSON.stringify(jsType7));