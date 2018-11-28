
/**********************************         */

// Première partie 

// Contenus du Quiz  
var questions = ["Lequel de ces personnages est mort ?", "Quel est le symbôle du village de Suna ?", 
"Lequel de ces personnages est Kage ?", "Lequel de ces personnages est Orochimaru ?", 
"Qui est amoureuse de Naruto ?", "Qui porte le Rinnegan ?", "Qui porte le Byakugan ?", 
"Qui a été le l'enseignant de Naruto ?", "Qui ne maitrise que le Taijustu ?", "Qui n'appartient pas au clan Hyuga ?"
 ];
var imgsName = ["Mort", "village", "kage", "Amour", "Amour", "Rinnegan","Rinnegan","kage","tai","Hyuga" ];
var bonneReponse = ["c", "c", "a","c","a", "b","a","c","a","c"];

// Variables de notre jeu

var questionIndex = 0; /* stocker la question en cours */ 
var  pointByAnswer = 5; /* donner des points pour chacune des bonnes réponses » c toi qui choisit */ 
var score = 0;
var barScore=0;
var canPlay = true; /* variable qui peut empêcher un joueur de jouer quand il a déjà cliquer ou atteint le nbre max de point */ 
var echec = 0; // Pour ne pas que la deuxième chance, permettent au joueur de rejouer à l'infini.

var ConteneurTempsEcoule = document.querySelector(".scoreBar");
var tempsEcoule = document.querySelector(".evolution");
var progress = 0; 



// Éléments 

var question = document.querySelector("#js-question");
var scoreBox = document.querySelector("#js-score");  /* pour afficher les points du joueur */
var boutons = document.querySelectorAll(".box-choice");

var imgContainers = document.querySelectorAll(".img-box");

// Ajouter les listeners 

for (var i = 0; i<boutons.length; i++){

    boutons[i].addEventListener("click", checkAnswer);

}

/***********************************************         */
/***********   Deuxième partie: création de TOUTES LES FONCTIONS  ************************/


// fonctionnalités -- 1) 2eme Chance après une 1ère erreur (fait) / 2) Barre de progression (temps limité) /
// 3) bilan de jeu à la fin sous forme d'alerte (classant les joueurs en fonction de leur score en 3 catégories)

/*  
- le joueur répond mal une 1ère fois » 2eme Chance 
- il échoue à la mm question une 2ème fois » Partie terminée !
- 1ère essai:râté, 2eme: réussi » next question 
- Lorsque le joueur accède à la nouvelle question le compteur d'erreur retombe à zéro (var echec = 0)
- distribution de point par mérite (bonne rep du 1er coup » 5 pts, 2eme » 3) 
*/

/* 
Liste de toutes les fonctions: showQuestion(), ShowImg(), checkAnswer(), updateEchec()/updateScore(), 
deuxiemeChance(), goNextQuestion(), SetUnselectable(), setEndGame()...
*/



/**** Affiche la question */
function showQuestion() {

    // utiliser une variable pour permettre un dynamisme, pour que les questions changent en fonction du contenu de l'array  

    question.textContent = questions[questionIndex]; // Incrémenter l'index de la question courante
    var imgBasePath = "img/quiz/" + imgsName[questionIndex]; 
    showImages(imgBasePath);
    clearInterval(f);
    progress = 0; 
    TimeMovingBar();
   

    // Redonner le droit au joueur de répondre

    canPlay = true; 
   
    // il faut effacer "le compteur d'échec" à chaque question, puisqu'à chaque question, le joueur à le droit à une erreur

}

/************* */


function showImages(imgPath) {

    for(var i = 0; i<3; i++){
    var nomImg = imgPath + "-" + (i+1) + ".jpg";
    imgContainers[i].src = nomImg;
    imgContainers[i].classList.remove("unselectable");
    }

}

/*****************************************************                */


// démarrer la partie en afficher la première 

showQuestion();

/*****************************************************                */


