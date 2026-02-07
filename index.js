export default {
  async fetch(request, env) {
    // Gestione CORS per permettere chiamate dal tuo frontend
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Rispondi subito alle richieste OPTIONS (preflight)
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

// --- INSERIMENTO DATI (POST) ---
    if (request.method === "POST") {
      try {
        const b = await request.json();
        
        const query = `INSERT INTO film (
          titolo, voto, annoDiUscita, dataDiVisione, musica, 
          scorrevolezza, trama, dramma, divertimento, 
          scenaPreferita, note, tipologiaFilm
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        await env.D1_Database.prepare(query).bind(
          b.titolo || "Senza Titolo",
          b.voto !== undefined ? b.voto : null,
          b.annoDiUscita !== undefined ? b.annoDiUscita : null,
          b.dataDiVisione || null,
          b.musica !== undefined ? b.musica : null,
          b.scorrevolezza !== undefined ? b.scorrevolezza : null,
          b.trama !== undefined ? b.trama : null,
          b.dramma !== undefined ? b.dramma : null,
          b.divertimento !== undefined ? b.divertimento : null,
          b.scenaPreferita || null,
          b.note || null,
          b.tipologiaFilm || null
        ).run();

        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 201
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500
        });
      }
    }

    // --- LOGICA DI LETTURA (GET) ---
    const result = await env.D1_Database.prepare("SELECT * FROM film").all();
    return new Response(JSON.stringify(result.results), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
};