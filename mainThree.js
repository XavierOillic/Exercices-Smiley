// JavaScript Document
// TAG = BALISE
// const titre = document.getElementsByTagName("h1")
// const texte = document.getElementsbyId("#titre_principal")

// document.body.insertBefore(texte, titre)
// =====> deplace un element placé dans une const avant un autre

// document.body.appendChild(titre)
// =====> deplace un élément tout en bas de la page.

// document.body.remoceChild(titre)
// =====> supprime littéralement un élement.

const newText = document.createTextNode("Hello, c'est moi !")
document.body.appendChild(newText)

// document.insertBefore(newText, titre)
// document.replaceChild(newText, texte)

// ==============================================================
// ============== AJOUTER Du TEXTE ===============================

function ajouterText (pseudo, monText) {
  const newText23 = document.createElement('p')
  newText23.innerHTML = `<strong>${pseudo}</strong> : ${monText}`

  document.body.appendChild(newText23)
}
ajouterText('Zazou', 'ZZZZZZZZZZZZZZZZZZZZZZZZZ')
ajouterText('Arthur', 'AAAAAAAAAAAAAAAAAAAAAAAAA')
ajouterText('Marie', 'MMMMMMMMMMMMMMMMMMMMMMMM')
ajouterText('Ewen', 'EEEEEEEEEEEEEEEEEEEEEEEEE')

// ==============================================================
// ==============================================================

const lien34 = document.body.getElementsByTagName('a')[3]
lien34.setAttribute('href', 'https://www.udemy.com/join/login-popup/?next=/home/my-courses/')

// avec SETATTRIBUTE, je peux changer le lien à l'interieur de l'attribut.
// console.log(lien34.getAttribute('href'))

// ==============================================================
// ==============================================================
/*
const texte = document.body.getElementsByTagName('p')
// Je stocke dans TEXTE tout ce que contient les paragraphes

const textArray = Array.from(texte)

// J'ai transformé les paragraphes en ARRAY pour pouvoir utiliser le MAP.
textArray.map(paragraphe => paragraphe.innerHTML = "Ah AH AH , je t'ai hacké !")
// Et avec cette ligne, je MAP les paragraphes que j'ai transformé en ARRAY.
*/
// ==============================================================
// ==============================================================
// AVEC UN BOUTON, JE CHANGE LE CONTENU DES TITRES.

const titre = document.body.getElementsByTagName('h1')
const buttonUn = document.querySelector('#divers_un')

buttonUn.addEventListener('click', changerContenuTitre)
function changerContenuTitre (titreArray) {
  titreArray = Array.from(titre) // Avec le ARRAY.FROM, JE TRANSFORME LES TITRES RECUPERES GRACE 
  titreArray.map(grosTitre => grosTitre.innerHTML = "JE CHANGE LE TiTRE : AH AH AH AH !")
}

// ===========================================================================
// ===========================================================================
// titre.style.color = '#000'
// titre.style.boxShadow = '2px 2px 10px rgba(0,0,0,0.3)'
// JE PEUX MODIFIER lE CSS DANS LE JS : Je nomme l'element récupéré byTAG, et je dis ce que je veux changer
// ============================================================================
// ============================================================================

const titre81 = document.querySelector('h2')
const liens93 = document.querySelectorAll('a')
// avec le [7], je selectionnes le A concerné par l'action que je veux lui faire faire
// avec ce premier bouton/lien, j'ajoute une CLASSE au titre H2
liens93[7].addEventListener('click', function () {
  titre81.classList.add("blue")
})

liens93[8].addEventListener('click', function () {
  titre81.classList.remove("blue")
})

liens93[9].addEventListener('click', function () {
  titre81.classList.toggle("blue")
})

// REMOVE ==> REMPLACE
// ADD ==> AJOUTE
// TOGGLE ==> AJOUTE ET ENLEVE AVEC LE MEME BOUTON
// ============================================================================
// ============================================================================
// ICI JE CHANGE LA COULEUR DU TEXTE.

const couleurDuTexte = document.querySelector('container')
const bouttonDeux = document.querySelector('#divers_deux')

bouttonDeux.addEventListener('click', changerTextColor)

function changerTextColor () {
  couleurDuTexte.classList.toggle('green')
}
console.log(changerTextColor)

// ===============================================================================
// ===============================================================================

const buttonTrois = document.querySelector('#divers_trois')
const contenant = document.getElementById('container')
buttonTrois.addEventListener('click', changerCouleurFond)

function changerCouleurFond () {
}
console.log(changerCouleurFond)

// ===============================================================================
// ===============================================================================

/*

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function (p) {
    p.style.color = event.target.value;
  });
}
        <script>
            function changeColor(color) { 
                document.body.style.background = color; 
            }
        </script>
    </head>
    <body style = "text-align:center;"> 
        <h1>WayToLearn<span style="color:red">X</span>.com</h1>
        <p><b>Cliquez sur le bouton pour changer la couleur du background.</b></p> 
        <button onclick = "changeColor('blue');">Bleu</button>
        <button onclick = "changeColor('green');">Vert</button> 
        <button onclick = "changeColor('red');">Rouge</button>
        <button onclick = "changeColor('yellow');">Jaune</button> 
    </body>
*/