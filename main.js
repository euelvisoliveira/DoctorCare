window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScrollO()
  showBackTopScroll()
}

function showNavOnScrollO() {
  if (scrollY > 0) {
    navegar.classList.add('scroll')
  } else {
    navegar.classList.remove('scroll')
  }
}

function showBackTopScroll() {
  if (scrollY > 300) {
    backTop.classList.add('show')
  } else {
    backTop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  '#home, #home img, #home .stats, #services,#services header,#services .card, #about, #about header, #about .content'
)
