import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MovieService } from '../shared/Movie.service';

@Component({
  selector: 'app-Movie',
  templateUrl: './Movie.component.html',
  styleUrls: ['./Movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form : NgForm){
    this.movieService.insertMovie(form.value);
    this.resetForm(form);
  }

  resetForm(form? : NgForm){
    if (form != null)
    form.reset();

    this.movieService.selectedMovie = {
      $key : '',
      judul : '',
      deskripsi : '',
      genre : '',
      harga : 0,
    } 
  }

}
