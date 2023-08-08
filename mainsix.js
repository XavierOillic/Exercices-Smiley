// JavaScript Document 

// LA NORME EGMA SCRIPT (ES) DONNE LES REGLES DU JAVA SCRIPT.
// ON EN EST A LA VERSION 7 ou 8.


var num = 1;
	//le " = " permet d'ASSIGNER une VALEUR, sans laquelle la variable sera nulle, et vue comme Undefined.
console.log (num);

var chiffre = 0;
console.log(chiffre); // la console renvoie "undefined" car aucune valeur n'a été assignée à la variable.
console.log(chiffre + num); // la console renvoie NaN (Not a Number) si l'une de deux Variables n'a pas d'AFFECTATION.

chiffre = 10 // la variable CHIFFRE EST DEJA DECLAREE donc je peux lui REASSIGNER une valeur.
console.log(num + chiffre);

console.log(11*10); 
console.log(10/2);
console.log(11+23);
console.log(11.5*100); //pour es nombres décimaux, on met un point.

//LES PRIORITES DE CALCUL
console.log(2 + 4 * 8);
console.log((2 +4) *8); //Il fait le calcul entre parenthèses en premier sans tenir compte de l'ordre de priorité

console.log(10/3); //va afficher 3,33333333
console.log(10%3); //j'utilise le MODULO (POURCENTAGE) pour voir AFFICHER le RESTE.
console.log(10%2); //avec le MODULO, je verifie que le nombre est pair car la console affichera 0

// ce sont les OPERATEURS

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//INCREMENTER/DECREMENTER

var num = 0;
//console.log(num);
//console.log(num +1);

//num = num + 1; // affiche 1, car il fait num = 0 + 1.
num++;
num++;
num++;
num++;
num++; // va afficher 5 car NUM et Egal à lui meme + lui même. Donc : 0 +1 +1 +1 +1 +1
console.log(num);
//fonctionne aussi avec num--
num += 5; // J'additione 5 tout en gardant la valeur initiale de NUM.
console.log(num);

var chiffre =2;
chiffre /= 10;
console.log(chiffre); //le " /= " permet d'ASSIGNER en même temps une valeur et un calcul.


////////////////////CHAINE DE CARACTERE ////////////////////////////////////////////////////////////////////////////


var texte = "Coucou, je m\'appelle \"Xavier\", \nJe suis content, et je peux échapper un \\ en en mettant deux" // Le ' \ ' permet de s'ECHAPPER aux guillemets.
console.log(texte); // on fait une chaine de caractère entre '' ou "", le \n collé à la lettre suivante permet de sauter à la ligne.


var bonjour = "Bonjour, "
var nom = "Xavier"

var bonjourBis = "BonjourBis, "
var nomBis = "Zazou, \nes tu content de faire du JS ?"
var resultat = bonjour +" jhqdshfhvfhfhvf " + nom //je peux stocker cette concatenation dans une variable : resultat
//console.log(bonjour + "    " + nom) // JE CONCATENE
//console.log(resultat)
bonjourBis += " " + nomBis; //je garde la valeur de BonjourBis et en MEME TEMPS, je lui additionne une chaine de caractere vide et l'autre variable.
BonjourBis = bonjourBis + " " + nomBis;
console.log(bonjourBis)


//var nom = "Xavier, "
//var age = 43;
//var bonjour = "Bonjour "
//var resultat = bonjour + nom + "tu as " + age + " ans!"
//console.log (resultat); //Bonjour xavier, tu as 43 ans

///////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(nom.length); // pour obtenir la longueur de mon prénom
console.log(nom[1]); //pour obtenir la 2ème lettre de mon prénom : 1 parce que l'ordi commence à compter à partir de 0...
console.log(nom[nom.length - 1]); // pour obtenir la dernière lettre d'un mot.

//une chaine de caractère est IMMUTABLE. 
//je peux modifier le mot de la chaine dans son entiereté en le modifier dans la variable 
// nom n'égale plus "Xavier", mais "Carotte"... Mais je ne peux modifier une lettre via une variable.

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/// LES ARRAY--------UN TABLEAU !

var nom ="Arthur"
var age = "14"

var college ="jean Rostand"
var sport= "judo"
var telephone = "Smartphone"

var stats =["intelligence", "Force"]//On peut y stocker des infos et mêm d'autres tableaux.
var activites = [college, sport, "dessin", "Lecture", "console de jeu", telephone]

var array =[nom, age, stats, activites, telephone]; //on met des crochets pour créer un TABLEAU. 

console.log(array)
console.log(array[2]) // pour afficher sur la console la 3ème entrée : "stats"
console.log(array[2][1]) // pour afficher la 2ème entrée : "Force", de "stats"

