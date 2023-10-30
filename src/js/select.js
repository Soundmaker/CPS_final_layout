let languageListItems = document.querySelectorAll('.languages-list__link')
languageListItems.forEach((el) => {
  el.addEventListener('click', () => {
    languageListItems.forEach((el) =>
      el.classList.remove('languages-list__link--current')
    )

    el.classList.add('languages-list__link--current')
  })
})

let dropdownNavigationItems = document.querySelectorAll(
  '.dropdown-navigation__link'
)
dropdownNavigationItems.forEach((el) => {
  el.addEventListener('click', () => {
    dropdownNavigationItems.forEach((el) =>
      el.classList.remove('dropdown-navigation__link--active')
    )

    el.classList.add('dropdown-navigation__link--active')
  })
})
