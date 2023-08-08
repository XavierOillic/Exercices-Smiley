const titres = document.querySelectorAll('h1')
function goToTitres (titre) {
  const distanceEnPixel = titre.offSetTop
  window.scrollTo(0, distanceEnPixel)
}
goToTitres(titres[2])

// LE OFFSETTOP mesure la distance en pixel depuis le 1er titre pour aller jusqu'à celui demandé.
// WINDOW represente TOUTE la page.
// je lui demande de SCROLLER de 0 (ht de page) jusqu'au titre demandé en DistanceEnPixel.

const lien6 = document.querySelector('.lien6')
lien6.addEventListener('click', function () {
  prompt ('Coucou !')
})

// ================================================================================
// ================================================================================
// Je fais apparaitre un POPUP grace à un boutton.

const buttonPopup = document.querySelector('#divers_un')
const popUpUn = document.querySelector('#popup_un')

buttonPopup.addEventListener('click', () => {
  if (getComputedStyle(popUpUn).display !== 'none') {
    popUpUn.style.display = 'none'
  } else {
    popUpUn.style.display = 'block'
  }
})
console.log()

// si je remplis le prompt, alors il m'en renvoie un et enfin il me renvoie une phrase.

const buttonPrompt = document.querySelector('#divers_deux')

const reponseUne = 'Nia Nia Nia'
const reponseDeux = 'Beuh beuh Beuh !'
const reponseTrois = 'Merci !'

buttonPrompt.addEventListener('click', function () {
  if (window.prompt('QUEL EST TON NOM ?...') !== reponseUne) {
    alert(' Un bien Joli prénom ! ')
  }
  if (window.prompt('ET QUEL AGE AVEZ VOUS ? ...') !== reponseDeux) {
    alert(' Vraiment !? ')
  }
  if (window.prompt('...VOUS LE NE LES FAITES PAS ! ') === reponseTrois) {
    alert(' Je vous en prie :) ?!')
  }
  else {
    alert("SUPER, J'AI REUSSI !")
  }
})
console.log()

// ================================================================================
// ================================================================================
