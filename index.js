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
      },
      {
        title: "Fantasia",
        rating: 3,
        year: 1940,
        date: "22-25 gennaio 2026",
        music: 8,
        flow: 3,
        plot: 2,
        drama: 5,
        fun: 4.5,
        favoriteScene: "Topolino contro le scope.",
        notes: "Dimenticabile, su 2 ore di film carini i 20 minuti in cui appare topolino. Il resto è musica e robba a caso."
      },
      {
        title: "Dumbo",
        rating: 6,
        year: 1941,
        date: "1 febbraio 2026",
        music: 4,
        flow: 7,
        plot: 6,
        drama: 7,
        fun: 6,
        favoriteScene: "",
        notes: "Dumbo è l’unico elefante con le orecchie giganti e quindi viene discriminato per questo. La madre per difenderlo finisce ingabbiata e lui cerca di liberarla continuando ad essere preso in giro in ogni situazione. Alla fine capisce che fare il clown non è poi così male quindi rimane nel circo."
      },
      {
        title: "Zootropolis",
        rating: 8,
        year: 2016,
        date: "27 dicembre 2025",
        music: 5,
        flow: 8,
        plot: 8,
        drama: 7,
        fun: 8,
        favoriteScene: "Quando la coniglia entra nella polizia",
        notes: "Simpatica la coniglia, lei e la volpe top coppia, inaspettato il finale in cui si scopre che la segretaria è la colpevole."
      },
      {
        title: "Oceania",
        rating: 7,
        year: 2016,
        date: "fine dicembre 2024",
        music: 8,
        flow: 7,
        plot: 7,
        drama: 6,
        fun: 7,
        favoriteScene: "Il primo incontro tra Vaiana e Maui",
        notes: "Carina soprattutto la prima parte, il resto cala un pochino."
      },
      {
        title: "Oceania 2",
        rating: 6,
        year: 2024,
        date: "fine dicembre 2024",
        music: 6,
        flow: 6,
        plot: 6,
        drama: 6,
        fun: 6,
        favoriteScene: "",
        notes: "Meglio il primo, una copia peggiore."
      },
      {
        title: "Zootropolis 2",
        rating: 7.25,
        year: 2025,
        date: "30 dicembre 2025",
        music: 7,
        flow: 7,
        plot: 7,
        drama: 6.5,
        fun: 7,
        favoriteScene: "Il dialogo tra la coniglia e la volpe sull’importanza reciproca nella vita di entrambi.",
        notes: "Meglio il primo, però molto carino il dialogo citato sopra, la canzone di Shakira molto carina, ma perchè il cattivo che si finge buono non sventra in due la volpe appena lo vede come ha fatto con il serpente e la coniglia sul finale? Ma si mette a dialogare con lui ? Che dialoghi , hai un arma , ma sei scemo?  In generale perchè non li uccide dopo averli storditi?"
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
