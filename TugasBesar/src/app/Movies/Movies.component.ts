import { Component, OnInit } from '@angular/core';

import { MovieService } from './shared/Movie.service';

@Component({
  selector: 'app-Movies',
  templateUrl: './Movies.component.html',
  styleUrls: ['./Movies.component.css'],
  providers : [MovieService]
})
export class MoviesComponent implements OnInit {


  constructor(private movieService : MovieService) { }

  ngOnInit() {
  }

}
