import { Loader } from './components/Abstracts';


// put your routes inside this array.
const routes = [
  {
    path: '/dashboard',
    exact: true,
    component: Loader(import('./containers/Pages/helloWorld')),
    props: {
      name: 'Dashboard',
    }
  },
  {
    path: '/users',
    exact: true,
    component: Loader(import('./containers/Pages/users')),
    props: {
      name: 'Users',
    }
  },
  {
    path: '/users/create', //new code
    exact: true,
    component: Loader(import('./containers/Pages/users/usersForm')),
    props: {
      name: 'Users Form/ Create',
      formState: 'create',
    }
  },
  {
    path: '/users/edit/:id', //new code
    exact: true,
    component: Loader(import('./containers/Pages/users/usersForm')),
    props: {
      name: 'Users Form/ Edit',
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
  {
    path: '/users/filter', //new code
    exact: true,
    component: Loader(import('./containers/Pages/users/filter')),
    props: {
      name: 'Filter Form',
      formState: 'filtering',
    }
  },

];

export default routes;
