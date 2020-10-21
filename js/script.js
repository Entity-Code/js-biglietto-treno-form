// INPUT
   // richiesta nome e cognome
   var nomeCognome = document.getElementById("nomeCognome");

   // richiesta numero kilometri
   var numeroKm = document.getElementById("numeroKm");

   // richiesta numero età
   var numeroEta = document.getElementById("numeroEta");

   //biglietto
   var biglietto = document.getElementById("biglietto");
   
   // EVENTI
      // Genera
      var genera = document.getElementById("genera");
      genera.addEventListener("click",
   	  function() {
          console.log(("Nome e Cognome : "), nomeCognome.value);
          console.log(("Numero km : "), numeroKm.value);
          console.log(("Numero età : "), numeroEta.value);

          // display biglietto on
          biglietto.className = "dBlock";
   	   }
      );

      // Annulla
      var annulla = document.getElementById("annulla");
      genera.addEventListener("click",
   	  function() {
           // display biglietto off
           biglietto.className = "dNone";
   	   }
      );


// prezzo biglietto
// var prezzoBiglietto = (0.21 * numeroKm).toFixed(2);


// // SCONTI
// if (numeroEta < 18) { // sconto under 18
//    sconto = (prezzoBiglietto / 100) * 20; //sconto minorenni del 20%
//    prezzoFinale = (prezzoBiglietto - sconto).toFixed(2) + (" €") + (" (-20%)");
// } else if (numeroEta >= 65){  //sconto over 65
//    sconto = (prezzoBiglietto / 100) * 40; //sconto over 65 del 40%
//    prezzoFinale = (prezzoBiglietto - sconto).toFixed(2) + (" €") + (" (-40%)");
// } else {
//    prezzoFinale = prezzoBiglietto + (" €");
// }


// OUTPUT












// INPUT
   // sconto
   // var sconto;
   // var prezzoFinale;
   // richiesta numero età passeggero
   // var numeroEta = parseInt(prompt("Benvenuto! Quanti anni hai?"));
   // console.log(numeroEta);

   // richiesta numero kilometri
   // var numeroKm = parseInt(prompt("Per quanti kilometri devi viaggiare?"));
   // console.log(numeroKm);

// prezzo biglietto
// var prezzoBiglietto = (0.21 * numeroKm).toFixed(2);
// console.log(prezzoBiglietto);

// // SCONTI (con approssimazione a due decimali)
// if (numeroEta < 18) { // sconto under 18
//    sconto = (prezzoBiglietto / 100) * 20; //sconto minorenni del 20%
//    prezzoFinale = (prezzoBiglietto - sconto).toFixed(2) + (" €") + (" (-20%)"); //approssimazione
//    // console.log(("Valore sconto: " + sconto));
//    // console.log("Prezzo con sconto del 20% : " + prezzoFinale);
// } else if (numeroEta >= 65){  //sconto over 65
//    sconto = (prezzoBiglietto / 100) * 40; //sconto over 65 del 40%
//    prezzoFinale = (prezzoBiglietto - sconto).toFixed(2) + (" €") + (" (-40%)"); //approssimazione
//    // console.log(("Valore sconto: " + sconto));
//    // console.log(("Prezzo con sconto del 40% : ") + prezzoFinale);
// } else {
//    prezzoFinale = prezzoBiglietto + (" €");
// }
//
// // OUTPUT
// document.getElementById("prezzo").innerHTML = prezzoFinale;
