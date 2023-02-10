// toast function
function toast({title, messege, type, duration = 3000}){ // duration mặc định là 3s nếu không truyền duration ở đối số
    const main = document.querySelector('#toast');

    // <div class="toast success">
    //     <div class="toast__icon success">
    //         <i class="fa-solid fa-circle-check"></i>
    //     </div>
    //     <div class="toast__body">
    //         <h3 class="toast__title">Success</h3>
    //         <p class="toast__msg">Bạn đã đăng nhập thành công tài khoản</p>
    //     </div>
    //     <div class="toast__close">
    //         <i class="fa-solid fa-xmark"></i>
    //     </div>
    // </div>

    if(main){ // check nếu có main mới xử lý 
        const toast = document.createElement('div'); // tạo ra 1 thẻ div

        //auto remove toast
        const autoRemoveID = setTimeout(() => { // khi setTimeout chạy nó sẽ trả về 1 ID
            main.removeChild(toast);
        }, duration + 1000); // duration(3s) là của deplay + 1s của fadeOut 

        // remove toast when clicked
        toast.onclick = (e) => { // khi click vào icon đóng sẽ remove toast
            // console.log(e.target); // e.target là khi ta click vào element nào thì nó sẽ trả về đúng element đó
            if(e.target.closest('.toast__close')){ // e.target.closest() là khi click đúng vào element nó mới trả về element đó
                main.removeChild(toast);
                clearTimeout(autoRemoveID); // khi đã click icon đóng thì setTimeout sẽ không được chạy nữa để tránh bị lỗi
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation'
        }
        const deplay = duration / 1000;
        const icon = icons[type]; // vì type là chuỗi, nên khi truy vấn object phải dùng []
        toast.classList.add('toast', `${type}`); // thêm class toast và biến type cho thẻ div mới vừa tạo
        toast.style.animation = `slideInleft ease 0.3s, fadeOut linear 1s ${deplay}s forwards`;
        toast.innerHTML = `
                <div class="toast__icon ${type}">
                <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${messege}</p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            `;
        // console.log(toast); // in ra để xem , --> DOM đã tạo được thẻ toast cha ygan như ở trên (line 5->16)
        main.appendChild(toast); //tạo được toast sau đó thêm vào main s
    }
}

function showSuccessToast(){
    toast({ // đối số là 1 object
        title: 'Success',
        messege: 'Bạn đã đăng nhập thành công tài khoản', 
        type: 'success',
        duration: 3000 // khoảng thời gian hiện
    }); 
}

function showInfoToast(){
    toast({ // đối số là 1 object
        title: 'Information',
        messege: 'Bạn nhận được 1 thông báo !', 
        type: 'info',
        duration: 3000 // khoảng thời gian hiện
    }); 
}

function showWarningToast(){
    toast({ // đối số là 1 object
        title: 'Warning',
        messege: 'Bạn đã đăng nhập sai, hãy đăng nhập lại !', 
        type: 'warning',
        duration: 3000 // khoảng thời gian hiện
    }); 
}