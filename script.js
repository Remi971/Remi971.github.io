let menuSection = document.getElementById("menu");
let menu = document.querySelector(".h_menu");
let menuPanel = document.querySelector(".menu_container");
let mode = document.querySelector(".mode");

document.querySelector(".slider").addEventListener('click', function() {
    document.body.classList.toggle('dark_mode');
    
    if (document.body.classList.contains("dark_mode")) {
        mode.innerText = 'Light';
        localStorage.setItem("mode", 'dark');
        document.querySelector(".slider").classList.add('dark');
    } else {
        mode.innerText = 'Dark';
        document.querySelector(".slider").classList.remove('dark');
        localStorage.clear();
    }
});

menu.addEventListener('click', function() {
    menuSection.classList.toggle('active');
    menu.classList.toggle('active');
    menuPanel.classList.toggle('active');
})

window.onload = function() {
    if (localStorage.mode === 'dark') {
        document.querySelector(".switch>input").checked = true;
        document.body.classList.add('dark_mode');
        mode.innerText = 'Light';
        document.querySelector(".slider").classList.add('dark');
    }
}

function removeClass() {
    menuSection.classList.remove('active');
    menu.classList.remove('active');
    menuPanel.classList.remove('active');
}