//a l'inverse de la chaine de caractere, je peux modifier une entrée de l'array directement en la designant.
array[0]= "Ewen"
array[2][1]="Powerfulness"
//je désigne le tableau en question "array", puis l'entrée concernée : la var nom, et j'en modifie le contenu.
console.log(array)

///LA PROPRIETE LENGTH des TABLEAUX
console.log(array.length) // il m'affiche le nombre d'entrée du tableau !
console.log(array[3][5].length) //il doit m'afficher le nb de caractere qu'il y a dans la var telephone
//dans le tableau "array", l'entrée 3 (0,1,2), puis l'entrée 5 (0,1,2,3,4).

var array2 =[1, 3] //on ne sait pas encore ce qu'on va y mettre.
array2.push(4) //PUSH permet de rajouter une entrée dans mon tableau initial
array2.push("salut Mec!")//j'y rajoute ce que je veux
array2.push(10, 11,"Comment vas tu?", 78, 900) // je sépare avec des VIRGULES pour accumuler les ajouts sur un meme PUSH
console.log(array2)

array2.pop() //POP ecrit ainsi SUPPRIME LA DERNIERE ENTREE
console.log(array2)

var popVariable = array2.pop() //POP retire la derniere VALEUR, mais egalement LA STOCKE. 
// EN L'UTILISANT DANS UNE VARIABLE "pop", je peux l'utiliser pour réiterer le retrait.
console.log(popVariable)

array2.push(popVariable)
console.log(array2)

array2.unshift("Je rajoute un truc au début") // le UNSHIFT RAJOUTE qqch au début
console.log(array2)

array2.shift(); // Le SHIFT ENLEVE qqch au début et se comporte comme le POP.
console.log(array2)


//EXERCICE....


var prenom = "Morgane";
var nom = "Oillic";
var intialeSolution = prenom[0] + nom[0]; //AVEC LE + J'ACCOLE LES DEUX INITIALES, ET JE LES STOCKE DIRECT DANS LA VARIABLE

//console.log(prenom[0])
//console.log(nom[0])

//console.log(prenom[prenom.length - 1])
//console.log(nom[nom.length - 1])

var debutPrenom = (prenom[0]) //JE RECUPERE LA PREMIERE LETTRE DU MOT & JE LES MET DANS UNE VARIABLE
var debutNom = (nom[0])
var sport = "judo"

var finPrenom =(prenom[prenom.length - 1]) //JE RECUPERE LA DERNIERE LETTRE & ET JE LA MET DANS UNE VARIABLE
var finNom =(nom[nom.length - 1])
var longeurSport = (sport.length)

console.log(debutPrenom)
console.log(debutNom)
console.log(finPrenom)
console.log(finNom) // M & O et E & C APPARAISSENT BIEN DANS LA CONSOLE


var initialesDebut = [debutPrenom, debutNom] // JE STOCKE LES VARIABLES PRECEDENTES DANS DEUX NOUVEAUX TABLEAUX POUR LES
var initialesFin = [finPrenom, finNom] // INSERER DANS UN NOUVEAU TABLEAU "RESULTAT"

var resultat = [prenom, nom, initialesDebut, initialesFin, longeurSport]
resultat.push("Ses lecons...") // PUSH RAJOUTE A LA FIN
resultat.push("...sont vraiment top !", "on peut pusher plusieurs elements avec des virgules...")// PUSH RAJOUTE  LA FIN
console.log(resultat)

resultat.unshift("...truc au début du tableau!")
resultat.unshift("Je rajoute un autre...")
console.log(resultat)

resultat.pop() //POP RETIRE A LA FIN, LA DERNIERE ENTREE
console.log(resultat)

resultat.shift() // SHIFT RETIRE LA DERNIERE ENTREE DU DEBUT
console.log(resultat)

//var rajouteLaFin = resultat.push()
//resultat.push(rajouteLaFin)
//console.log(resultat)

//var popBis = resultat.pop()
//resultat.push(popBis)
//console.log(resultat)

resultat.push(intialeSolution)
console.log(resultat)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////// LES FONCTIONS ///////////////////////
//on crée un mini fichier à l'interieur du fichier JAVA...

function addition(num){
	console.log(2 + num);
}
addition(100) //J'APPELLE LA FONCTION POUR QU'ELLE S'EXECUTE, ON DEFINNIT LA VALEUR DE LA FUNCTION ADDITION ICI.


function soustraction(a, b, c, d, e){
	console.log(a * b - c - d - e);
}
soustraction (10, 5, 5, 5, 5, 5, 5)//On peut donner à a et b n'importe qu'elle valeur, appeller la fonction SOUSTRACTION quand on en a besoin...


