let numberOfFilms;

const personalMovieDB = {
	'count': numberOfFilms,
	'movies': {},
	'actors': {},
	'genres': [],
	'privat': false,
	start: function () {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
		while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
				numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			alert('Просмотренно мало фильмов');
		}
		else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			alert('Вы классический зритель');
		}
		else if (personalMovieDB.count > 30) {
			alert('Вы киноман');
		}
		else {
			alert('Произошла ошибка');
		}
	},
	showMyDB: function () {
		if (personalMovieDB.privat == false) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
			if (genre == '' || genre == null) {
				console.log('Please, try again');
				i--;
			}
			else {
				personalMovieDB.genres[i - 1] = genre;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр #${i + 1} - это ${item}`)
		})
	},
	toggleVisibleMyDB: function () {
		personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true
	}
};
