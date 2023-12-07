window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const menuItem = document.querySelectorAll('.menu_item');
    const humburger = document.querySelector('.humburger');


    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger_active');
        menu.classList.toggle('menu_active');
    })
    menuItem.forEach(item => {
        item.addEventListener('click', () =>{
            humburger.classList.toggle('humburger_active');
            menu.classList.toggle('menu_active'); 
        })
    })
})