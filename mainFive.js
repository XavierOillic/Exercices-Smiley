// const barreGauche = document.querySelector('#barre_gch')
// const barreDroite = document.querySelector('#barre_drte')
const terrainJeu = document.querySelector('#terrain_de_jeu')
const balle = document.querySelector('#balle')

// const maxHeightGch = barreGauche.clientHeight
// const maxWidthGch = barreGauche.clientWidth

// const maxHeightDrte = barreDroite.clientHeight
// const maxWidthDrte = barreDroite.clientWidth

const maxHeightTerrain = terrainJeu.clientHeight
const maxWidthTerrain = terrainJeu.clientWidth // CLIENT parce que je recupere la taille interne.

balle.style.position = 'relative'

let topPosition = 0 // J'initialise la position haute maximum
let leftPosition = 0 // J'initialise la position gauche maximum
let vitesseH = -2 // J'initialise la vitesse en Px de déplacement horizontal et vertical.
let vitesseW = -2

function animation () { // Deplacement vertical
  if (topPosition === 0) { // SI tu es à la position haute " === 0"
    vitesseH *= -1 // alors tu égales ta vitesse * par -1 ==> par -1 on inverse le mouvement.
  }
  else if (topPosition === maxHeightTerrain - balle.offsetHeight) {
    vitesseH *= -1
  }

  topPosition += vitesseH
  balle.style.top = topPosition + 'px'
  requestAnimationFrame(animation)
}
requestAnimationFrame(animation)

function animationBis () { // deplacement horizontal
  if (leftPosition === 0) {
    vitesseW *= -1
}
  else if (leftPosition === maxWidthTerrain - balle.offsetWidth) {
    vitesseW *= -1
}

  leftPosition += vitesseW
  balle.style.left = leftPosition + 'px'
  requestAnimationFrame(animationBis)
}
requestAnimationFrame(animationBis) // Lance l'animation à 60 IPS

