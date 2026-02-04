package com.example.demo;

import com.example.demo.Film;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*") // consente al tuo frontend GitHub Pages di chiamare l'API
public class FilmController {

    @GetMapping("/api/films")
    public List<Film> getFilms() {
        return List.of(
            new Film("Biancaneve e i sette nani", 1937, "14 gennaio 2026", 7, 5, 7, 6.5, 5.5, 6, "Disegni un pò inquietanti, non capisco perché la strega sia dovuta diventare vecchia per darle la mela, poteva semplicemente jumpare dentro la casa dei nani e fargliela ingoiare. 
        Il principe abbastanza inutile.
        Nel complesso il film è carino e c’è qualche scena divertente dei nani (tutti abbastanza dimenticabili tranne Brontolo)."),
            new Film("Pinocchio", 1940, "18 gennaio 2026", 5, 5, 6, 4, 6.5, 4, " Totalemente diverso dalle aspettative e dalla fama, Pinocchio dice praticamente in una sola scena le bugie e quindi non capisco perché sia un suo tratto distintivo comune, più che altro è un credulone. Geppetto l’unico personaggio degno di nota, il grillo abbastanza inutile, la volpe, il gatto e gli altri personaggi inutili. Buco di trama: come ha fatto Geppetto ad essere stato inghiottito dalla balena? Pinocchio e il grillo sono fuggiti dal paese dei balocchi saltando in mare, ma che senso ha avere una porta blindata se puoi fuggire comunque in acqua? Sei scemo?")
        );
    }
}