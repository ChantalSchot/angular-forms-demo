import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from './../shared/movie.service';
import { Movie } from '../shared/movie';

@Component({
  selector: 'app-reactive-movie-form',
  templateUrl: './reactive-movie-form.component.html',
  styleUrls: ['./reactive-movie-form.component.css']
})
export class ReactiveMovieFormComponent implements OnInit {
  movieForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    genre: new FormControl('')
  });

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // this.name.setValue('hoi');
    // console.log(this.movieForm.valueChanges.subscribe(value => console.log(value)));
  }

  saveMovie() {
    let newMovie: Movie = this.movieForm.value;
    console.log(this.movieForm);
    console.log(this.movieForm.value.name);
    console.log(newMovie);
    // this.movieService.postNewMovie(postMovie.value).subscribe(result => console.log(result));
  }


}
