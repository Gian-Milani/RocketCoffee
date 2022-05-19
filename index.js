const buttonMenu = document.getElementById('btn-menu')
const navMenu = document.getElementById('nav-menu-mobile')
const main = document.getElementById('main')
const footer = document.getElementById('footer')
const descriptions = document.getElementById('descriptions')

buttonMenu.addEventListener('click', () => {
  navMenu.classList.toggle('hidden')
  main.classList.toggle('hidden')
  descriptions.classList.toggle('hidden')
  footer.classList.toggle('hidden')
})