import { caricaFilmDalServer } from "./caricaFilm.js";
import { statoFilm } from "./statoFilm.js";
import { mostraFilmCorrente } from "./mostraFilm.js";
import { inizializzaEventiNavigazione } from "./eventiNavigazione.js";
import { inizializzaForm } from "./formAggiungiFilm.js";

async function avviaApplicazione() {
  // Carica i dati iniziali
  statoFilm.lista = await caricaFilmDalServer();
  
  // Mostra il primo film
  mostraFilmCorrente();
  
  // Attiva i bottoni avanti/indietro
  inizializzaEventiNavigazione();
  
  // Attiva il form di inserimento
  inizializzaForm();
}

avviaApplicazione();