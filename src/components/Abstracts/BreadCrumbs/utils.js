import { matchPath } from 'react-router-dom';

export const getPaths = (pathname) => {
  const paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};


export const findRouteName = (routes, url) => {
  const aroute = routes.find(route => matchPath(url, { path: route.path, exact: route.exact }));
  return (aroute && aroute.name) ? aroute.name : null;
};
