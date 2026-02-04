export default {
  async fetch(request) {
    const films = [
      {
        title: "Biancaneve e i sette nani",
        rating: 7,
        year: 1937,
        date: "14 gennaio 2026",
        music: 5,
        flow: 7,
        plot: 6.5,
        drama: 5.5,
        fun: 6,
        favoriteScene: "Quando la matrigna cade dal dirupo.",
        notes: "Disegni un pò inquietanti, non capisco perché la strega sia dovuta diventare vecchia per darle la mela, poteva semplicemente jumpare dentro la casa dei nani e fargliela ingoiare. Il principe abbastanza inutile. Nel complesso il film è carino e c’è qualche scena divertente dei nani (tutti abbastanza dimenticabili tranne Brontolo)."
      },
      {
        title: "Pinocchio",
        rating: 5,
        year: 1940,
        date: "18 gennaio 2026",
        music: 5,
        flow: 6,
        plot: 4,
        drama: 6.5,
        fun: 4,
        favoriteScene: "Geppetto che dorme con il gatto.",
        notes: "Totalemente diverso dalle aspettative e dalla fama, Pinocchio dice praticamente in una sola scena le bugie e quindi non capisco perché sia un suo tratto distintivo comune, più che altro è un credulone. Geppetto l’unico personaggio degno di nota, il grillo abbastanza inutile, la volpe, il gatto e gli altri personaggi inutili. Buco di trama: come ha fatto Geppetto ad essere stato inghiottito dalla balena? Pinocchio e il grillo sono fuggiti dal paese dei balocchi saltando in mare, ma che senso ha avere una porta blindata se puoi fuggire comunque in acqua? Sei scemo?"
      }
    ];

     return new Response(JSON.stringify(films), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // <- questo serve per far funzionare il fetch da GitHub Pages
      }
    });
  }
};
