// INPUT
   // sconto
   var sconto;
   var prezzoFinale;
   // richiesta numero età passeggero
   // var numeroEta = parseInt(prompt("Benvenuto! Quanti anni hai?"));
   // console.log(numeroEta);

   // richiesta numero kilometri
   // var numeroKm = parseInt(prompt("Per quanti kilometri devi viaggiare?"));
   // console.log(numeroKm);

// prezzo biglietto
var prezzoBiglietto = (0.21 * numeroKm).toFixed(2);
// console.log(prezzoBiglietto);

// SCONTI (con approssimazione a due decimali)
if (numeroEta < 18) { // sconto under 18
   sconto = (prezzoBiglietto / 100) * 20; //sconto minorenni del 20%
   prezzoFinale = (prezzoBiglietto - sconto).toFixed(2) + (" €") + (" (-20%)"); //approssimazione
   // console.log(("Valore sconto: " + sconto));
   // console.log("Prezzo con sconto del 20% : " + prezzoFinale);
} else if (numeroEta >= 65){  //sconto over 65
   sconto = (prezzoBiglietto / 100) * 40; //sconto over 65 del 40%
   prezzoFinale = (prezzoBiglietto - sconto).toFixed(2) + (" €") + (" (-40%)"); //approssimazione
   // console.log(("Valore sconto: " + sconto));
   // console.log(("Prezzo con sconto del 40% : ") + prezzoFinale);
} else {
   prezzoFinale = prezzoBiglietto + (" €");
}

// OUTPUT
document.getElementById("prezzo").innerHTML = prezzoFinale;
