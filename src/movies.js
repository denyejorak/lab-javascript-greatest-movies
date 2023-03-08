// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsSet=moviesArray.map((movie)=>movie.director);
    return directorsSet;
    }
    //short version: const getAllDirecetor = (moviesArray) => moviesArray.map((movie)=>movie.director);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
 const filteredMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
 return filteredMovies.length
 }
 //short version: return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scores = moviesArray
      .filter(movie => typeof movie.score === 'number')
      .map(movie => movie.score);
    if (scores.length === 0) {
      return 0;
    }
    const totalScore = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
    const averageScore = totalScore / scores.length;
    const averageScoreRounded = Math.round(averageScore * 100) / 100;
    return averageScoreRounded;
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) { {
      return 0;
    }
    const dramaScores = dramaMovies
      .filter(movie => typeof movie.score === 'number')
      .map(movie => movie.score);
    if (dramaScores.length === 0) {
      return 0;
    }
    const totalScore = dramaScores.reduce((accumulator, currentValue) => accumulator + currentValue);
    const averageScore = totalScore / dramaScores.length;
    const averageScoreRounded = Math.round(averageScore * 100) / 100;
   return averageScoreRounded;
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
