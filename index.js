const menu = document.querySelector(".menu")
const btnOpen = document.getElementById('open_menu')
const btnClose = document.getElementById('close_menu')

menu.addEventListener('click', (e) => {
    btnOpen.classList.toggle("svg_hide")
    btnClose.classList.toggle("svg_hide")
})