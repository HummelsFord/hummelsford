const URL_API = "https://tests.byronlovexavier.workers.dev";

export async function caricaFilmDalServer() {
  const risposta = await fetch(URL_API);
  if (!risposta.ok) {
    throw new Error("Errore nel caricamento dei film");
  }
  return risposta.json();
}
