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

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })
  
scrollReveal.reveal(
    `.home .home__container .home__img, .home .home__container .home__data,
    .about .section-title, .about .section-subtitle, .about .about__container,
    .cardapio .section-title, .cardapio .section-subtitle, .cardapio .cardapio__container,
    .contact .section-title, .contact .section-subtitle, .contact .contact__container,
    .delivery .delivery__container,
    .share__container,
    .footer
    `,
    { interval: 100 }
)

// deixa o link clicado com class active-link
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
    if(linkColor) {
        linkColor.forEach(l => l.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

// box shadow no header
function scrollHeader() {
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 200) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// show scroll top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // Quando o scroll tiver um altura maior que 560 será adiconado a class scroll-top
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)