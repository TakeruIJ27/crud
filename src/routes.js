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
  {
    path: '/users/create', //new code
    exact: true,
    component: Loader(import('./containers/Pages/users/usersForm')),
    props: {
      name: 'Users From/ Create',
      formState: 'create',
    }
  },
  {
    path: '/users/edit/:id', //new code
    exact: true,
    component: Loader(import('./containers/Pages/users/usersForm')),
    props: {
      name: 'Users From/ Edit',
      formState: 'edit',
    }
  },
  {
    path: '/users/view/:id', //new code
    exact: true,
    component: Loader(import('./containers/Pages/users/usersForm')),
    props: {
      name: 'Users Form/ View',
      formState: 'view',
    }
  },

];

export default routes;
