import { MovieService } from './../shared/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  model = new Movie(1, 'The Lion King', 'Simba and Scar fight', 3);

  constructor(private movieService: MovieService) { }

  ngOnInit(): void { }

  saveMovie() {
    // console.log(this.model);
    this.movieService.postNewMovie(this.model).subscribe(result => console.log(result));
  }
}