function concatenationTest (mot, motDeux){
	console.log(mot, motDeux);
}
concatenationTest("BLABLA BLA, " , "JE COMMENCE A COMPRENDRE ! ") //JE PEUX CONCATENER DES STRING !


var num = 100;
num = 200; // JE MODIFIE LA VARIABLE DU DESSUS, ET CELA PRENDRA EFFET DANS LA FONCTION.
function multiplication (num){
	console.log(num * 2)
}
multiplication(num)
//SI JE DECLARE UNE NOUVELLE VARIABLE DANS LA FONCTION, LE CONSOLE.LOG EXT AU BLOCK "FUNCTION" NE POURRA PAS VOIR LA VARIABLE A L'INTERIEUR DE LA FUNCTION. ET INVERSEMENT!


function division (a, b){
	return a / b;
}
var resultatDiv = division(50, 10)
console.log(resultatDiv)
//Le RETURN est le moyen normal d'avoir un retour de fonction.
// Retour que l'on peut stocker dans une Variable pour le réutiliser àà loisir...

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////   EXERCICE   /////////////////////////////

var note1 = 189 // JE DECLARE MES 3 VARIABLES NOTES
var note2 = 17.5
var note3 = 18.5
var note4 = 209.6
var resultatMoyenne = calculMoyenne(note1, note2, note3, note4)
	
function calculMoyenne (a, b, c, d){
	return ((a + b + c + d) / 4)
}
calculMoyenne()
	
console.log(resultatMoyenne)

// DANS LA FONCTION, QUE JE NOMME, ET À LAQUELLE JE DONNE UNE VALEUR \(3 EN L'OCCURENCE)\
// LE RETURN ME RENVOIE SUR LA CONSOLE LE RESULTAT DU CLACUL DE MOYENNE FAIT APRES.

// POUR N'AVOIR QU'UNE SEULE LIGNE DE NOTE A CHANGER DANS LES VARIABLES, JE REMPLACE LES "VARIABLES NOMMEES ET VALORISEES"
// PAR DES LETTRES. 
// LA VALEUR DE LA DERNIERE VARIABLE SERA LE NOM DE LA FONCTION AVEC COMME VALEUR LES VARIABLE NOTE DECLAREES.

var mot1 = "je " // JE DECLARE CE QUE JE VAIS DONER A MIXER PAR LA FONCTION
var mot2 = "suis "
var mot3 = "content de comprendre..."
var mot4 = " un peu tout ce bazard de JS!"

var phrase = assemblage(mot1, mot2, mot3, mot4) // LA VARIABLE QUI VA CONTENIR LE RESULTAT

function assemblage (a, b, c, d){ //JE DECLARE, JE NOMME, ET J'ATTTRIBUE UNE VALEUR A MA FUNCTION
	return a + b + c + d // JE LUI DIS CE QU'ELLE DOIT FAIRE
}
assemblage() // JE L'APPELLE POUR QU'ELLE FASSE CE QUE JE LUI AI DEMANDE
console.log(phrase)

// ON PEUT ASSEMBLER DES PHRASES OU DES MOTS AVEC UNE FONCTION DE LA SORTE...
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////   LES BOLEANS   /////////////////////////////

console.log(2 == 2 ? "ok!" : "PAS OK!") //... est EGAL à... TRUE
console.log(2 != 2 ? "BIEN" : "PAS BIEN!") //... est DIFFERENT de ... FALSE
console.log(2 > 1 ? "C'est VRAI!" : "C'est OK") // ... est SUPERIEUR à ...
console.log(2 < 1) // ... est INFERIEUR à ... 
console.log(2 >= 1) // ....est SUPERIEUR ou EGAL à ...
console.log(1 <= 2) // ...est INFERIEUR ou EGAL à ....
console.log(1 == 1 && 2 != 2 ? "Tant mieux" : "c'est faux pour l'une des propositions ") // est EGAL à... ET ... EGAL à ...
console.log(1 == 1 || 3 != 4 ) // est EGAL à ... OU ...EST DIFFERENT de...
console.log(1 === "1") // est EGAL à TANT DANS LA FORME que dans LE FOND. ON COMPARE TYPE et CONTENU.
console.log(1 !== 1 ? "C'est pas vrai" : "C'est faux : 1 est strictement identique à 1!") // est STRICTEMENT DIFFERENT à ....

// SHIFT + OPTION + L POUR AVOIR LES BARRES DU "OU"
			
// Je peux mettre les objets à comparer dans des variables.
//UNE CONDITION TERNAIRE: 
var age = 17
var majorite = 21
console.log(age == majorite ? "Bienvenu en boîte" : "Pas pour toi avant quelques années!")
//
var temperature = 10
var sortie = 15
console.log(temperature < sortie ? "Tu ne peux pas sortir" : "Tu peux y aller")

