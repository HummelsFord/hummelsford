package com.example.demo;

public class Film {
    private String titolo;
    private int anno;
    private String vistoIl;
    private double valutazioneFinale;
    private double votoMusiche;
    private double votoScorrevolezza;
    private double votoTrama;
    private double votoDramma;
    private double votoDivertimento;
    private String scenaPreferita;
    private String note;

    // costruttore, getter e setter
    public Film(String titolo, int anno, String vistoIl, double valutazioneFinale, double votoMusiche, double votoScorrevolezza,
                double votoTrama, double votoDramma, double votoDivertimento, String scenaPreferita, String note) {
        this.titolo = titolo;
        this.anno = anno;
        this.vistoIl = vistoIl;
        this.valutazioneFinale = valutazioneFinale;
        this.votoMusiche = votoMusiche;
        this.votoScorrevolezza = votoScorrevolezza;
        this.votoTrama = votoTrama;
        this.votoDramma = votoDramma;
        this.votoDivertimento = votoDivertimento;
        this.scenaPreferita = scenaPreferita;
        this.note = note;
    }

    public String getTitolo() { return titolo; }
    public int getAnno() { return anno; }
    public String getVistoIl() { return vistoIl; }
    public double getValutazioneFinale() { return valutazioneFinale; }
    public double getVotoMusiche() { return votoMusiche; }
    public double getVotoScorrevolezza() { return votoScorrevolezza; }
    public double getVotoTrama() { return votoTrama; }
    public double getVotoDramma() { return votoDramma; }
    public double getVotoDivertimento() { return votoDivertimento; }
    public String getScenaPreferita() { return scenaPreferita; }
    public String getNote() { return note; }
}
