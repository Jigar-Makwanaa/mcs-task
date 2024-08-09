

const popopBox = document.querySelector('.popup-box')
const okBtn = document.querySelector('.ok-btn')
const cancelBtn = document.querySelector('.cancel-btn')
let data = document.getElementById('a-tag').getAttribute("href")

okBtn.addEventListener('click', (e) => {
  e.preventDefault()
  window.location.href = data
})

cancelBtn.addEventListener('click', () => {
  popopBox.style.display = "none";
})

function openPopup(e) {
  e.preventDefault()
  popopBox.style.display = "block"
}

