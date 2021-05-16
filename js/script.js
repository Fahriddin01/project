'use strict';
const numberofFilms = +prompt('Сколько филмов вы уже посмотрели?','');
 const personalMovieDB = {
   count : numberofFilms,
   movies: {},
   actors: {},
   ganres: [],
   privat: false
 };

 

for (let i=0 ; i<2; i++){
  const a = prompt('Один из самих просмотренных филмов?',''),
        b = prompt('На сколько оцените его?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50){
       personalMovieDB.movies[a]=b;
       console.log ('Done');
  }else {
    console.log('error');
    i--;
  }  
      
}
if (personalMovieDB.count < 10) {
  console.log('Просмотрено довльно мало фильмов');
}else if (personalMovieDB.count >= 10 && personalMovieDB.count<30){
  console.log('Вы классический зритель');
}else if (personalMovieDB.count >= 30){
  console.log('Вы киноман!');
}else {
  console.log('Произошло ошибка');
}

console.log(personalMovieDB);        