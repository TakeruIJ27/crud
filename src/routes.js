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
    name: 'Pending',
    path: '/pending',
    exact: true,
    component: Loader(import('./containers/Pages/pending')),
  },
  {
    name: 'Remitted',
    path: '/remitted',
    exact: true,
    component: Loader(import('./containers/Pages/remitted')),
  },
  {
    name: 'Exceptions',
    path: '/exceptions',
    exact: true,
    component: Loader(import('./containers/Pages/exceptions')),
  },
];

export default routes;
