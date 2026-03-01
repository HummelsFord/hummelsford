import { caricaFilmDalServer } from "./caricaFilm.js";
import { statoFilm } from "./statoFilm.js";
import { mostraFilmCorrente } from "./mostraFilm.js";
import { inizializzaEventiNavigazione } from "./eventiNavigazione.js";
import { inizializzaForm } from "./formAggiungiFilm.js";

async function avviaApplicazione() {
  // 1. Scarica i dati dal database
  const filmDalServer = await caricaFilmDalServer();
  statoFilm.lista = filmDalServer;

  // 2. PRE-CARICAMENTO: Forza il browser a scaricare le immagini ora
  filmDalServer.forEach(film => {
    if (film.url_immagine) { // Assicurati che il nome del campo sia corretto
      const imgCache = new Image();
      imgCache.src = film.url_immagine;
    }
  });

  // 3. Mostra il primo film e attiva i comandi
  mostraFilmCorrente();
  inizializzaEventiNavigazione();
  inizializzaForm();
}

avviaApplicazione();
