let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
        
    if (a != null && b!= null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    }
    else {
        i--;
    }
}



console.log(personalMovieDB);