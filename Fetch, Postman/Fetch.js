// ex1: dùng Fetch để lấy dữ liệu dạng JSON -> JS types. sau đó hiển thị trên HTML
// var postAPI = 'https://jsonplaceholder.typicode.com/posts' // URL này được lấy từ web placeholder rest API
// fetch(postAPI)
//     .then(function(response){ // .then() thứ nhất trả về 1 promise (được JSON.parse) và .then() thứ 2 sẽ nhận được promise đó
//         return response.json();
//     })
//     .then(function(posts){ // .then() thứ 2 sẽ nhận được JS types, vì .then() thứ nhất đã parse sẵn ở return response.json()
//         var html = posts.map(function(post){
//             return `<h2>${post.title}</h2>
//                     <p>${post.body}</p>`;
//         });
//         var showHtml = html.join('');
//         document.querySelector('.show-fetch').innerHTML = showHtml;
//     })
//     .catch(function(){
//         console.log("Lỗi mạng hoặc sai URL"); // nếu mạng lỗi hoặc URL sai thì sẽ nhảy vào .catch()
//     })
//     .finally(function(){
//         console.log('DONE!');
//     })
// 
// ex2: lấy dữ liệu từ JSON server
var userAPI = 'http://localhost:3000/user';
fetch(userAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(users){
        console.log(users);
    })