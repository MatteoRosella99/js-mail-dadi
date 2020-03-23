//variabili

var registrazioni = ["Paolo" , "Adamo" , "Piero" , "Morena" , "Luigi"];
var accesso;
var valuta;

//inserimento da parte dell'utente
console.log(registrazioni);
accesso = prompt("Inserisci il tuo nome");

//verifica del nome appropiato

valuta = registrazioni.indexOf(accesso);
console.log(valuta);

if(valuta >= 0){
  document.getElementById("tit").innerHTML = "Nome utente valido.<br> Benvenuto " + accesso
}
else{
  document.getElementById("tit").innerHTML = accesso + " non valido.<br> Refreshare la pagina e riprovare"
}