// Je declare Variables.
// si ton AGE /(17)/ est égal à la MAJORITE, alors Bienvenu, sinon ":", vas t'en!

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                            //  CODITIONS IF ou IF NOT //

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function esTuFort (force){ // on declare la fonction "estufort" avec la valeur Force
	if (force >= 17) { // SI Force > 10 ==> return "tu es fort!"
		return "Tu es TRÈS BALÈZE !"
	} //SOUS BLOC 1
	else if (force >= 15){ // SI AUTRE : Force >= 15 ==> return tu es baleze
		return "Tu es FORT !" 
			 } // SOUS BLOC 2
	else { // SINON, return "tu n'es pas fort du tout"
	return "Non, tu n'es pas fort du tout !"
	} //SOUS BLOC 3 FIN
} //GRAND BLOC
console.log(esTuFort(10));

//L'ORDRE EST TRES IMPORTANT CAR DES QUE LA PREMIERE CONDITION EST REMPLIE IL RENVOIE LE MESSAGE ATTENDU SANS ALLER PLUS LOIN. LE ELSE, LUI, CLOTURE LES CONDITIONS. ON PEUT AVOIR BEAUCOUP DE ELSE IF.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                            //  CODITIONS IF ou IF NOT //

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                           CREATION D'UN TABLEAU DE CALCUL D'UNE MOYENNE AVEC CONDITION A SUIVRE


var note1Exercice = 15 
var note2Exercice = 15
var note3Exercice = 15
function exerciceMoyenne (a, b, c){
	return ((a + b + c)/3)
}
console.log(exerciceMoyenne(note1Exercice, note2Exercice, note3Exercice))
var calculMoyenneExercice = exerciceMoyenne


function niveau (calculMoyenneExercice){ // Je crée une Fonction, que je nomme, et à laquelle je donne une valeur.
	if (calculMoyenneExercice >= 15){
		return "Très bien !"
	}
	else if (calculMoyenneExercice >= 10){
		return "bien !"
	}
	else {
		return "Nous allons convoquer vos parents !"
	}
}
console.log(niveau(15, 15, 15))




function niveau (arr){ //JE DECLARE UNE FONCTION NOMMEE NIVEAU DANS LAQUELLE JE PLACE UN TABLEAU
	var moyenneExercice = (arr[0] + arr[1] + arr[2] + arr[3]) / arr.length // je calcule la moyenne grace à une VARIABLE dans laquelle j'additionne les entrées du tableau
	// GRACE À LA DIVISION PAR  "ARR.LENGTH", JE DIVISE TOUJOURS PAR LA LOGUEUR DU TABLEAU...	
	if (moyenneExercice >= 15){
		return "Très bien !"
	}
	else if (moyenneExercice >= 10){
		return "Bien !"
	}
	else {
		return "Nous allons convoquer vos parents !"
	}
}
console.log(niveau([19, 20, 19, 14, 0, 0, 0, 0])) // Je rappelle sur la console la Fonction et dans les parentheses Crochet, j'appelle les valeurs presentes dans le tableau.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            //  LES OBJETS//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// on peut y stocker beaucoup de chose
// LES VARIABLES que je met dans mon objet
var poussieres = 500; 
var oignons = 3

var magieNoire = 34
var magieBlanche = 43
var sorts = [magieNoire, magieBlanche]

var force = [15]
var faiblesse = ["peche", poussieres, oignons]
var activites = ["chasse", "magie", sorts]


///////////////////////////////////////////////

let ninja = { // cet OBJET est une CONSTANTE, et j'y ai mis un tableau (array)
    force, faiblesse, activites
}
//////////////////////////////////////////////
ninja.force = 20
ninja.poussieres = 600
ninja.arme = "sabre" //Pour AJOUTER des CARACTERISTIQUES dans mon OBJETS NINJA
ninja.defense = "bouclier"
ninja.spell = "fire"
ninja.sorts = "magieTresNoire"
ninja.magieTresNoire = 900

delete ninja.defense //Pour lui ENLEVER des CARACTERISTQUES 

var requete = poussieres // Pour aller chercher une caracteristique en particulier
console.log(ninja)

console.log(ninja.hasOwnProperty("force")) // Permet de savoir avec HASOWNPROPERTY s'il a telle ou telle propriete



