
const collectionMap = {
  movies: 'movies',
  movieDetails: 'movieDetails',
};

const getMoviesCount = async (db) => {
  const moviesCollection = db.collection(collectionMap.movies);
  const countResult = await moviesCollection.count({});
  return countResult;
};

/* Q2 (*)
  Return the first movie with imdb rating = 9.2 and year = 1974.
  Also, use mongodb projections to only get title from mongodb as opposed
  to accessing title property from the object
*/
const movieRating = async (db) => {
  const moviesDetailsCollection = db.collection(collectionMap.movieDetails);
  const query = {
    'imdb.rating': 9.2,
    year: 1974,
  };
  const projection = { title: 1 };
  const requiredMovie = await moviesDetailsCollection.findOne(query, { projection });
  return requiredMovie;
};

/* Q3 (*)
  Return the number of movies written by all these people (exactly these people in this order):
  Roberto Orci
  Alex Kurtzman
  Damon Lindelof
  Gene Roddenberry
*/
const writersIntersection = async (db) => {
  const moviesDetailsCollection = db.collection(collectionMap.movieDetails);
  const query = {
    writers: ['Roberto Orci', 'Alex Kurtzman', 'Damon Lindelof', 'Gene Roddenberry'],
  };
  const requiredMovieCount = await moviesDetailsCollection.count(query);
  return requiredMovieCount;
};

/* Q4 (*)
  Return the number of movies written by any of the writers in Q3
*/
const writersUnion = async (db) => {
  const moviesDetailsCollection = db.collection(collectionMap.movieDetails);
  const query = {
    writers: { $in: ['Roberto Orci', 'Alex Kurtzman', 'Damon Lindelof', 'Gene Roddenberry'] },
  };
  const requiredMovieCount = await moviesDetailsCollection.count(query);
  return requiredMovieCount;
};

/* Q5 (*)
  Return the number of movies in which actor is "Jackie Chan"
*/
const actor = async (db) => {
  const moviesDetailsCollection = db.collection(collectionMap.movieDetails);
  const query = {
    actors: 'Jackie Chan',
  };
  const requiredMovieCount = await moviesDetailsCollection.count(query);
  return requiredMovieCount;
};

/* Q6 (*)
  Return the number of movies in which actor "Jackie Chan" is second
  in the array "actors"
*/
const positionalActor = async (db) => {
  const moviesDetailsCollection = db.collection(collectionMap.movieDetails);
  const query = {
    'actors.1': 'Jackie Chan',
  };
  const requiredMovieCount = await moviesDetailsCollection.count(query);
  return requiredMovieCount;
};

/* Q7 (*)
  Return the first movie with imdb rating greater than or equal to 9.0
  and less than or equal to 9.2
*/
const comparisonOperator = async (db) => {
  const moviesDetailsCollection = db.collection(collectionMap.movieDetails);
  const query = {
    'imdb.rating': { $gte: 9.0, $lte: 9.2 },
  };
  const requiredMovieCount = await moviesDetailsCollection.count(query);
  return requiredMovieCount;
};

/* Q8 (*)
  Return the number of movies which have an actual rating opposed to
  being "UNRATED" or having no "rated" field at all
*/
const trimUnrated = async (db) => {
  const moviesDetailsCollection = db.collection(collectionMap.movieDetails);
  const query = {
    rated: { $exists: true, $nin: ['UNRATED'] },
  };
  const requiredMovieCount = await moviesDetailsCollection.count(query);
  return requiredMovieCount;
};

/* Q9 (*)
  Return number of movies in which "tomato" field exists but "tomato.rating" does not
*/
const unratedByTomato = async (db) => {
  const moviesDetailsCollection = db.collection(collectionMap.movieDetails);
  const query = {
    tomato: { $exists: true },
    'tomato.rating': { $exists: false },
  };
  const requiredMovieCount = await moviesDetailsCollection.count(query);
  return requiredMovieCount;
};

/* Q10 (*)
  Return number of movies with higher imdb rating >= 9.0 OR
  metacritic >= 90
*/
const goodMovies = async (db) => {
  const moviesDetailsCollection = db.collection(collectionMap.movieDetails);
  const query = {
    $or: [
      { 'imdb.rating': { $gte: 9.0 } },
      { metacritic: { $gte: 90 } },
    ],

  };
  const requiredMovieCount = await moviesDetailsCollection.count(query);
  return requiredMovieCount;
};

/* Q11 (*)
  Return number of movies where tomato field exists AND
  is equal to null
*/
const regexSearch = async () => {};

/* Q12 (*)
  Return number of movies where 'Adventure' and 'Action'
  as genres in any order
*/
const arrayAll = async () => {};

/* Q13 (*)
  Return number of movies that were filmed in exactly 4 countries
*/
const fieldArraySize = async () => {};

/* Q14 (*)
  Add a field called "myRating" = 90 to the movie "Iron Man 3" in movieDetails collection
*/
const addField = async () => {};

/* Q15 (*)
  Increment the metacritic rating by 5 for the movie "Gone Girl" with a single query.
  Note: Do not use find() or findOne() to look for the current metacritic rating for "Gone Girl"
*/
const incrementalUpdate = async () => {};

module.exports = {
  getMoviesCount,
  movieRating,
  writersIntersection,
  writersUnion,
  actor,
  positionalActor,
  comparisonOperator,
  trimUnrated,
  unratedByTomato,
  goodMovies,
};
