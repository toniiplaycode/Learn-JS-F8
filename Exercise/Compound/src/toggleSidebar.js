import { getElement } from "./utils.js";
const toggleBtn = getElement('.toggle-btn');
const sidebarCloseBtn = getElement('.sidebar-close-btn');
const sidebarOverlay = getElement('.sidebar-overlay');
const sidebar = getElement('.sidebar');

toggleBtn.addEventListener('click', () => {
    sidebarOverlay.classList.add('show');
})

sidebarCloseBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('show');
})

sidebar.addEventListener('click', (e)=>{ // chặn sự kiện nổi bọt, để khi click ra ngoài sidebar-overlay (thẻ cha) thì sidebar sẽ được đóng lại
    e.stopPropagation();
});

sidebarOverlay.addEventListener('click', ()=>{
    sidebarOverlay.classList.remove('show');
});