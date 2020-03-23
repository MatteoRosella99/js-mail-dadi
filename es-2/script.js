//variabili

var numero1 , numero2;
var min , max;

//introduzione del gioco
window.alert("Benvenuto nel gioco dei dadi \nPremi OK per lanciare un dado");
window.alert("Ora è il turno del computer");

//minimo e massimo dado
min = Math.ceil(1);
max = Math.floor(7);

//assegnazione numero casuale di dado
numero1 = Math.floor(Math.random() * (max - min)) + min;
numero2 = Math.floor(Math.random() * (max - min)) + min;

//Valutazione del vincitore
if(numero1 > numero2){
  document.getElementById("tit").innerHTML = "Hai vinto sei un mostro!<br>Il tuo lancio era " + numero1 + " mentre quello del computer era " + numero2;
}
else if(numero1 < numero2){
  document.getElementById("tit").innerHTML = "Hai perso, che peccato!<br>Il tuo lancio era " + numero1 + " mentre quello del computer era " + numero2;
}
else {
  document.getElementById("tit").innerHTML = "Sento odore di un pareggio.<br>Entrambi i giocatori hanno fatto " + numero1;
}
