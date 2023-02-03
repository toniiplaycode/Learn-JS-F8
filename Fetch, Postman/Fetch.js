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
// var userAPI = 'http://localhost:3000/user';
// fetch(userAPI)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(users){
//         console.log(users);
//     })
//
// ví dụ thêm, sửa, xoá API
var userAPI = 'http://localhost:3000/user';
function start(){ // hàm start để gọi các hàm con (hàm trong hàm)
    getUsers(renderUsers); // khi get dữ liệu xong thì render luôn
    handleCreateForm(); 
}
start(); // hàm start sẽ được chạy khi mở trình duyệt
function getUsers(callback) { // hàm getUsers để lấy dữ liệu từ API
    fetch(userAPI)
        .then(function(response){
            return response.json();
        })
        .then(callback); // dùng callback cho oai hehe ^^
        /* thay vì .then(function(users){
            console.log(users);
        })  như này thì mình có thể dùng callback như trên  */
}
function renderUsers(users){ // hàm renderUsers để show các dữ liệu được lấy từ API lên HTML
    console.log(users);
    var listUsersBlock = document.querySelector('#list-users');
    var htmls = users.map(function(user){
        return `<li>
                    <h3>Name: ${user.name}</h3>
                    <p>ID: ${user.id}</p>
                    <p>Address: ${user.address}</p>
                </li>`;
    });
    return listUsersBlock.innerHTML = htmls.join(' ');
}
function handleCreateForm(){ // hàm xử lý form để lấy được value của input
    var createBtn = document.querySelector('#btn-create');
    createBtn.onclick = function(){ // khi click vào nút create thì sẽ lấy được value từ 2 input
        var name = document.querySelector('input[name="name"]').value;
        var address = document.querySelector('input[name="address"]').value;
        var formData = {
            name: name, // cái key phải giống với key trên API
            address: address // cái key phải giống với key trên API
        };
        createUser(formData, function(){
            getUsers(renderUsers);
        });  
    }
}
// sau khi lấy được value từ 2 input, sau đó sẽ gửi yêu cầu method POST để thêm được dữ liệu 
function createUser(data, callback){ // hàm createUsers để gửi yêu cầu thêm dữ liệu, tham số data truyền vào dữ liệu sẽ thêm, callback để sau khi dữ liệu đã được thêm thì GET dữ liệu đó luôn 
    var options = {  // mấy cái trong object này là làm theo video 179 của F8
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(userAPI, options) // fetch bình thường nếu 1 tham số thì method mặc định là GET, nếu có thêm tham số thứ 2 (là 1 object) thì method là: POST, PUT/PATCH, DELETE
        .then(function(response){
           return response.json();
        })
        .then(callback);
}