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
const titre = document.querySelector('#titre')
const texte = document.body.getElementsByTagName('p')

const newText = document.createTextNode("Hello, c'est moi !")
console.log('newText')
document.body.appendChild(newText)
const footer = document.querySelector('#footer')
// document.insertBefore(newText, titre)
// document.replaceChild(newText, texte)

function ajouterText (pseudo, monText) {
  const newText23 = document.createElement('p')
  newText23.innerHTML = `<strong>${pseudo}</strong> : ${monText}`

  document.body.appendChild(newText23)
}
ajouterText('Zazou', 'ZZZZZZZZZZZZZZZZZZZZZZZZZ')
ajouterText('Arthur', 'AAAAAAAAAAAAAAAAAAAAAAAAA')
ajouterText('Marie', 'MMMMMMMMMMMMMMMMMMMMMMMM')
ajouterText('Ewen', 'EEEEEEEEEEEEEEEEEEEEEEEEE')

const lien34 = document.querySelector('.lien_3')
lien34.setAttribute('href', 'https://www.udemy.com/join/login-popup/?next=/home/my-courses/')

// avec SETATTRIBUTE, je peux changer le lien à l'interieur de l'attribut.
// console.log(lien34.getAttribute('href'))
// console.log(titre.getAttribute('id'))

console.log(lien34)

const textArray = Array.from(texte)
console.log(textArray)
// J'ai transformé les paragraphes en ARRAY pour pouvoir utiliser le MAP.
textArray.map(paragraphe => paragraphe.innerHTML = "Ah AH AH , je t'ai hacké !")
// Et avec cette ligne, je MAP les paragraphes que j'ai transformé en ARRAY.
