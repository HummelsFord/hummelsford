export default {
  async fetch(request, env) {
    const result = await env.D1_Database
      .prepare("SELECT * FROM film")
      .all();

    return new Response(JSON.stringify(result.results), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
