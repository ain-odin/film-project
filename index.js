let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};

let movieName = prompt('Один из последних просмотренных фильмов?', '');
let movieScore = prompt('На сколько оцените его?', '');

personalMovieDB.movies = {
    movieName: movieScore
};