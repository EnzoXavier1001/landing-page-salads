// show menu 
const toggle = document.querySelector('#nav-toggle')
const nav = document.querySelector('#nav-menu')

toggle.addEventListener('click', function() {
    nav.classList.toggle('show-menu')
})

const links = document.querySelectorAll('.nav__link')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show-menu')
    })
}