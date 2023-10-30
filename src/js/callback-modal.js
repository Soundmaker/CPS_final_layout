let callbackModal = document.querySelector('.callback-modal')
let buttonsShowCallbackModal = document.querySelectorAll(
  '.primary-btn--type_call'
)
let buttonsCloseCallbackModal = callbackModal.querySelector(
  '.callback-modal__close'
)
let callbackOverlay = document.createElement('div')
callbackOverlay.classList.add('overlay')
callbackOverlay.style.zIndex = '100'

buttonsShowCallbackModal.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    document.body.appendChild(callbackOverlay)
    callbackModal.classList.add('callback-modal--open')
    document.body.style.overflow = 'hidden'
  })
})

buttonsCloseCallbackModal.addEventListener('click', () => {
  callbackModal.classList.remove('callback-modal--open')
  callbackOverlay.remove()
  document.body.removeAttribute('style')
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    callbackModal.classList.remove('callback-modal--open')
    callbackOverlay.remove()
    document.body.removeAttribute('style')
  }
})

callbackOverlay.addEventListener('click', () => {
  callbackModal.classList.remove('callback-modal--open')
  document.body.removeAttribute('style')
  callbackOverlay.remove()
})
