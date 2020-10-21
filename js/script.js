   // EVENTI
      // OUTPUT
      // biglietto
      var biglietto = document.getElementById("biglietto");
      // Bottone genera
      var genera = document.getElementById("genera");

      // inizio evento click
      // effetto
      genera.addEventListener("click",
   	  function() {

           biglietto.className = biglietto.className !== "show" ? "show" : "hide";
           if (biglietto.className === "show") {
              setTimeout(function(){
                 biglietto.style.display = "block";
              },0); // timed to occur immediately
           }
         // effetto

           // display block biglietto anteprima
           // biglietto.className = "dBlock";

           // DICHIARAZIONE VARIABILI
            // richiesta numero kilometri
            var numeroKm = document.getElementById("numeroKm");
            // richiesta nome e cognome
            var nomeCognome = document.getElementById("nomeCognome");
            // richiesta numero età
            var numeroEta = document.getElementById("numeroEta");
            var sconto;
            var tipoSconto = document.getElementById("tipoSconto");
            var prezzoFinale;
            var prezzoBiglietto = (0.21 * numeroKm.value).toFixed(2);

            // CALCOLO SCONTI E PREZZO FINALE
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


          // output tipo di sconto
          document.getElementById("tipoSconto").innerHTML = tipoSconto.value;
          // output costo biglietto
          document.getElementById("prezzo").innerHTML = prezzoFinale;
          // output nome e cognome
          document.getElementById("nomeCognomeB").innerHTML = nomeCognome.value;
          // output numero carrozza
           var numeroCarrozza = Math.floor(Math.random()*10);
           document.getElementById("numeroCarrozza").innerHTML = numeroCarrozza;
          // output codice CP
          var numeroCP = 90000 + (Math.floor(Math.random()*10000));
          document.getElementById("codiceCP").innerHTML = numeroCP;
   	   }
      );
      // fine evento click

      // Annulla (reset form)
      var annulla = document.getElementById("annulla");
      annulla.addEventListener("click",
   	  function() {
           // reset
           document.getElementById("form").reset();
           // display biglietto off
           biglietto.style.display = "none";
   	   }
      );
