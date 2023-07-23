// JavaScript Document

//PREMIER BTN ===========> A D D  E V E N T  L I S T E N E R ==========>  pour CHANGER ALEATOIREMENT LA COULEUR DE FOND D'UNE DIV.

const smileyPlace = document.querySelector ("#smileyPlace") 
const button = document.querySelector ("button")

button.addEventListener('click', changerCouleurDerriereSmiley)
function changerCouleurDerriereSmiley () {
    smileyPlace.style.backgroundColor = '#'+(Math.floor(Math.random()* 0xFFFFFF)).toString(16);
}

//=========================================================================================================================
//======================> L E    M E M E     B O U T O N  ====> O N C L I C K <============================
//JE MET LES DEUX FONCTIONS DANS LE MEME BOUTON ET DU COUP JE FAIS DEUX ACTIONS AVEC LE MEME BOUTON.
//====> pour changer ALEATOIREMENT LA COULEUR DE FOND DU SMILEY
const fondSmiley = document.querySelector (".smiley")

const changerCouleur = () => {
    let randomColor2 = (Math.floor(Math.random()* 0xFFFFFF)).toString(16);
    fondSmiley.style.backgroundColor = "#" + randomColor2;
}

//===> pour CHANGER ALEATOIREMENT LA COULEUR DU BODY.
const backgroundColorBody = () => {
    let randomColor = (Math.floor(Math.random()* 0xFFFFFF)).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}


//=========================================================================================================================
// LE QUATRIEME BOUTON POUR CHANGER LE TYPE DE SMILEY
//===========> A D D  E V E N T  L I S T E N E R ==========>  pour CHANGER ALEATOIREMENT LE TYPE DE SmILEY

const smileyPlaceType = document.querySelector("#smileyPlace") // JE STOCKE LE LIEU DU CHANGEMENT 
const buttonBis = document.querySelector("#bbb") // ICI, JE STOCKE LE LIEU OU SE TROUVE LE BUTTON AVEC SON ID #bbb
//const LaCleSmiley = (1, 2, 3)

//====> Je stxoke les images dans un objet. 1 = CLE // images/... = VALEUR
const smileyAdress = {
    1 : "smiley_1" ,
    2 : "smiley_2" , 
    3 : "smiley_3"
} 
//console.log(smileyAdress) LA CONSOLE M'AFFICHE BIEN UN OBJET.
buttonBis.addEventListener('click', changerSmiley) 
function changerSmiley () {   // JE DECLARE MA FONCTION, SANS ATTRIBUT
    let randomizeSmiley = (Math.floor(Math.random() * smileyAdress) +1).toString() // JE DECLARE ET STOCKE MON RANDOM
    const x = smileyAdress[randomizeSmiley] // STOCKE l’ENDROIT OU JE FAIS LE RANDOM
    smileyPlaceType.innerHTML = `<img class="${x}" src="images/${x}.png" alt="${x}"/>` // 
}
changerSmiley()


// classCiel.innerHTML = `<img class="${iconPerso}"src="image/${iconPerso}.png" alt="${iconPerso}"/>`






































































