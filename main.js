// JavaScript Document

// PREMIER BTN ===========> A D D  E V E N T  L I S T E N E R ==========>  pour CHANGER ALEATOIREMENT LA COULEUR DE FOND D'UNE DIV.

const smileyPlace = document.querySelector('#smileyPlace')

const button = document.querySelector('#smileyBackgroundColor')

button.addEventListener('click', changerCouleurDerriereSmiley)
function changerCouleurDerriereSmiley () {
  smileyPlace.style.backgroundColor = '#' + (Math.floor(Math.random() * 0xFFFFFF)).toString(16)
}

// =========================================================================================================================
// ======================> L E    M E M E     B O U T O N  ====> O N C L I C K <============================
// JE MET LES DEUX FONCTIONS DANS LE MEME BOUTON ET DU COUP JE FAIS DEUX ACTIONS AVEC LE MEME BOUTON.
// ====> pour changer ALEATOIREMENT LA COULEUR DE FOND DU SMILEY
const fondSmiley = document.querySelector('.smiley')

const changerCouleur = () => {
  const randomColor2 = (Math.floor(Math.random() * 0xFFFFFF)).toString(16)
  fondSmiley.style.backgroundColor = '#' + randomColor2
}

// ===> pour CHANGER ALEATOIREMENT LA COULEUR DU BODY.
const backgroundColorBody = () => {
  const randomColor = (Math.floor(Math.random() * 0xFFFFFF)).toString(16)
  document.body.style.backgroundColor = '#' + randomColor
}

// =========================================================================================================================
// LE QUATRIEME BOUTON POUR CHANGER LE TYPE DE SMILEY
// ===========> A D D  E V E N T  L I S T E N E R ==========>  pour CHANGER ALEATOIREMENT LE TYPE DE SmILEY

const smileyPlaceType = document.querySelector('#smileyPlace') // JE STOCKE LE LIEU DU CHANGEMENT
const buttonBis = document.querySelector('#smileyTypeButton') // ICI, JE STOCKE LE LIEU OU SE TROUVE LE BUTTON AVEC SON ID #bbb

// ====> Je stocke les images dans un objet. 1 = CLE // images/... = VALEUR
const smileyAdress = {
  '1': 'smiley_1',
  '2': 'smiley_2',
  '3': 'smiley_3'
}
// console.log(smileyAdress) LA CONSOLE M'AFFICHE BIEN UN OBJET.
buttonBis.addEventListener('click', changerSmiley)

function changerSmiley () { // JE DECLARE MA FONCTION, SANS ATTRIBUT
  let randomizeSmiley = (Math.floor(Math.random() * 3) + 1).toString() // JE DECLARE ET STOCKE MON RANDOM
  const x = smileyAdress[randomizeSmiley] // STOCKE l’ENDROIT OU JE FAIS LE RANDOM
  smileyPlaceType.innerHTML = `<img class="${x}" src="images/${x}.png" alt="${x}"/>`
}
changerSmiley()

// =========================================================================================================================
// =========================================================================================================================
// PASSAGE ALEATOIRE DES ICONES METEO

const buttonTer = document.querySelector('#meteoTypeButton')
const meteoPlace = document.querySelector('#meteoPlace')

const icones = {
  '1': 'ciel_1',
  '2': 'ciel_2',	
  '3': 'ciel_3',			
  '4': 'ciel_4',	
  '5': 'ciel_5',	
  '6': 'ciel_6',			
  '7': 'ciel_7',
  '8': 'ciel_8',							
  '9': 'ciel_9',
  '10': 'ciel_10',				
  '11': 'ciel_11',				
  '12': 'ciel_12',		
  '13': 'ciel_13', 		
  '14': 'ciel_14',	
  '15': 'ciel_15',	
  '16': 'ciel_16',
  '17': 'ciel_17',
  '18': 'ciel_18'
}

buttonTer.addEventListener('click', changerMeteo)

function changerMeteo () {
  // let randomizeMeteo = (Math.floor(Math.random() * (max - min +1)) + min)
  const randomizeMeteo = (Math.floor(Math.random() * 18) + 1).toString()
  const y = icones[randomizeMeteo]
  meteoPlace.innerHTML = `<img class="${y}" src="images_temps/${y}.png" alt="${y}"/>`
}
changerMeteo()

// setInterval(randomIconesMeteo(), 1000 )
// setTimeout ("randomIconesMeteo()", 1000 )

// ========================================================================================================================
// LE DOCUMENT REPRESENTE TOUTE LA PAGE HTML.
// LE D.O.M DOCUMENT OBJECT MODELE
// DANS la console, je peux choisir :
// document.body....
// Je précise l'adressage de ce que je veux.
// =========================================================================================================================

const lien6 = document.querySelector('.lien6')
lien6.addEventListener('click', function () {
  prompt ('Coucou !')
})

// =========================================================================================================================
// ========================FORMULAIRE D'INSRIPTION ==============================================================
// ====================== APPARITION ==== DISPARITION ==================================================

const openButton = document.querySelector('#open_form_button')
const loginPopUp = document.querySelector('#login_popup')

openButton.addEventListener('click', function () {
  loginPopUp.style.display = 'block'
})

const closeButton = document.querySelector('#annuler')
const closePopUp = document.querySelector('#login_popup')

closeButton.addEventListener('click', function () {
  closePopUp.style.display = 'none'
})

// =====================================================================================
// ======================================================================================
