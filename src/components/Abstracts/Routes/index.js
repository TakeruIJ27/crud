import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';


const renderRoutes = routes => routes.map(
  // declare 'component' property as 'Component' variable
  // since 'React' do not allow to declare components with lowercase in the first letter.
  ({
    component: Component,
    path,
    name,
    ...rest
  }) => (
    <Route
      key={path}
      path={path}
      render={childrenProps => <Component {...childrenProps} name={name} />}
      {...rest}
    />
  ),
);

const Routes = ({ routeList = [] }) => (
  <Switch>
    {renderRoutes(routeList)}
  </Switch>
);

Routes.propTypes = {
  routeList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Routes;
