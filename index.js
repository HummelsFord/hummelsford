export default {
  async fetch(request, env) {
    // query tutti i film dal DB
    const result = await env.D1_Database.prepare("SELECT * FROM film").all();
    const films = result.results; // array di oggetti

    return new Response(JSON.stringify(films), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
