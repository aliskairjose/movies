import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { environment } from '../../../../environments/environment.prod';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: [ './movie-card.component.scss' ]
} )
export class MovieCardComponent implements OnInit {
  imgPath = environment.imgPath;

  @Input() data: Movie = {};

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  movieDetail( id: number ): void {
    this.router.navigate( [ `detail/movie/${id}` ] );
  }

}
