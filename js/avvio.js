import { caricaFilmDalServer } from "./caricaFilm.js";
import { statoFilm } from "./statoFilm.js";
import { mostraFilmCorrente } from "./mostraFilm.js";
import { inizializzaEventiNavigazione } from "./eventiNavigazione.js";

async function avviaApplicazione() {
  statoFilm.lista = await caricaFilmDalServer();
  mostraFilmCorrente();
  inizializzaEventiNavigazione();
}

avviaApplicazione();
