const titres = document.querySelectorAll('h1')
function goToTitres (titre) {
  const distanceEnPixel = titre.offSetTop
  window.scrollTo(0, distanceEnPixel)
}
goToTitres(titres[2])

// LE OFFSETTOP mesure la distance en pixel depuis le 1er titre pour aller jusqu'à celui demandé.
// WINDOW represente TOUTE la page.
// je lui demande de SCROLLER de 0 (ht de page) jusqu'au titre demandé en DistanceEnPixel.
