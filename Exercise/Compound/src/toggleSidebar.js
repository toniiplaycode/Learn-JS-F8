import { getElement } from "./utils.js";
const toggleBtn = getElement('.toggle-btn');
const sidebarCloseBtn = getElement('.sidebar-close-btn');
const sidebarOverlay = getElement('.sidebar-overlay');

toggleBtn.addEventListener('click', () => {
    sidebarOverlay.classList.add('show');
})

sidebarCloseBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('show');
})