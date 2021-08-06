
let test = document.getElementById("test");

// Ce gestionnaire ne sera exécuté qu'une fois
// lorsque le curseur se déplace sur la liste
test.addEventListener("mouseenter", function( event ) {
  // on met l'accent sur la cible de mouseenter
  event.target.style.display = "block";
}, false);