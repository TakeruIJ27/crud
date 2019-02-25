import { Loader } from './components/Abstracts';


// put your routes inside this array.
const routes = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    exact: true,
    component: Loader(import('./containers/Pages/helloWorld')),
  },
  {
    name: 'Users',
    path: '/users',
    exact: true,
    component: Loader(import('./containers/Pages/users')),
  },

];

export default routes;
