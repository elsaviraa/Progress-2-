import { Injectable } from '@angular/core';
import { Movie } from './Movie.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
movieList : AngularFireList<any>;

  selectedMovie 
constructor(private firebase : AngularFireDatabase) { }

getData(){
  this.movieList = this.firebase.list('Movies');
  return this.movieList;
}

insertMovie(movie : Movie){
  this.movieList.push({
    judul : movie.judul,
    deskripsi : movie.deskripsi,
    genre : movie.genre,
    harga : movie.harga,
  });
}

}
