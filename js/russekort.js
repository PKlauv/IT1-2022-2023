
//Definerer variablene//

let russekortet = document.getElementById("russekortet")
let roodRadio = document.getElementById("roodRadio")
let rodMal = document.getElementById("rodaMal")
let blaaRadio = document.getElementById("blaaRadio")
let blaaMal = document.getElementById("blaaMal")

// gjør at at fargen og type russekort endres etter brukerens valg. 
//Hvis bruker trykker på rød, settes første function i gang der kortet blir rød med egen tittel
// Hvis bruker trykkes blå, settes andre funksjon i gang der kortet blir blått med egen tittel
blaaRadio.onclick = function (){
    blaaMal.setAttribute("id", "blaaMal")
}
roodRadio.onclick = function (){
    blaaMal.setAttribute("id", "rodMal")
}


var inpFilNavn = document.getElementById("inpFilNavn");
var bilde = document.getElementById("bilde")

function velgFil() {
    var aktueltFilNavn = URL.createObjectURL(inpFilNavn.files[0]);
    bilde.src=aktueltFilNavn;
}

inpFilNavn.addEventListener("change",velgFil);