let samourai = new Object(); // JE CREE UN OBJET ///////////////////////////////
    var allergie = "Respiratoire"
    var maladie = "Asthme"
    var puissance = 50
    var vitesse = 60
    var agilite = 70
    var intelligence = ["Detective", "Persuasion"]
    var magieBlch = 67
    var magieNoire = 56
    var sabre ="Katana"
    var jet = "arc"

    samourai.force = [puissance, vitesse, agilite, intelligence]
    samourai.magie = [magieBlch, magieNoire]
    samourai.faiblesse = [allergie, maladie]
    samourai.arme = [sabre, jet]

    samourai.compagnons = new Object() // JE CREE UN AUTRE OBJET DANS LE PREMIER, DANS SAMOURAI, JE CREE UN NOUVEL OBJET COMPAGNONS
        var oiseaux = "Corbeaux"
        var canides = "Loup"
        var felin = "Chats"
        
        samourai.compagnons.animaux = [oiseaux, canides, felin]
        samourai.compagnons.aide = "Ecuyer"
        
        samourai.compagnons.capacitesCompagnons = new Object(); // J'EN CREE UN TROISIEME DANS LE DEUXIEME.
                var vue = 1000
                var odorat = 990
                var toucher = 890
                var ouie = 786
                samourai.compagnons.capacitesCompagnons = [vue, odorat, toucher, ouie, "force", "Celerité", "férocité"]
                
                    samourai.compagnons.capacitesCompagnons.empathie = new Object();
                        samourai.compagnons.capacitesCompagnons.empathie = 0
                

console.log(samourai)

samourai.arme.sabre = "Wakisashi"

//console.log(samourai.hasOwnProperty("perdreaux")) //JE CHERCHE UNE PROPRIETE AVEC HASOWNPROPERTY


