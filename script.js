document.querySelector(".slider").addEventListener('click', function() {
    document.body.classList.toggle('dark_mode');
    if (document.body.classList.contains("dark_mode")) {
        mode.innerText = 'Light';
    } else {
        mode.innerText = 'Dark';
    }
});
let menuSection = document.getElementById("menu");
let menu = document.querySelector(".h_menu");
let menuPanel = document.querySelector(".menu_container");
let mode = document.querySelector(".mode");
menu.addEventListener('click', function() {
    menuSection.classList.toggle('active');
    menu.classList.toggle('active');
    menuPanel.classList.toggle('active');
})
