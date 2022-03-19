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
    .delivery .delivery__container
    `,
    { interval: 100 }
  )
