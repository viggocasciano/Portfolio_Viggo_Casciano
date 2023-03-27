// récupère la nav bar et la met dans une variable
var navBar = document.getElementById("navBar");
let _1vh = Math.round(window.innerHeight / 100);
var img_footer = document.getElementById("img_footer");
var img_footer_2 = document.getElementById("img_footer_top");
var pres = document.getElementById("pres");
var comp = document.getElementById("comp");
var accu = document.getElementById("accu");
var proj = document.getElementById("proj");

var visible1 = document.getElementById("visible1");
var visible2 = document.getElementById("visible2");
var visible3 = document.getElementById("visible3");
var visible4 = document.getElementById("visible4");

window.onload = function() {
  window.scrollTo({
    top:0 * _1vh,
    behavior: "smooth"});
}

// si on a scrollé de 98vh alors on ajoute la classe "navBarScroll" à la nav bar, et on l'enlève si on scroll en haut
window.addEventListener("scroll", function () {
  const rect14 = visible4.getBoundingClientRect();

  if (window.scrollY > 98 * _1vh) {
    navBar.classList.add("navbarScroll");
  }else {
    navBar.classList.remove("navbarScroll");
  }
});

// quand on click sur img_footer, on scroll dans 103vh
img_footer.addEventListener("click", function () {
  // on scroll dans 103vh avec un delay de 0.5s
  const rect1 = visible1.getBoundingClientRect();
  const rect2 = visible2.getBoundingClientRect();
  const rect3 = visible3.getBoundingClientRect();

  if (rect1.top >= 0 && rect1.top < 103 * _1vh && rect1.bottom<=window.innerHeight) {
    img_footer_2.style.display = "block";
    window.scrollTo({
    top: 103 * _1vh,
    behavior: "smooth",
    });
  } else if (rect2.top >=0 && rect2.top< 103 *_1vh && rect2.bottom<=window.innerHeight) {
    window.scrollTo({
    top: 206.2 * _1vh,
    behavior: "smooth",
    });
  } else if (rect3.top >= 0 && rect3.top < 103 *_1vh  && rect3.bottom<=window.innerHeight) {
    window.scrollTo({
    top: 309.2 * _1vh,
    behavior: "smooth",
    });
    img_footer.style.display = "none"
  }
});

img_footer_2.addEventListener("click", function () {
  const rect12 = visible2.getBoundingClientRect();
  const rect13 = visible3.getBoundingClientRect();
  const rect14 = visible4.getBoundingClientRect();


  if (rect12.top >=0 && rect12.top< 103 *_1vh && rect12.bottom<=window.innerHeight) {
    img_footer_2.style.display = "none";
    window.scrollTo({
    top: 0 * _1vh,
    behavior: "smooth",
    });
  }
  else if (rect13.top >= 0 && rect13.top < 103 *_1vh  && rect13.bottom<=window.innerHeight) {
    window.scrollTo({
    top: 103 * _1vh,
    behavior: "smooth",
    });
  }
  else if (rect14.top >= 0 && rect14.top < 103 *_1vh  && rect14.bottom<=window.innerHeight) {
    window.scrollTo({
    top: 206.2 * _1vh,
    behavior: "smooth",
    });
    img_footer.style.display = "block"
  }
});

accu.addEventListener("click", function () {
  img_footer_2.style.display = "none"
  img_footer.style.display = "block"
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
});
// quand on click sur pres, on scroll dans 103vh
pres.addEventListener("click", function () {
  img_footer_2.style.display = "block"
  img_footer.style.display = "block"
  
    // on scroll dans 103vh avec un delay de 0.5s
    window.scrollTo({
      top: 103 * _1vh,
      behavior: "smooth",
    });
  });

  // quand on click sur comp, on scroll dans 103vh
comp.addEventListener("click", function () {
  img_footer_2.style.display = "block"
  img_footer.style.display = "block"
    
      // on scroll dans 103vh avec un delay de 0.5s
      window.scrollTo({
        top: 206.2 * _1vh,
        behavior: "smooth",
      });
    });
proj.addEventListener("click", function () {
      
        // on scroll dans 103vh avec un delay de 0.5s
        img_footer.style.display = "none"
        img_footer_2.style.display = "block"
        window.scrollTo({
          top: 309.2 * _1vh,
          behavior: "smooth",
        });
      });
