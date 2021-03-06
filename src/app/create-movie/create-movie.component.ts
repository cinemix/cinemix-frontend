import {Component, OnInit} from '@angular/core';
import {Movie} from '../_models/movie';
import {MovieService} from '../_services/movie.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.sass']
})
export class CreateMovieComponent implements OnInit {

  movie: Movie = new Movie();
  submitted = false;
  isLoggedIn = false;

  constructor(private tokenStorage: TokenStorageService, private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  save() {
    this.movieService.createMovie(this.movie).subscribe(data => console.log(data), error => console.log(error));
    this.movie = new Movie();
    setTimeout(() => {
      console.log(this.gotoList());
    }, 750);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['movies']);
  }
}
