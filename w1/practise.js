

//1
const numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");
const test = prompt("Один из последних просмотренных фильмов", "");
const test1 = prompt("На сколько оцените его", "");

//2
//const personalMovieDB = [];
//let count = numberOfFilms;
//personalMovieDB[0]=count;
//let movies = null;
//personalMovieDB[1]=movies;
//let actors = null;
//personalMovieDB[2]=actors;
//let genres = []; 
//personalMovieDB[3]=genres;
//let privat = false;
//personalMovieDB[4]=privat;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genre: [],
    privat: false
};


//3

personalMovieDB.movies ={
    name: test,
    rating : test1
};

console.log(personalMovieDB);