const combattant = { // ==================>> JE PEUX CRÉER UN OBJET AUSSI COMME CELA !!!
    protection: "Armure", 
    arme:["Epée","Katana", "poignard"],
    magie : ["Blanche", "Noire"],
    casque : "Heaume"
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////    LES BOUCLES    ///////////////  WHILE & FOR //////////////////////////
// WHILE est un MOT CLEF , comme IF, ou ELSE IF....

// LES BOUCLES PERMETTENT DE SE DELESTER DE TACHES REPETITIVES GRACE À IF...
// L'ANALYSE REPETITIVE S'EFFECTUE ET TA,T QUE LA CONDITION EST RESPECTEE, LE CODE NOUS RENVOIE DU TRUE ET CONTINUE...

var i = 0
var triangle = [] // JE CREE UN ARRAY VIDE NOMME TRIANGLE
var triangle2 = []
var triangle3= []
var triangle4= []

while (i < 10){ // Tant que i est inferieur à 10
    i++         // J'augmente de un i à chaque tour de boucle
    triangle.push("@") // je PUSH un truc à l'ARRAY Triangle, et jusqu'à ce qu'il en ait 20 à suivre, il continuera
    console.log(triangle)
}

// AINSI ON PEUT RAJOUTER DES DONNEES A UN TABLEAU.

for (var i2 = 0 ; i2 < 10 ; i2 += 2 ){ // JE DECLARE MA VARIABLE ET LES CONDITIONS DANS LES PARENTHESES DE FOR
    triangle2.push("&&")              // Tant que i2 est supérieure à 0, tu rajoutes i2 à chaque boucle de FOR)
    console.log(triangle2)            // POUR DECREMENTER DE UN EN UN JE MET --
}
for (let i3 = 20 ; i3 >= 0; i3 -= 2){
    triangle3.push("Xav")
    console.log(triangle3)
}
for (let i4 = 10 ; i4 >= 0; i4 -= 2){
    triangle4.push("Marie")
    console.log(triangle4)
}

let arr5 = [1, 2, 3, 4]
let total = 0
for (var i5 = 0; i5 < arr5.length ; i5++){
    total += arr5[i5]
}
console.log(total)

let arr6 = ["Je", " suis", " content", " d'apprendre", "le ", "JS !", " Et ", "c'est cool !"] // JE PEUX CONCATENER DES STRINGS
let phrase2 = "" // On met "" au resultat car on ne sait pas s'il y a des trucs à ajouter, mais on sait que ce sera une STRING
for (var i6 = 0; i6 < arr6.length ; i6++){ // POUR VARIABLE i6=0 (LA 1ERE ENTREE DU TABLEAU), et que nous aurons autant d'iteratiOn que d'entrée dans le tableau ARR.LENGTH, je rajoute une ITERATION A CHAQUE BOUCLE.
    phrase2 += arr6[i6] // JE PREND LE TOTAL AUQUEL JE LUI AJOUTE SON TOTAL
}
console.log(phrase2)


// POUR CALCULER UNE MOYENNE  DE FACON DYNAMIQUE POUR QU'A CHAQUE RAJOUT LE CALCUL SE METTE A JOUR

function calculerMoyenne (arr7){
    let totalDeCetteMoyenne = 0 // On initialise le RESULTAT à 0.
    for (let moyenne1 = 0 ; moyenne1 < arr7.length ; moyenne1++){
        totalDeCetteMoyenne += arr7[moyenne1]
    }
    return totalDeCetteMoyenne / arr7.length // LA DIVISION SE FAIT JUSTE LA !!!!!
}
console.log(calculerMoyenne([10, 10, 10, 14, 14]))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////// UNE BOUCLE DANS UNE BOUCLE /////// FOR DANS FOR ///////////////////

function plusUn (arr8){
    for (var i5 = 0 ; i5 < arr8.length ; i5++ ){
        for (var j5 = 0 ; j5 < arr8[i5].length; j5++ ){
            arr8[i5][j5] += 1
        }
    }
    return arr8 
}
console.log(plusUn ([[1, 2], [3, 4],[5, 6], [7, 8]]))

////////////////////////////////////

function plusUnMot (arr9){
    for  (var i6 = 0  ; i6 < arr9.length ; i6++ ){
        for (var j6 = 0 ; j6 < arr9[i6].length ; j6++){
            arr9[i6][j6] += "Z"
        }
    }
    return arr9
}
console.log(plusUnMot([["A"], ["B"], ["C"]]))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////  LES NOMBRES ALEATOIRES //////////////////////

var hasardDecimaux = Math.random() // Je n'obtient que des chiffres decimaux de 0 à 1
console.log(hasardDecimaux)

var hasardJusqua6 = Math.floor(Math.random() * 6) // J'obtiens des nombres entiers de 0 à 6 GRACE A LA MULTIPLICATION PAR 6
console.log(hasardJusqua6)

var hasard = Math.floor(Math.random() * 12 + 1) // J'obtiens des nombres entiers de 1 à 12 grace a LA MULTIPLLICATION PAR 12 ET AU " +1" après le 6
console.log(hasard)

// MATH est un Objet NATIF JS, on les appelle avec une majuscule.
// On va ensuite lui apeller la PROPRIETE RANDOM, qui nous renvoie des chiffres decipaux entre 0 et 1 sans jamais atteindre le 1.
// C'est la PROPRIETE FLOOR que l'on rajoute à MATH qui nous permet d'avoir l'ARRONDI à l'ENTIER INFERIEUR.


function rangHasard(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
// Tu me RETURN un nb ENTIER (FLOOR) entre 1 et 50
// Pour avoir le nombre de chiffre de l'interval, je SOUSTRAIT LE MIN du MAX, et j'ai mes 50 rangs.
// Auquel j'aditionne UN pour partir de 1.
// en faisant le + MIN, il part de notre minimum.
}
console.log(rangHasard(0, 50))


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// E X E R C i C E //////////////////////////////////////////////////////
/////// R A N D O M I S E R  UN TABLEAU ET SES ENTREES /////////////////////////////////////////////



function randomize (arr11){
    let temp = 0  // une variable INITIALISEE à 0 TEMPORAIRE, on ne sait pas quelle valeur elle aura
    let random = 0  // IDEM, j'initialise à 0, car elle va STOCKER UN NOMBRE ALEATOIRE.
    
    for (let tab = 0 ; tab < arr11.length ; tab++ ) { // JE VAIS CHERCHER CHACUNE DES ENTREES DU TABLEAU
        
        random = Math.floor(Math.random() * arr11.length) // ICI, J'ATTRIBUE A RANDOM UN NOMBRE ALEATOIRE ENTRE 1 et 8 
// PAS DE +1 CAR ON DEMARRE A LA POSITION 0.
        temp = arr11[tab] // JE MET DE COTE UN CHIFFRE
        arr11[tab] = arr11 [random] // JE REMPLACE LE PREMIER PAR UN AUTRE CHIFFRE
        arr11[random] = temp // ET JE REMPLACE LE 1er CHIFFRE DEPLACE PAR L'AUTRE. LA VALEUR TEMPORAIRE DE TEMP.
    }
    return arr11
}
console.log(randomize([1, 2, 3, 4, 5, 6, 7, 8])) // ON DEFINIT ICI LES VALEURS DU TABLEAUX.




//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// E X E R C i C E /////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
//////// LA FONCTION MAP.
// ELLE FAIT LE TOUR D'UN CONTENANT, L'ANALYSE ET SAIS COMBIEN IL Y A DE MODIFICATIONS A FAIRE EN FONCTION DU CONTENU
// MAP VA SAVOIR QU'il FAUT FAIRE UN "PLUS 2" AU 1, puis au 2, puis au 3....


var arr12 = [1, 2, 3, 4, 5] // JE DECLARE UNE VARIABLE AVEC JUSTE DES CHIFFRES
var arrPlusDeux = arr12.map(function(nombre){
// GRACE UNE FONCTION ANONYME QUI NE SERT QU'ICI, avec un PARAMETRE : NOMBRE.
    return nombre + 2 // JE LUI DONNE LES DETAILS 
})
console.log(arrPlusDeux)

let arr13 = ["Je", "suis", "content", "!"]
let arrPlusEsp = arr13.map(function(string){
    return string + " "
})
console.log(arrPlusEsp)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

//BLOCK VS FUNCTION SCOPE (Le Scope, c'est jusqu'ou une variable est disponible.)

// LE PROBLEME DU VAR =====> UN SCOPE DE FUNCTION /////////////////////////////////////////////////////////////////////////////////
// Avec VAR, on peut declarer sur la meme variable, "arme" par exemple, deux valeurs ("lance" et "epee" )différentes.
// Ca fonctionne mais ca n'est pas clean, Ca alourdit le code, et ça ne le rend moins lisible.
// Les Navigateurs vont prendre toutes la variables et les mettre en haut du code, mais ils ne prennent pas leurs valeurs.
// Du coup, les VARS peuvent ressortir comme UNDIFINED.
// Une VAR declarée dans un BLOCK FUNCTION ne peut etre utilisée en dehors dudit BLOCK. SAUF, si elle est declarée avant.

// CEPENDANT, LA VARIABLE PEUT ETRE DISPO DANS UN BLOCK DE CONDITION "IF"

// LET & CONST ====> UN SCOPE EN BLOCK, ILS FONCTONNENT DE LA MEME FACON AU NIVEAU DE LEUR SCOPE DE BLOCK.

// AVEC LET, JE NE PEUX PAS DECLARER DEUX VALEURS DIFFERENTES, SAUF SI LA PREMIERE EST HORS D'UN BLOCK ET LA DEUXIEME A L'INTERIEUR !
// LES DEUX VARIABLES AURONT DEUX VALEURS DIFFERENTES ET BIEN DISTINCTES.

// LA VALEUR de la CONSTANTE NE PEUT PAS ETRE CHANGEE CAR COMME SON NOM L'INDIQUE, ELLE EST CONSTANTE !
// SI AVEC CONSTANTE, JE DÉCLARE UN OBJET : ENTRE { object }, je peux modifier les ¨PROPRIETES internes de l'objet CONSTANTE mais pas //la GLOBALITE de l'objet.
// ===============================> ON UTILISE CONST PAR DEFAUT : QUAND ON SAIT QUE LA VALEUR NE CHANGERA PAS !
// ===============================> ON UTILISE LET QUAND ON SAIT QUE LA VALEUR POURRA ETRE MISE à JOUR.
// ===============================> PLUS JAMAIS DE VAR !!!


/////////// TEMPLATES STRINGS ===========> LES BACKTICKS <=================///////////////////////////////////////////////////

const perso670 = { // CECI EST UN OBJET !!!
    nom671 :"Jon Snow",
    //force672: 15,
    arme673:"Epée",
    magie674 : ["Magie Blanche", "Magie Noire"],
    defense675 : ["Bouclier", "cotte de maille"] //["Vetements en cuir", "Gants renforcés"]
}
const texte675 = `${perso670.nom671} a une force de ${perso670.force672} et une ${perso670.arme673}`;
console.log(texte675)

// AVEC LE $ ET LES ACCOLADES, JE PEUX FAIRE DE CONCATENATION PAR EXTRAPOLATION, DES TEMPLATES STRING.
// JE PEUX METTRE CE QUE JE VEUX ENTRE LES $ et les BACKTICKS, MEME UNE CONDITION TERNAIRE...
// EST CE QUE PERSO679 est PERSO679, SINON XAVIER !

const texte681 = `${perso670.nom671 ? perso670.nom671 : "xavier"} est mon nom, et a une force de ${perso670.force672 ? perso670.force672 : 673} ! !`
console.log(texte681)

const texte685 = `    
                <ul>
                    <li>Nom : ${perso670.nom671}</li>
                    <li>Force : ${perso670.force672 ? perso670.force672 : 673}</li>
                    <li>Arme : ${perso670.arme673}</li>
                    <li>Magie : ${perso670.magie674}</li>
                    <li>Defense : ${perso670.defense675}</li>
                 </ul>
`

console.log(texte685)

// GRACE AUX BACKTICKS, JE PEUX METTRE EN PLACE DES TABLEAUX, UL & LI, ET DES CONDITIONS TERNAIRE DEDANS...

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function disMonNom (nom = "No name"){ // C'est un parametre par défaut s'il n'y a rien d'inscrit au rappel de la fonction.
    console.log(nom)
}
disMonNom("Xavier")


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////// D E S T R U C T U R I N G ................................

const joueur715 = {
    nom716 : "Karadoc",
    ami : "Perceval",
    arme : "Epée",
    but : "Trouver le Graal",
    type : "Chevalier",
    don :["La bouffe", "Les vins"]
}

const { nom716, ami, arme, but, type, roi = "Arthur", don} = joueur715 ; 
console.log(nom716, ami, arme, but, type, don)


///ARRAY DESTRUCTURING

const stats730 = [14, 56, 78, 8, 9 , 90, 76, 87, 786]
const [attaque731, defense731, magie731, vitesse731] = stats730
console.log(attaque731, defense731, magie731, vitesse731)
//On peut décomposer le contenu d'un tableau en reprenant les crochets, le tout egal au nom de la const déclarée

///// ON PEUT ECHANGER LES CARTES ENTRE LES DEUX VARIABLE, LE JEU DES CHAISES MUSICALES !!!
let maCarte = "Dracofeu"
let taCarte = "Ratata"

let saCarte = "Pignouff!"
let votreCarte = "Crevette"
let monPorteCarte = "zut, je l'ai perdu !"

let temp = maCarte     //fichier temporaire pour permettre le SWITCH, on y met la "M" pour laisser sa place vacante
maCarte = taCarte  // La "T" va dans la place du M, pendant que la M est partie dans la "TEMP".
taCarte = temp  // au final, la "M" va dans la place de la "T", libérée

[saCarte,  votreCarte,  monPorteCarte] = [monPorteCarte,  votreCarte, saCarte] // ........DESTRUCTURING....

console.log(votreCarte, monPorteCarte, saCarte)

/////////////////////////////
////////////// S I M P L I F I C A T I O N  EN ES6

function randomize (arr11){
    let temp = 0  
    let random = 0  
    
    for (let tab = 0 ; tab < arr11.length ; tab++ ) { 
        
        random = Math.floor(Math.random() * arr11.length) 
        temp = arr11[tab] 
        arr11[tab] = arr11[random] 
        arr11[random] = temp 
    }
    return arr11
}
console.log(randomize([1, 2, 3, 4, 5, 6, 7, 8]))


//=====================  VERSION ES6 ===========================================================

function randomize772 (arr772){
    for (let tab = 0 ; tab < arr772.length ; tab++ ) { 
        const random = Math.floor(Math.random() * arr772.length)
        [arr772(tab), arr[random]] = [arr[random], arr772(tab)]
}
    return arr772
}
console.log (randomize([1, 2, 3, 4, 5, 6, 7, 8]))




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////// LE SPREAD OPERATOR " ... " JE PREND TOUT CE QUE JE TROUVE QUAND ON ME DONNE UN TRUC ITERABLE (JE PEUX M4Y DEPLACER DE UN EN //UN)

const listeAmis = ["Jean", "Pierre", "Paul", "Jacques", "Fredo", "Jaja"]
const listeFamille = ["Marie", "Ewen", "Arthur", "Morgane"]
const ListeANimaux = ["Pixel", "Paillette"]
const listeCourse = ["viande", "fromage", "legumes", "fruits"]

//const liste = [...listeAmis, "Furfande", ...listeFamille] // Je peux rajouter du texte SPRING la dedans.
//const copieListe = [...liste]
//copieListe.push("Furfande")
//copieListe.push(...listeCourse)

//console.log (copieListe)

// =============>> EXERCICE GUIDE <<===========  LE REST OPERATOR
// ======================>> AVEC CE TYPE DE CODE, JE FAIS "PLUS... " A CHAQUE COMPOSANT D'UN TABLEAU QUE JE QUADRILLE GRACE A MAP .

function plusUn (...args) { // Les ... REPRESENTENT TOUS LES ARGUMENTS QUE NOUS ALLONS POUVOIR PASSER ET/OU RAJOUTER
    
    console.log(args)// renvoie un tableau.
    console.log(...args) // revoie un listing.
    
    const arr804 = [...args] // UN TABLEAU AVEC LE lISTING ... DE TOUS NOS ARGUMENTS
    return arr804.map(num => num + 10) // Je retourne le tableau, je le MAP (j'en fais le tour), et à chaque nb (num), je fais +10
} // Avec la fonction flechée => pour chaque num, il me renvoie num+..

console.log(plusUn (1, 2, 3, 4, 5, 6, 7))

//=====================================================================================================================
//=====================================================================================================================
//=====================================================================================================================

const arr819 = ["chien", "chat", "girafe", "lezard", "varan"]
console.log(arr819.includes("chien"))

// =================>>> Avec le INCLUDES, je demande à l'arr819, s'il CONTIENT : "chien", il me renvoie TRUE.
