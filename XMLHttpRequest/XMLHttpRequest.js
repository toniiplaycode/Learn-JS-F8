function showFakeAPI(){
    var request = new XMLHttpRequest();
    request.open("get", "getData.txt", true); // phương thức open để cấu hình cho request, tham số thứ 3 là true (không đồng bộ), falsew (đồng bộ) không nên sử dụng, vì khi server bị chậm thì cả trang web sẽ bị treo
    request.onreadystatechange = function(){ // 1 Event, hàm sẽ được gọi khi thuộc tính readyState thay đổi
        if(this.readyState === 4 && this.status === 200){
            document.querySelector('.result').innerHTML = this.responseText; // responseText trả về dữ liệu dạng chuỗi
        }
    }
    request.send(); // gửi request tới server    
};


