document.querySelector(".slider").addEventListener('click', function() {
    document.body.classList.toggle('dark_mode');
});

let menu = document.querySelector(".h_menu");
let menuPanel = document.querySelector(".menu_container");
menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuPanel.classList.toggle('active');
})