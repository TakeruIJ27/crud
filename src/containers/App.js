import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FocusStyleManager } from '@blueprintjs/core';
import {
  PrivateRoute,
} from '../components/Abstracts';
import DefaultLayout from './DefaultLayout';
import { Login } from './auth';


// eslint-disable-next-line no-unused-vars
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { isLogin } = this.props;

    return (
      <Switch>
        {!isLogin && <Route exact path="/login" component={Login} />}
        <PrivateRoute
          component={DefaultLayout}
          isUnlock={isLogin}
          redirectTo="/login"
          path="/"
        />
      </Switch>
    );
  }
}

App.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth, app }) => ({
  isLogin: auth.isLogin,
});

// To enable blueprintjs UI accessibility.
FocusStyleManager.onlyShowFocusOnTabs();

// This will tell to the store to pass the 'login' object down to this component.
export default withRouter(connect(mapStateToProps)(App));
