let feedbackModal = document.querySelector('.feedback-modal')
let buttonsShowFeedbackModal = document.querySelectorAll(
  '.primary-btn--type_mail'
)
let buttonsCloseFeedbackModal = feedbackModal.querySelector(
  '.feedback-modal__close'
)
let feedbackOverlay = document.createElement('div')
feedbackOverlay.classList.add('overlay')
feedbackOverlay.style.zIndex = '100'

buttonsShowFeedbackModal.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    document.body.appendChild(feedbackOverlay)
    feedbackModal.classList.add('feedback-modal--open')
    document.body.style.overflow = 'hidden'
  })
})

buttonsCloseFeedbackModal.addEventListener('click', () => {
  feedbackModal.classList.remove('feedback-modal--open')
  feedbackOverlay.remove()
  document.body.removeAttribute('style')
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    feedbackModal.classList.remove('feedback-modal--open')
    feedbackOverlay.remove()
    document.body.removeAttribute('style')
  }
})

feedbackOverlay.addEventListener('click', () => {
  feedbackModal.classList.remove('feedback-modal--open')
  document.body.removeAttribute('style')
  feedbackOverlay.remove()
})

function checkForm(formName) {
  let form = document.querySelector('.' + formName)
  let formChildren = form.querySelectorAll('input, textarea')
  formChildren.forEach((el) => (el.style.backgroundColor = '#fff'))

  form.onsubmit = (e) => {
    let voidFields = [...formChildren].filter((el) => !el.value)

    voidFields.forEach(
      (el) => (el.style.backgroundColor = 'rgba(255, 0, 0, 0.2)')
    )

    if (voidFields.length) {
      e.preventDefault()
    }
  }
}

checkForm('feedback-form')
