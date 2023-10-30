function expandBlock(block, btn, btnIndex) {
  let btnElement = document.querySelectorAll('.' + btn)[btnIndex]
  let blockElem = document.querySelector('.' + block)

  btnElement.onclick = (() => {
    let expand = false
    let startValueBtn = btnElement.textContent

    return function (e) {
      e.preventDefault()
      expand = !expand
      blockElem.classList.toggle(block + '--expand')
      btnElement.classList.toggle(btn + '--reverse')

      if (expand) {
        btnElement.textContent = 'Скрыть'
      } else {
        btnElement.textContent = startValueBtn
      }
    }
  })()
}

expandBlock('about-us__text', 'arrows-link', 0)
expandBlock('brands__list', 'arrows-link', 1)
expandBlock('tech-list', 'arrows-link', 2)
