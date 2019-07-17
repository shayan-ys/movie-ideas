import { Injectable } from '@angular/core';


export interface Movie {
    link: string;
    poster: string;
    title: string;
    overview: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieReaderService {
    private movies = {
        tt6966692: {
            link: 'https://www.imdb.com/title/tt6966692/',
            poster: 'https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
            title: 'Green Book (2018) - IMDb',
            overview: 'Directed by Peter Farrelly.  With Viggo Mortensen, Mahershala Ali, Linda Cardellini, Sebastian Maniscalco. A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.'
        },
        tt6105098: {
            link: 'https://www.imdb.com/title/tt6105098/',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
            title: 'The Lion King (2019) - IMDb',
            overview: 'Directed by Jon Favreau.  With Donald Glover, Beyoncé, Seth Rogen, Chiwetel Ejiofor. After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.'
        }
    };

    constructor() { }

    public getMovie(title: string): Movie {
      return this.movies[title];
    }
}
