function getToDos(id){ // hàm getToDos trả về 1 promise
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest(); // tạo đối tượng XMLHttpRequest
        request.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){ // promise trả về resolve(thành công)
                const data = JSON.parse(this.responseText); // chuyển về dạng dữ liệu của JS
                resolve(data);
            }
            
            if(this.readyState === 4 && this.status !== 200){ // promise trả về reject(thất bại)
                reject('something wrongs with id: ' + id); // lỗi ở id nào thì nó sẽ báo ở id đó
            }
        };
        
        request.open("get", `https://jsonplaceholder.typicode.com/todos/${id}`, true); // cấu hình request
        request.send(); // gửi request
    }) 
}

getToDos(1)
    .then(data1 => {
        console.log('get data: ', data1);
        return getToDos(2);
    })
    .then(data2 => {
        console.log('get data: ', data2);
        return getToDos(3);
    })
    .then(data3 => {
        console.log('get data: ', data3);
    })

    .catch(err => {
        console.log('error: ', err);
    })
