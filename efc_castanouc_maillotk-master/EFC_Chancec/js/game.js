// Fonctionalité Numero 01

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








