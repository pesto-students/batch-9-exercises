import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

const paths = {
  contactPath: '/contact',
  homePath: '/home',
  aboutPath: '/about',
};
const routes = [
  {
    component: Contact,
    link: paths.contactPath,
  },
  {
    component: About,
    link: paths.aboutPath,
  },
  {
    component: Home,
    link: paths.homePath,
  },
];

export {
  routes,
  paths,
};
