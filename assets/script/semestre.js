var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById("s5");
var s6 = document.getElementById("s6");

// lorsqu'on clique sur s1 on telecharge le fichier s1.pdf
s1.addEventListener("click", function(){
    window.open("../assets/pdf/compétence_S1_Viggo_Casciano.pdf");
});

// lorsqu'on clique sur s2 on telecharge le fichier s2.pdf
s2.addEventListener("click", function(){
    window.open("../assets/pdf/compétence_S2_Viggo_Casciano.pdf");
});

// lorsqu'on clique sur s3 on telecharge le fichier s3.pdf
s3.addEventListener("click", function(){
    window.open("../assets/pdf/compétence_S3_Viggo_Casciano.pdf");
});

// lorsqu'on clique sur s4 on telecharge le fichier s4.pdf
s4.addEventListener("click", function(){
    alert("Le semestre 4 n'est pas encore disponible")
});

// lorsqu'on clique sur s5 on telecharge le fichier s5.pdf
s5.addEventListener("click", function(){
    alert("Le semestre 5 n'est pas encore disponible")
});

// lorsqu'on clique sur s6 on telecharge le fichier s6.pdf
s6.addEventListener("click", function(){
    alert("Le semestre 6 n'est pas encore disponible")
});