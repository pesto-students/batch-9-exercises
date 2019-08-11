/* Q1 (*)
  Return the title of a movie from the year 2013 that is rated PG-13 and
  won no awards. Query the video.movieDetails collection to find the answer.
*/
const collections = { movieDetails: 'movieDetails', movies: 'movies', myMovies: 'myMovies' };
const noAwards = async (db) => {
  const movieDetailsCollection = db.collection(collections.movieDetails);
  const Query = {
    'awards.wins': 0,
    rated: 'PG-13',
    year: 2013,
  };
  const projection = { title: 1, _id: 0 };
  const result = await movieDetailsCollection.findOne(Query, { projection });
  return result;
};

/* Q2 (*)
  Return the number of movies in movieDetails collection list just the
  following two genres: "Comedy" and "Crime" with "Comedy" listed first.
*/
const arrayOrder = async (db) => {
  const movieDetailsCollection = db.collection(collections.movieDetails);
  const Query = {
    genres: ['Comedy', 'Crime'],
  };
  const result = await movieDetailsCollection.count(Query);
  return result;
};

/* Q3 (*)
  Update the value of the "plot" field for the movie "The Martian".
  Change it to: "A scientist gets trapped on Mars. To save his life, he
  devices a plan. He grows potatoes using his excretion as manure. He masterminds
  a loop where he eats those potatoes to accelerate excretion, using the same to
  grow more potatoes until he can find an old spaceship nearby to launch himself home."

  Use updateOne() in this exercise.
*/

const martianPlot = async (db) => {
  const movieDetailsCollection = db.collection(collections.movieDetails);
  const Query = {
    title: 'The Martian',
  };
  const updateQuery = {
    $set: {
      plot: 'A scientist gets trapped on Mars. To save his life, he devices a plan. He grows potatoes using his excretion as manure. He masterminds a loop where he eats those potatoes to accelerate excretion, using the same to grow more potatoes until he can find an old spaceship nearby to launch himself home.',
    },
  };
  const result = await movieDetailsCollection.updateOne(Query, updateQuery);
  return result;
};

/* Q4 (*)
  Create a new collection named "myMovies". Insert 5 movies with the following
  fields: "title": String and "rating": Number(1 - 100)
  Eg: {
    title: "The Godfather",
    rating: 100
  }

  Note: Make sure the above (Godfather) document is one of the 5 movies inserted.
*/

const insertMovies = async (db) => {
  const docsToInsert = [
    {
      title: 'The Godfather',
      rating: 100,
    },

    {
      title: 'Dark Knight',
      rating: 10,
    },

    {
      title: 'Shawshang',
      rating: 100,
    },

    {
      title: 'Fast & Furious',
      rating: 19,
    },
    {
      title: 'Godzilla',
      rating: 100,
    },
  ];
  const collectionCreated = await db.createCollection(collections.myMovies);
  await collectionCreated.deleteMany({});
  const result = await collectionCreated.insertMany(docsToInsert);
  return result;
};

/* Q5 (*)
  Delete the movie with title = "The Godfather" from the collection "myMovies".
*/

const deleteMovie = async (db) => {
  const myMoviesCollection = db.collection(collections.myMovies);
  const Query = {
    title: 'The Godfather',
  };
  const result = await myMoviesCollection.deleteOne(Query);
  return result;
};

/* Q6 (*)
  Delete all movies from the collection "myMovies".
*/

const deleteAllMovies = async (db) => {
  const myMoviesCollection = db.collection(collections.myMovies);
  await myMoviesCollection.deleteMany({});
};


/* Q7 (*)
  Write an update command that will remove the "tomato.consensus" field
  for all documents matching the following criteria:

  - The number of imdb votes is less than 10,000
  - The year for the movie is between 2010 and 2013 inclusive
  - The tomato.consensus field is null
*/

const removeConsensus = async (db) => {
  const movieDetailsCollection = db.collection(collections.movieDetails);
  const Query = {
    'imdb."votes"': { $lt: 10000 },
    'tomato.consensus': { $exits: true, $in: [null] },
    year: { $gte: 2010, $lte: 2013 },
  };
  const updateQuery = {
    $unset: {
      'tomato.consensus': '',
    },
  };
  const result = await movieDetailsCollection.updateMany(Query, updateQuery);
  return result;
};
/**
 * Code used to copy do the upsert.
   const list = require('./upsertData')
   const myMovieDetailsCOllection = db.collection('myMovieDetails');
  const currentCount = await myMovieDetailsCOllection.count({});
  console.log('BEFORE EXECUTING', currentCount);
  const myMovieBulk = myMovieDetailsCOllection.initializeUnorderedBulkOp();
  list.forEach(value => myMovieBulk.insert(value));
  await myMovieBulk.execute();
  const lastCount = await myMovieDetailsCOllection.count({});
  console.log('AFTER EXECTUTI', lastCount)
 */

/**
  * // CODE FOR DOIG TEXT BASED SEARCH AND GETTING RESULTS
  const myMoviesCollection = db.collection('myMovieDetails');
  await myMoviesCollection.createIndex({ title: 'text', plot: 'text' });
  const docsFound = await myMoviesCollection.count({ $text: { $search: 'weapon murder love' } });
  console.log('DOCS FOUND', docsFound);
  return docsFound;
  */
module.exports = {
  noAwards,
  arrayOrder,
  martianPlot,
  insertMovies,
  deleteMovie,
  deleteAllMovies,
  removeConsensus,
};
