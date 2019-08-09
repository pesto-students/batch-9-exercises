/* Q1 (*)
  Return the number of movies in the "movies" collection without using array.length
*/
const getMoviesCount = async (db) => {
  const collection = db.collection('movies');
  const count = await collection.count();
  return count;
};

/* Q2 (*)
  Return the first movie with imdb rating = 9.2 and year = 1974.
  Also, use mongodb projections to only get title from mongodb as opposed
  to accessing title property from the object
*/
const movieRating = async (db) => {
  const collection = db.collection('movieDetails');
  const movie = await collection.findOne({
    'imdb.rating': 9,
    year: 1974,
  });
  return { title: movie.title };
};

/* Q3 (*)
  Return the number of movies written by all these people (exactly these people in this order):
  Roberto Orci
  Alex Kurtzman
  Damon Lindelof
  Gene Roddenberry
*/
const writersIntersection = async (db) => {
  const collection = db.collection('movieDetails');
  const count = await collection
    .find({
      writers: ['Roberto Orci', 'Alex Kurtzman', 'Damon Lindelof', 'Gene Roddenberry'],
    })
    .count();

  return count;
};

/* Q4 (*)
  Return the number of movies written by any of the writers in Q3
*/
const writersUnion = async (db) => {
  const collection = db.collection('movieDetails');
  const count = await collection
    .find({
      $or: [
        { writers: 'Roberto Orci' },
        { writers: 'Alex Kurtzman' },
        { writers: 'Damon Lindelof' },
        { writers: 'Gene Roddenberry' },
      ],
    })
    .count();
  return count;
};

/* Q5 (*)
  Return the number of movies in which actor is "Jackie Chan"
*/
const actor = async (db) => {
  const collection = db.collection('movieDetails');
  const count = await collection.count({ actors: 'Jackie Chan' });
  return count;
};

/* Q6 (*)
  Return the number of movies in which actor "Jackie Chan" is second
  in the array "actors"
*/
const positionalActor = async (db) => {
  const collection = db.collection('movieDetails');
  const count = await collection.count({ 'actors.1': 'Jackie Chan' });
  return count;
};

/* Q7 (*)
  Return the first movie with imdb rating greater than or equal to 9.0
  and less than or equal to 9.2
*/
const comparisonOperator = async (db) => {
  const collection = db.collection('movieDetails');
  const count = await collection.count({ 'imdb.rating': { $gte: 9.0, $lte: 9.2 } });
  return count;
};

/* Q8 (*)
  Return the number of movies which have an actual rating opposed to
  being "UNRATED" or having no "rated" field at all
*/
const trimUnrated = async (db) => {
  const collection = db.collection('movieDetails');
  const count = await collection.count({
    rated: { $exists: true, $nin: ['UNRATED'] },
  });
  return count;
};

/* Q9 (*)
  Return number of movies in which "tomato" field exists but "tomato.rating" does not
*/
const unratedByTomato = async (db) => {
  const collection = db.collection('movieDetails');
  const count = await collection.count({
    tomato: { $exists: true },
    'tomato.rating': { $exists: false },
  });
  return count;
};

/* Q10 (*)
  Return number of movies with higher imdb rating >= 9.0 OR
  metacritic >= 90
*/
const goodMovies = async (db) => {
  const collection = db.collection('movieDetails');
  const count = await collection.count({
    $or: [{ 'imdb.rating': { $gte: 9 } }, { metacritic: { $gte: 90 } }],
  });
  return count;
};

/* Q11 (*)
  Return number of movies where tomato field exists AND
  is equal to null
*/
const regexSearch = async (db) => {
  const collection = db.collection('movieDetails');

  const requiredMovie = await collection.findOne({
    plot: { $regex: /Master.*Yoda/ },
  });

  return { title: requiredMovie.title };
};

/* Q12 (*)
  Return number of movies where 'Adventure' and 'Action'
  as genres in any order
*/
const arrayAll = async (db) => {
  const collection = db.collection('movieDetails');
  const count = await collection.count({
    genres: { $all: ['Adventure', 'Action'] },
  });
  return count;
};

/* Q13 (*)
  Return number of movies that were filmed in exactly 4 countries
*/
const fieldArraySize = async (db) => {
  const collection = db.collection('movieDetails');
  const count = await collection.count({
    countries: { $size: 4 },
  });
  return count;
};

/* Q14 (*)
  Add a field called "myRating" = 90 to the movie "Iron Man 3" in movieDetails collection
*/
const addField = async (db) => {
  const collection = db.collection('movieDetails');
  const requiredMovie = await collection.findOneAndUpdate(
    {
      title: 'Iron Man 3',
    },
    {
      $set: {
        myRating: 90,
      },
    },
  );
  return requiredMovie;
};

/* Q15 (*)
  Increment the metacritic rating by 5 for the movie "Gone Girl" with a single query.
  Note: Do not use find() or findOne() to look for the current metacritic rating for "Gone Girl"
*/
const incrementalUpdate = async (db) => {
  const collection = db.collection('movieDetails');
  const requiredMovie = await collection.findOneAndUpdate(
    {
      title: 'Gone Girl',
    },
    {
      $inc: {
        metacritic: 5,
      },
    },
  );
};

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
  regexSearch,
  arrayAll,
  fieldArraySize,
  addField,
  incrementalUpdate,
};
