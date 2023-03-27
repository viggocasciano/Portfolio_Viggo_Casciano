var projet1 = document.getElementById("projet1");
var projet2 = document.getElementById("projet2");
var projet3 = document.getElementById("projet3");
var projet4 = document.getElementById("projet4");

// lorsqu'on clique sur projet1 on telecharge le fichier projet1.pdf
projet1.addEventListener("click", function(){
    // affiche un message en haut de la page pour indiquer que le fichier est en cours de téléchargement
    alert("Projet en cours, il n'est pas encore accessible.");
});

// lorsqu'on clique sur projet2 on telecharge le fichier projet2.pdf
projet2.addEventListener("click", function(){
    window.open("https://trouvetonplat.alwaysdata.net/");
});

// lorsqu'on clique sur projet3 on telecharge le fichier projet3.pdf
projet3.addEventListener("click", function(){

    window.open("http://p2102056.pages.univ-lyon1.fr/site-pacman/main.html");
});

// lorsqu'on clique sur projet4 on telecharge le fichier projet4.pdf
projet4.addEventListener("click", function(){
    window.open("../assets/pdf/projet4.pdf");
});
