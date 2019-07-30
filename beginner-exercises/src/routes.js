import HelloWorld from './components/01-HelloWorld';
import MovieList from './components/02-MovieList';
// eslint-disable-next-line import/extensions
import FavoriteMovie from './components/03-FavoriteMovie.jsx';
import GroceryList from './components/04-GroceryList';

const routes = [{
  path: '/01',
  component: HelloWorld,
}, {
  path: '/02',
  component: MovieList,
}, {
  path: '/03',
  component: FavoriteMovie,
}, {
  path: '/04',
  component: GroceryList,
}];

export default routes;
