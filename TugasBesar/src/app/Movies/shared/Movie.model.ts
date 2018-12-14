export class Movie{
    $key : string;
    judul : string;
    deskripsi : string;
    genre : string;
    harga : number;

    constructor(judul : string, deskripsi : string, genre : string, harga : number) {
        this.judul = judul;
        this.deskripsi = deskripsi;
        this.genre = genre;
        this.harga = harga
    }
}



