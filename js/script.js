const numberofFilms = +prompt('Сколько филмов вы уже посмотрели?','');
 const personalMovieDB = {
   count : numberofFilms,
   movies: {},
   actors: {},
   ganres: [],
   privat: false
 };

 const a = prompt('Один из самих просмотренных филмов?',''),
       b = prompt('На сколько оцените его?', ''),
       c = prompt('Один из самих просмотренных филмов?',''),
       d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
console.log(personalMovieDB);        