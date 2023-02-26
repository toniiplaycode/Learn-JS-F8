// // dùng XMLHttpRequest
// function getToDos(id){ // hàm getToDos trả về 1 promise
//     return new Promise((resolve, reject) => {
//         var request = new XMLHttpRequest(); // tạo đối tượng XMLHttpRequest
//         request.onreadystatechange = function(){
//             if(this.readyState === 4 && this.status === 200){ // promise trả về resolve(thành công)
//                 const data = JSON.parse(this.responseText); // chuyển về dạng dữ liệu của JS
//                 resolve(data);
//             }
            
//             if(this.readyState === 4 && this.status !== 200){ // promise trả về reject(thất bại)
//                 reject('something wrongs with id: ' + id); // lỗi ở id nào thì nó sẽ báo ở id đó
//             }
//         };
        
//         request.open("get", `https://jsonplaceholder.typicode.com/todos/${id}`, true); // cấu hình request
//         request.send(); // gửi request
//     }) 
// }

// // dùng Promise thuần
// getToDos(1)
//     .then(data1 => {
//         console.log('get data: ', data1);
//         return getToDos(2);
//     })
//     .then(data2 => {
//         console.log('get data: ', data2); 
//         return getToDos(3);
//     })
//     .then(data3 => {
//         console.log('get data: ', data3);
//     })
//     .catch(err => {
//         console.log('error: ', err);
//     })

// // dùng fetch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(todo){
//         console.log(todo);
//     })

// // dùng async, await
// const getNewToDo = async (id) => {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     let data = await response.json();
//     // console.log(data); // data trong hàm async là dữ liệu JS
//     return data; // vì đây là hàm dạng async nên khi return ra ngoài thì data sẽ thành 1 promise
// }
// // console.log(getNewToDo()); // console.log tưởng ra là một dữ liệu JS, nhưng thật chất là 1 promise
// getNewToDo(1)
//     .then(function(data){
//         console.log(data);
//     })

// // dùng throw new Error để promise trả về reject
// const getNewToDo = async (id) => {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     if(response.status !== 200){ // nếu lột vào if này thì trả về reject 
//         throw new Error('Somethings wrongs with status code: ' + response.status); 
//     }
//     let data = await response.json();
//     // console.log(data); // data trong hàm async là dữ liệu JS
//     return data; // vì đây là hàm dạng async nên khi return ra ngoài thì data sẽ thành 1 promise, trả về resolve
// }
// // console.log(getNewToDo()); // console.log tưởng ra là một dữ liệu JS, nhưng thật chất là 1 promise
// getNewToDo('1abvcd') // truyền id lỗi, để catch có thể bắt lỗi
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log(err.message);
//     })

// // dùng try, catch kết hợp throw để bắt lỗi
const getNewToDo = async (id) => {
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if(response.status !== 200){
            throw new Error('Somethings wrongs with status code: ' + response.status); // ném lỗi xuống catch
        }
        let data = await response.json();
        // console.log(data); // data trong hàm async là dữ liệu JS
        return data; // vì đây là hàm dạng async nên khi return ra ngoài thì data sẽ thành 1 promise, trả về promise resolve
    }catch(err){
        throw err; // trả về promise reject
    }    
}
// console.log(getNewToDo()); // console.log tưởng ra là một dữ liệu JS, nhưng thật chất là 1 promise
getNewToDo('1abcd') // truyền id lỗi, để catch có thể bắt lỗi
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err.message);
    })