/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  // initialize the accumulator 
  let movieTitles = [];
  // iterate through the movies to get the title of every movie 
  for (let movie of movies){
    movieTitles.push(movie.title)
  }
 return movieTitles;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  // initialize the accumulator
  let highestMetascore = 0 ;
  // loop into the movies array and find the highestMetascore as a number 
  for(let movie of movies){
    let metascore = Number(movie.metascore);
    if(metascore > highestMetascore){
      highestMetascore = metascore
    }
  }
  return highestMetascore;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let totalIMDBRating = 0 ;
  for (let movie of movies){
    totalIMDBRating += Number(movie.imdbRating)
    // let averageIMDBRating = totalIMDBRating/movies.length
  }
  // if there is no movies return 0 ,otherwise return the average IMDB Rating
  return movies.length === 0 ? 0 : totalIMDBRating/movies.length;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  countByRating = {};
  for(let movie of movies){
    countByRating[movie.rated] = countByRating[movie.rated] + 1 || 1

  }
  return countByRating;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  for (let movie of movies){
    if(movie.imdbID === id){
      return movie;
    }
  }
  return null;

}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let moviesByGenre = [];//should return an empty array if the inputted 'movies' array is empty or no movies match the inputted ;
  // loop into the movies array and return an array of genres matches (all character to lowercase)
  for(let movie of movies){
    if(movie.genre.toLowerCase().includes(genre.toLowerCase())){
      moviesByGenre.push(movie)
    }
  }
  return moviesByGenre;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  return movies.filter(movie=>{
    let releasedAtOrBefore = movie.released.split(" ")
    return releasedAtOrBefore[2]<= year
  })
  
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  if(!movies.length){
    return null
  }
  function currencyStrToNum(str){
    str = str.replace("$", "").replaceAll(",", "");
    return Number(str);
  }
  let highestBoxOffice = movies[0];
  for (let movie of movies)
{
  if(currencyStrToNum(highestBoxOffice.boxOffice)< currencyStrToNum(movie.boxOffice))
  highestBoxOffice = movie
}  // let BiggestBoxOfficeMovie = null;
  // let BiggestBoxOffice = 0;
  // for (let movie of movies){
  //   let boxOfficeStringTrimmed = "";
  //   for (let char of movies.boxOffice){
  //     if(Number(char) === 0 || Number(char)){
  //       boxOfficeStringTrimmed += char ;
  //     }
  //   }
  //   let boxOffice = Number(boxOfficeStringTrimmed)
  //   if(boxOffice > BiggestBoxOffice){
  //     BiggestBoxOffice = boxOffice;
  //     BiggestBoxOfficeMovie =movie.title;
  //   }
  // }
  // return BiggestBoxOfficeMovie;
  return highestBoxOffice.title;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
