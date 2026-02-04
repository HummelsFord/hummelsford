import { statoFilm } from "./statoFilm.js";

export function mostraFilmCorrente() {
  const film = statoFilm.lista[statoFilm.indiceCorrente];
  const contenitore = document.getElementById("film-container");

  contenitore.style.opacity = 0;

  setTimeout(() => {
    contenitore.innerHTML = `
      <div class="film-card">
        <h2>${film.titolo}</h2>
        <div class="film-main">
          <img src="foto/${film.titolo.toLowerCase().replace(/ /g, "")}.jpg">
          <div class="film-info">
            <p>⭐ ${film.voto}/10</p>
            <p><strong>Anno:</strong> ${film.annoDiUscita}</p>
            <p><strong>Visto il:</strong> ${film.dataDiVisione}</p>
            <p><strong>Musiche:</strong> ${film.musica}/10</p>
            <p><strong>Scorrevolezza:</strong> ${film.scorrevolezza}/10</p>
            <p><strong>Trama:</strong> ${film.trama}/10</p>
            <p><strong>Dramma:</strong> ${film.dramma}/10</p>
            <p><strong>Divertimento:</strong> ${film.divertimento}/10</p>
            <p><strong>Scena preferita:</strong> ${film.scenaPreferita}</p>
          </div>
        </div>
        <p><strong>Note:</strong> ${film.note}</p>
      </div>
    `;
    contenitore.style.opacity = 1;
  }, 150);
}
