// DICHIARAZIONE VARIABILI GLOBALI
// biglietto
var biglietto = document.getElementById("biglietto");
// Bottone genera
var genera = document.getElementById("genera");

// INIZIO EVENTO CLICK (GENERA)
genera.addEventListener("click",
  function() {
   // effetto
     biglietto.className = "show";
     if (biglietto.className === "show") {       
         biglietto.style.display = "block";
     }
   // effetto

     // DICHIARAZIONE VARIABILI INTERNE (INPUT)
      // richiesta numero kilometri
      var numeroKm = document.getElementById("numeroKm");
      // richiesta nome e cognome
      var nomeCognome = document.getElementById("nomeCognome");
      // richiesta numero età
      var numeroEta = document.getElementById("numeroEta");
      // %sconto
      var sconto;
      //Tipologia sconto (Minorenne, Maggiorenne oppure Over 65)
      var tipoSconto = document.getElementById("tipoSconto");
      // prezzo biglietto senza sconti
      var prezzoBiglietto = (0.21 * numeroKm.value).toFixed(2);
      // prezzo finale (scontato o non)
      var prezzoFinale;

      // CALCOLO SCONTI, TIPOLOGIA E PREZZO FINALE
     if (numeroEta.value < 18) { // sconto under 18
       sconto = (prezzoBiglietto / 100) * 20; //sconto minorenni del 20%
       prezzoFinale = (prezzoBiglietto - sconto).toFixed(2) + (" €") + (" (-20%)");
       tipoSconto.value = ("Sconto minorenne applicato");
    } else if (numeroEta.value > 65){  //sconto over 65
       sconto = (prezzoBiglietto / 100) * 40; //sconto over 65 del 40%
       prezzoFinale = (prezzoBiglietto - sconto).toFixed(2) + (" €") + (" (-40%)");
       tipoSconto.value = ("Sconto over 65 applicato");
    } else {
       prezzoFinale = prezzoBiglietto + (" €");
       tipoSconto.value = ("Nessuno sconto applicato");
    }

   // OUTPUT
    // output tipo di sconto
    document.getElementById("tipoSconto").innerHTML = tipoSconto.value;
    // output costo biglietto
    document.getElementById("prezzo").innerHTML = prezzoFinale;
    // output nome e cognome
    document.getElementById("nomeCognomeB").innerHTML = nomeCognome.value;
    // output numero carrozza
     var numeroCarrozza = Math.floor(Math.random()*10) + 1;
     document.getElementById("numeroCarrozza").innerHTML = numeroCarrozza;
    // output codice CP
    var numeroCP = 90000 + (Math.floor(Math.random()*10000));
    document.getElementById("codiceCP").innerHTML = numeroCP;
   }
);
// FINE EVENTO CLICK (GENERA)

// INIZIO EVENTO CLICK ANNULLA
// Annulla (reset form)
var annulla = document.getElementById("annulla");
annulla.addEventListener("click",
  function() {
     // reset del form
     document.getElementById("form").reset();
     // display biglietto off
     biglietto.style.display = "none";
   }
);
// FINE EVENTO CLICK ANNULLA
