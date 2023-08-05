const titre = document.querySelector("h2")
const terrain = document.querySelector("#terrain_de_jeu")
const maxHeight = terrain.clientHeight
const maxWidth = terrain.clientWidth

titre.style.position = "relative"
let topPosition = 0
let leftPosition = 0
let vitesseH = -2
let vitesseW = -2

function animation () {
  if (topPosition === 0) {
    vitesseH *= -1
}
  else if (topPosition === maxHeight - titre.offsetHeight) {
    vitesseH *= -1
}

  topPosition += vitesseH

  titre.style.top = topPosition + 'px'

  requestAnimationFrame(animation)
}
requestAnimationFrame(animation)

function animationBis () {
  if (leftPosition === 0) {
    vitesseW *= -1
  }
  else if (leftPosition === maxWidth - titre.offsetWidth) {
    vitesseW *= -1
  }

  leftPosition += vitesseW

  titre.style.left = leftPosition + 'px'

  requestAnimationFrame(animationBis)
}
requestAnimationFrame(animationBis)