function checkAnswer(e) {

    
    if (!canPlay) return; //if (canPlay == false) return;
    canPlay = false; 
    SetUnselectable();
    

    var reponse = e.target.dataset.reponse;

    if (reponse == bonneReponse[questionIndex]){
        question.textContent = "Bravo, c'est la bonne répoonse !";
        clearInterval(f);
        updateScore();

        console.log(echec);
        
        // fonctionnalité 2: couleur claire en cas de bonne réponse autour de la bonne réponse
    }

     // Après une 1ère erreur, le joueur obtient une deuxième chance. 


    else if (reponse != bonneReponse[questionIndex] && echec<1){

        question.textContent = "Nooon !"
        setTimeout(deuxiemeChance,1500);
        setTimeout(showQuestion,3000);
        
        updateEchec();
        updateBarScore();
        console.log(echec);
        console.log(barScore);
        console.log(score);
    }


    // Si le joueur fait plus d'une erreur » la partie se termine.

    else {

        question.textContent = "Oh, noooon. Dommage, la partie est terminée !"
        setTimeout(setEndGame, 1000);
        progress=100;
        //console.log(progress);
        //console.log(echec);
      
    }
    
}

/**************************************************************/

// Fonctionnalité deuxièmeChance 

// Créer une fonction deuxièmeChance - Permettre au joueur de rejouer après une erreur

function deuxiemeChance(){

    question.textContent = "Prépares-toi, tu as une deuxième chance !";

    for (var i=0; i<3; i++){
        var nomImg = "img/quiz/placeholder.jpg";
        imgContainers[i].src=nomImg;
     
    }



}

function updateEchec(){
   
    // ajoute de la valeur en cas de 1er échec 
    echec += 1;


}

/****************************************/

function SetUnselectable() {

    for (var i = 0; i<3; i++){
        imgContainers[i].classList.add("unselectable");
    }
}


function updateScore(){
   
   if (echec==0){
    
    // ajoute de la valeur au score 
    score = score + pointByAnswer;
    barScore = barScore + pointByAnswer;
   

    // Mettre à jour l'affichage
    scoreBox.textContent = "Score:" + score; 

    getNextQuestion();

   } else {

     // ajoute de la valeur au score (à noter que celle ci est - importante car le joueur n'a pas répondu du 1er coup)
     score = (score + pointByAnswer)-2;

     // Mettre à jour l'affichage
     scoreBox.textContent = "Score:" + score; 
 
     getNextQuestion();

   }
   

}


function getNextQuestion() {

    questionIndex = questionIndex + 1; 
    

    if(questionIndex >= questions.length){

        setTimeout(setEndGame, 3000);

    }

    
    else {

        // Si le joueur répond bien une 1ère fois, il accède à la question suivante
        setTimeout(showQuestion, 3000);

       
       
          // Le nbre d'échec du joueur retombe à zéro, à chaque nouvelle question. 
        echec=0; 

        

    }

}

function setEndGame(){

    question.textContent = "La partie est terminée, vous avez accumulé" + score + "points.";

    //fonctionnalité fin de partie, félicitations.. récapitulatif des points et classement du joueur

    if (score < 20){

        alert("L'important c'est de participer. Bienvenu à l'académie jeune genin");

    }

    else if (score>20 && score<40){

        alert("Bravo, ta maîtrise fait de toi un chuunin !");

    }

    else if (score > 40){

        alert("Que l'on te confie les commandes de la nation, Kage. Tu es trop fort(e) !");

    }



    for (var i=0; i<3; i++){
        var nomImg = "img/quiz/placeholder.jpg";
        imgContainers[i].src=nomImg;
     
    }


}

//remettre le curseur par défaut 
// Création de la variable "f"
var f;

/* La fonction TimeMovingBar() a pour rôle d'appeler toutes les 1000 ms (intervalle)
la fonction frame() */
function TimeMovingBar(){

    f = setInterval(frame, 1000);
} 

/* La fonction frame() déclenche l'animation à l'origine de la progression de la barre */

function frame() {

    if (progress == 100){ // au début la variable progress = 0, Quand elle atteint 100
        
    clearInterval(f); // L'intervalle f est effacé (la barre cesse d'avancer)
    setTimeout(setEndGame, 1000); // La fonction SetEndGame est appelée 1s plus tard (game over)
    progress = 0; // Quand Progress atteint son maximum, la variable retourne à sa valeur initiale
    tempsEcoule.style.width = progress + "%"; // On change la largeur de la div en fonction de progress
    question.style.border = "3px solid coral"; /* facultatif, c'est juste pour générer une bordure 
    autour de la question */

}  else { 

        progress+=10 ; // progress évolue de 10 en 10
        tempsEcoule.style.width = (progress) + "%"; // la div s'élargie de 10% en 10%
        //console.log(progress);
    } 
} 





