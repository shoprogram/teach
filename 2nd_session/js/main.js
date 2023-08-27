const menuBtContainer=document.querySelector('.menu_bt_container');
const clickMenu=document.querySelector('.click_menu');
const menuClose=document.querySelector('.menu-close');
const menuOpen=document.querySelector('.menu-open');

menuBtContainer.addEventListener('click',() => {
    clickMenu.classList.toggle('active');
    menuClose.classList.toggle('active');
    menuOpen.classList.toggle('active');
});