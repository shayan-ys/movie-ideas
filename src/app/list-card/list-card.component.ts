import { Component, OnInit, Input } from '@angular/core';
import { MovieReaderService } from '../movie-reader.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.less'],
    providers: [ MovieReaderService ]
})
export class ListCardComponent implements OnInit {
    @Input() API_ID: string;

    private poster: string;
    private title: string;
    private overview: string;

  constructor(
      private movieReader: MovieReaderService
  ) { }

  ngOnInit() {
      const movie = this.movieReader.getMovie(this.API_ID);
      this.poster = movie.poster;
      this.title = movie.title;
      this.overview = movie.overview;
  }

}
