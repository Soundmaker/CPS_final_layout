let burger = document.querySelector('.burger')
let dropdown = document.querySelector('.dropdown-menu')
let close = dropdown.querySelector('.dropdown-menu__close')
let dropdownOverlay = document.createElement('div')

burger.addEventListener('click', () => {
  dropdownOverlay.classList.add('overlay')
  document.body.appendChild(dropdownOverlay)
  dropdown.classList.add('dropdown-menu--open')
  document.body.classList.add('fixed')
})

close.addEventListener('click', () => {
  dropdown.classList.remove('dropdown-menu--open')
  dropdownOverlay.remove()
  document.body.removeAttribute('class')
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    dropdown.classList.remove('dropdown-menu--open')
    document.body.removeAttribute('class')
    dropdownOverlay.remove()
  }
})

dropdownOverlay.addEventListener('click', () => {
  dropdown.classList.remove('dropdown-menu--open')
  dropdownOverlay.remove()
  document.body.removeAttribute('class')
})
