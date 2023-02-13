//local storage
// + setItem()
// lưu một key-value đơn giản dạng chuỗi
// window.localStorage.setItem('name', 'Thanh Toan');
// // lưu 1 biến object (dùng JSON)
// const student = {
//     name: 'Tonii',
//     age: 20
// }
// window.localStorage.setItem('user', JSON.stringify(student));
// // lưu 1 mảng  (dùng JSON)
// const arr = [1, 2, 3, 4, 5];
// window.localStorage.setItem('number', JSON.stringify(arr));
// + getItem() lấy các value vừa setItem() ở trên
// var getName = window.localStorage.getItem('name');
// console.log(getName);
// const getStudent = JSON.parse(window.localStorage.getItem('user'));
// console.log(getStudent);
// var getArr = JSON.parse(window.localStorage.getItem('number'));
// console.log(getArr);
// + removeItem() xoá các object localStorage ở trên thông qua key
// window.localStorage.removeItem('name');
// window.localStorage.removeItem('user');
// window.localStorage.removeItem('number');
// + clear() xoá tất cả
// window.localStorage.clear();
// + key() dùng để lấy ra từng key của object localStorage thông qua index
// console.log(window.localStorage);
// for(var i = 0 ; i < window.localStorage.length ; i++){
//     console.log(window.localStorage.key(i));
// }
