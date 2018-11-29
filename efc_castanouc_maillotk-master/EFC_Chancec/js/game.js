//////////////////////////////////////////////////////// Fonctionalité Numero 01 » Page personnage

// Récuperation des Boites pour les contenue 
var textContainer = document.querySelector(".right");
var titreContainer = document.querySelector(".left");
var boiteImgHero = document.querySelector(".flex-img");

//Récuperation de boutons des personnages
var btnHero = document.querySelectorAll(".bouton");
console.log(btnHero);

//Récuperation des images des Héro
var imgHero = ["img/personnages/phase-1.jpg","img/personnages/phase-2.jpg","img/personnages/phase-3.jpg","img/personnages/phase-4.jpg","img/personnages/phase-5.jpg"]

 //Variable qui contient le bouton precedent
 var boutonPrecedent = document.querySelector("#bouton-1");

 //Contenue des Titres
 var titre = ["phase-1","phase-2","phase-3","phase-4","phase-5"]
 //Contenue des Descriptions

 var description = ["phase-1.","phase-2","phase-3","phase-4","phase-5"]


 for(var i = 0; i < btnHero.length; i++) {
    btnHero[i].addEventListener("click", checkHero);
}


function checkHero(e){
    console.log("OK");
    e.preventDefault();
    if (boutonPrecedent){
        boutonPrecedent.classList.remove("selectedBtn")
    }
    var btn = e.target;
    btn.classList.add("selectedBtn");
    boutonPrecedent = btn;

    var attribu = e.target.dataset.index;
    titreContainer.textContent = titre[attribu];
    textContainer.textContent = description[attribu];
    boiteImgHero.src = imgHero[attribu];
}

////////////////////////////////////////////////////// Fonctionalité Numero 02: Galerie d'image 

// récupérer les images 

var imageGalerie = ["img/galerie/0.jpg", "img/galerie/1.jpg", "img/galerie/2.jpg", "img/galerie/3.jpg", "img/galerie/4.jpg",
"img/galerie/5.jpg", "img/galerie/6.jpg","img/galerie/7.jpg","img/galerie/8.jpg"];

// Ajout d'un index pour le slideshow

var index = 0; 

// Récupérer le contenant

var conteneur = document.querySelector("#js-box-img");

// Récupérer la barre d'évolution 1/x

var evo = document.querySelector(".number");

// récupérer les boutons

var fleches = document.querySelectorAll(".zone");

// Attacher un évènement

for (var i = 0; i < fleches.length; i++ ){
    fleches[i].addEventListener("click", changeImage);   
    }

// Créer la fonction à l'origine du changement d'image

function changeImage(e){
btnId = e.target.id; 

    if(btnId == "js-btn-right" && index>=9){

        index=0; 
        conteneur.src = imageGalerie[index];
        pagination();

    }

    else if (btnId == "js-btn-right" && index>=0){

        index++;
        conteneur.src = imageGalerie[index];
        pagination();
              
    }

    else if (btnId == "js-btn-left" && index==0){
            
        index=9;
        conteneur.src = imageGalerie[index];
        pagination();
              

        }

    else if (btnId == "js-btn-left" && index>0) {

        index--;
        conteneur.src = imageGalerie[index];
        pagination();
        }


}

// Créer la fonction à l'incrémentation de la pagination

    function pagination(){

    var pageCourante = imageGalerie[index];
    var pageTotale = 10;
    var pageDepart; 

    if(pageCourante<pageTotale){

        pageDepart = 1;
        pageCourante = imageGalerie[index];
        evo.style.fontSize = "15px";

    }

    else if (pageCourante>pageTotale){

        pageDepart = 1;
        pageCourante = imageGalerie[index];
        evo.style.fontSize = "15px";
    }

    else if (pageCourante<1){

        pageDepart = 1;
        pageCourante = imageGalerie[index];
        evo.style.fontSize = "15px";
        

    }

    evo.textContent = (index+1) + "/" + pageTotale;


}

///////////////////////////////////////////////////// Fonctionalité Numero 03: Filtre

//////////////// 1er Partie: Triage de l'information (mots clés)


// Récupérer tous les éléments qui ont la classe "js-mot"

var lexique = document.querySelectorAll(".js-mot");

// Récupérer le champ du formulaire (qui va servir à filtrer les mots clés)

var inputField = document.querySelector("#barre");

// Ajouter un listener "keyup" » action qui a lieu quand on relâche la touche. La fonction sera lancée chaque fois qu'un caractère est rentré.

inputField.addEventListener("keyup", filteringList);


function filteringList(e){


    var characters = inputField.value.toUpperCase();
    
    for(var i=0; i<lexique.length; i++){

        console.log(lexique)
    
        var currentSearch = lexique[i].textContent.toUpperCase();
    
            if(currentSearch.indexOf(characters) == -1){
    
            lexique[i].style.display ="none";
            
            } else {
    
            lexique[i].style.display ="block";
    
            }
    
        }
    
    }

//////////////// 2ème Partie: Changement du contenu de la page 


//Récuperation des boutons (mots)

var btnLex = document.querySelectorAll(".js-bouton");

//Récuperation des divs dans lesquelles sont contenues les boutons 

var btnDiv = document.querySelectorAll(".js-mot");

// Récuperation des Boites pour les contenus
var searchConteneur = document.querySelector(".zoneDerecherche");
var lexiqueContaineur = document.querySelector(".lexique-article");
var lexiqueTitre = document.querySelector(".lexique-titre");
var lexiqueParaG = document.querySelector(".lexique-para");

// Contenu à insérer

var definition = ["Tentative criminelle contre une personne ou un lieu (surtout dans un contexte politique).", "Ensemble d'actes de violence (attentats, prises d'otages, etc.) commis par une organisation ou un individu pour créer un climat d'insécurité, pour exercer un chantage sur un gouvernement, pour satisfaire une haine à l'égard d'une communauté, d'un pays, d'un système.",
 "Avion de ligne moyen-courrier biréacteur à fuselage étroit produit par Boeing Commercial Airplanes de 1981 à 2004. C'est le plus grand avion passagers monocouloir de cet avionneur. Prévu pour remplacer le triréacteur Boeing 727 sur des itinéraires courts et moyen-courriers, le 757 a une plus grande capacité (200 à 289 passagers) sur une distance maximale de 5 830 à 7 600 km, selon la version.", "", "", "", "", "", ""];

//Contenu Titres
var titreLexique = ["Attentat","Terroriste","Boeing","Wall street","etc."]

 //Variable qui contient le bouton precedent
 var boutonPrecedentLexique = document.querySelector("#mot-1");

// Ajouter un évènement aux boutons

for(var i = 0; i < btnLex.length; i++) {
    btnLex[i].addEventListener("click", afficheContenu);
}


function afficheContenu(e){
    e.preventDefault();

    if (boutonPrecedentLexique){
        boutonPrecedentLexique.classList.remove("selectedMot")
    }

    var btn = e.target;
    btn.classList.add("selectedMot");
    boutonPrecedentLexique = btn;

    var attribut = e.target.dataset.mot;

    lexiqueTitre.textContent = titreLexique[attribut];
    lexiqueParaG.textContent = definition[attribut];
    lexiqueContaineur.style.border = "thick solid hsl(16, 100%, 100%)";
    btnLex.style.backgroundColor = "hsl(16, 100%, 100%);";
 
}







