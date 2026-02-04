import { statoFilm } from "./statoFilm.js";
import { mostraFilmCorrente } from "./mostraFilm.js";

export function inizializzaEventiNavigazione() {
  document.getElementById("next").addEventListener("click", () => {
    statoFilm.indiceCorrente =
      (statoFilm.indiceCorrente + 1) % statoFilm.lista.length;
    mostraFilmCorrente();
  });

  document.getElementById("prev").addEventListener("click", () => {
    statoFilm.indiceCorrente =
      (statoFilm.indiceCorrente - 1 + statoFilm.lista.length) % statoFilm.lista.length;
    mostraFilmCorrente();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") {
      statoFilm.indiceCorrente =
        (statoFilm.indiceCorrente + 1) % statoFilm.lista.length;
      mostraFilmCorrente();
    }
    if (e.key === "ArrowLeft") {
      statoFilm.indiceCorrente =
        (statoFilm.indiceCorrente - 1 + statoFilm.lista.length) % statoFilm.lista.length;
      mostraFilmCorrente();
    }
  });
}
