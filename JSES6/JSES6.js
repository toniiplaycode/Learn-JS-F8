// ex: scope var / let, const
// if(true){
//     let test = 'thanh toan';
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
// ex2: const (biến objexct)
// const a = {
//     name : 'thanh toan'
// }
// a.name = 'tonii'; // vì là thuộc tính nên gán lại được
// // a = 123; // như thế này là sai, vì a được gán lại, chứ không phải thuộc
// console.log(a);
// ex3: const (biến mảng)
// const b = [1,2,3];
// b[0] = 7; // vì b[0] là element của a nên gán lại được
// // b = 123; // như thế này là sai, vì b được gán lại, chứ không phải element 
// console.log(b);