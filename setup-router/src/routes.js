import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import FourOhFour from './components/404';

const paths = {
  contactPath: '/contact',
  homePath: '/home',
  aboutPath: '/about',
  fourOhFour: '/404',
};
const routes = [
  {
    component: Home,
    link: paths.homePath,
    name: 'Home',
  },
  {
    component: About,
    link: paths.aboutPath,
    name: 'About',
  },
  {
    component: Contact,
    link: paths.contactPath,
    name: 'Contact',
  },
  {
    component: FourOhFour,
    link: paths.fourOhFour,
  },
];

export {
  routes,
  paths,
};
