const menu = document.querySelector(".menu")
const btnOpen = document.getElementById('open_menu')
const btnClose = document.getElementById('close_menu')
const sideMenu = document.querySelector('.sidenav')

menu.addEventListener('click', (e) => {
    btnOpen.classList.toggle("svg_hide")
    btnClose.classList.toggle("svg_hide")
    if (btnClose.classList.contains("svg_hide")) {
        sideMenu.style.width = "0";
        document.body.style.overflowY = 'auto'
    } else {
        sideMenu.style.width = "20rem";
        document.body.style.overflowY = 'hidden'
    }
})