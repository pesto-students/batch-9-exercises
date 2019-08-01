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
  {
    component: FourOhFour,
    link: paths.fourOhFour,

  },
];

export {
  routes,
  paths,
};
