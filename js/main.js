// URL server (Cloudflare Worker) che restituisce i film
    const url = "https://tests.byronlovexavier.workers.dev";

    // Array che conterrà tutti i film presi dal server
    let films = [];
    // Indice del film attualmente visualizzato nello slider
    let currentIndex = 0;

    // Funzione per mostrare un film alla volta nello slider
    function renderFilm(index) {
        // Prendi il film dall'array usando l'indice
        const film = films[index];
        // Prendi il contenitore HTML dove mettere le informazioni del film
        const container = document.getElementById("film-container");
        // Imposta opacità a 0 per creare un effetto "fade out"
        container.style.opacity = 0;

        // Usa setTimeout per ritardare l'aggiornamento del contenuto (fade effect)
        setTimeout(() => {
            // Inserisce l'HTML del film dentro il contenitore
            container.innerHTML = `
                <div class="film-card">
                    <h2>${film.title}</h2>
                    <div class="film-main">
                        <!-- Immagine del film -->
                        <img src="foto/${film.title.toLowerCase().replace(/ /g, "")}.jpg" alt="${film.title}">
                        <div class="film-info">
                            <!-- Vari dettagli del film -->
                            <p class="rating">⭐ ${film.rating}/10</p>
                            <p><strong>Anno:</strong> ${film.year}</p>
                            <p><strong>Visto il:</strong> ${film.date}</p>
                            <p><strong>Voto musiche:</strong> ${film.music}/10</p>
                            <p><strong>Voto scorrevolezza:</strong> ${film.flow}/10</p>
                            <p><strong>Voto trama:</strong> ${film.plot}/10</p>
                            <p><strong>Voto dramma:</strong> ${film.drama}/10</p>
                            <p><strong>Voto divertimento:</strong> ${film.fun}/10</p>
                            <p><strong>Scena preferita:</strong> ${film.favoriteScene}</p>
                        </div>
                    </div>
                    <div class="film-notes">
                        <p><strong>Note:</strong> ${film.notes}</p>
                    </div>
                </div>
            `;
            // Riporta l'opacità a 1 per creare effetto "fade in"
            container.style.opacity = 1;
        }, 150); // 150 millisecondi di ritardo
    }

    // Funzione per caricare i film dal server
    async function loadFilms() {
        // Chiede i film al server con fetch
        const response = await fetch(url);
        // Trasforma la risposta JSON in un array di film
        films = await response.json();
        // Mostra il primo film
        renderFilm(currentIndex);
    }

    // Event listener per il bottone "next"
    document.getElementById("next").addEventListener("click", () => {
        // Passa al film successivo (o ricomincia da 0 se arrivi alla fine)
        currentIndex = (currentIndex + 1) % films.length;
        renderFilm(currentIndex);
    });

    // Event listener per il bottone "prev"
    document.getElementById("prev").addEventListener("click", () => {
        // Torna al film precedente (o all'ultimo se sei al primo)
        currentIndex = (currentIndex - 1 + films.length) % films.length;
        renderFilm(currentIndex);
    });

    // Event listener per navigazione con tastiera
    document.addEventListener("keydown", (e) => {
        if(e.key === "ArrowRight") {
            // Freccia destra -> film successivo
            currentIndex = (currentIndex + 1) % films.length;
            renderFilm(currentIndex);
        } else if(e.key === "ArrowLeft") {
            // Freccia sinistra -> film precedente
            currentIndex = (currentIndex - 1 + films.length) % films.length;
            renderFilm(currentIndex);
        }
    });

    // Carica i film appena si apre la pagina
    loadFilms();