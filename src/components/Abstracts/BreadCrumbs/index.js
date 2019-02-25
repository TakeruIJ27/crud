import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Breadcrumbs, Breadcrumb } from '@blueprintjs/core';
import { Link } from '../../Base';
import { getPaths, findRouteName } from './utils';
import routes from '../../../routes';

const BreadCrumbsItem = ({ match }) => {
  const routeName = findRouteName(routes, match.url);
  if (routeName) {
    return (
      match.isExact
        ? <Breadcrumb current>{routeName}</Breadcrumb>
        : (
          <Breadcrumb>
            <Link to={match.url || ''}>
              {routeName}
            </Link>
          </Breadcrumb>
        )
    );
  }
  return null;
};


BreadCrumbsItem.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string).isRequired,
    isExact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};


const BreadCrumbs = ({ history }) => {
  const paths = getPaths(history.location.pathname);
  const items = path => (
    <Route
      key={path}
      path={path}
      component={BreadCrumbsItem}
    />
  );

  return (
    <Breadcrumbs
      breadcrumbRenderer={items}
      items={paths}
    />
  );
};


BreadCrumbs.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};


export default BreadCrumbs;
