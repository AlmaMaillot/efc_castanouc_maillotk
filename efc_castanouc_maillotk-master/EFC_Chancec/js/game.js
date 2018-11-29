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

////////////////////////////////////////////////////// Fonctionalité Numero 03: Filtre





