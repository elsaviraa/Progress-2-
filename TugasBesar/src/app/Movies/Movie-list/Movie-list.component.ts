import { Component, OnInit } from '@angular/core';
//import { AngularFireList } from 'angularfire2/database';

import { MovieService } from '../shared/Movie.service';
import { Movie } from '../shared/Movie.model';

@Component({
  selector: 'app-Movie-list',
  templateUrl: './Movie-list.component.html',
  styleUrls: ['./Movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  movieList : Movie[];
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    var x = this.movieService.getData();
    x.snapshotChanges().subscribe(item => {
      this.movieList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.movieList.push(y as Movie);
      });
    });
  }
}  
