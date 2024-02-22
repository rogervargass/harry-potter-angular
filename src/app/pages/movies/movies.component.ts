import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../types/movies';
import { formatDate } from '../../utils/date';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movies: Movie[] = [];

  ngOnInit() {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies.data;
    });
  }

  pushToTrailer(link: string) {
    window.open(link, '_blank');
  }

  formatMovieDate(date: string) {
    return formatDate(date);
  }
}
