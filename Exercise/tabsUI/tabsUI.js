const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var tabs = $$('.tab-item');
var tabsContent = $$('.tab-content-item');

var tabActive = $('.tab-item.active');
var line = $('.tabs .line');
line.style.left = tabActive.offsetLeft  + 'px';
line.style.width = tabActive.offsetWidth  + 'px';

tabs.forEach((tab, index) => {
    tab.onclick = function(){
        var tabContent = tabsContent[index]; 
    
        $('.tab-item.active').classList.remove('active');
        $('.tab-content-item.active').classList.remove('active');

        line.style.left = this.offsetLeft  + 'px';
        line.style.width = this.offsetWidth  + 'px';

        this.classList.add('active');        
        tabContent.classList.add('active');        
    }
})