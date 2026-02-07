import { caricaFilmDalServer } from "./caricaFilm.js";
import { statoFilm } from "./statoFilm.js";
import { mostraFilmCorrente } from "./mostraFilm.js";

const API_URL = "http://localhost:8787";

export function inizializzaForm() {
    const form = document.getElementById('form-film');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Funzione di utilità per leggere i numeri o restituire null
        const getNum = (id) => {
            const val = document.getElementById(id).value;
            return val !== "" ? parseFloat(val) : null;
        };

        const nuovoFilm = {
            titolo: document.getElementById('titolo').value,
            voto: getNum('voto'),
            annoDiUscita: parseInt(document.getElementById('anno').value) || null,
            dataDiVisione: document.getElementById('dataDiVisione').value || null,
            musica: getNum('musica'),
            scorrevolezza: getNum('scorrevolezza'),
            trama: getNum('trama'),
            dramma: getNum('dramma'),
            divertimento: getNum('divertimento'),
            scenaPreferita: document.getElementById('scenaPreferita').value || null,
            note: document.getElementById('note').value || null,
            tipologiaFilm: document.getElementById('tipologia').value || null
        };

        const successo = await inviaFilmAlServer(nuovoFilm);

        if (successo) {
            form.reset();
            alert("✨ Film inserito con tutti i dettagli!");
            statoFilm.lista = await caricaFilmDalServer();
            mostraFilmCorrente();
        }
    });
}

async function inviaFilmAlServer(film) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(film)
        });

        const data = await response.json();
        return data.success;
    } catch (err) {
        console.error("Errore nell'invio:", err);
        alert("Errore di connessione al server");
        return false;
    }
}