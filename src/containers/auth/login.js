import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Button,
  InputGroup,
  FormGroup,
  HTMLSelect,
  Position,
  Toast,
  Toaster,
  H1,
  ProgressBar,
} from '@blueprintjs/core';
import { connect } from 'react-redux';
import { authDispatcher } from './actions';

// util
import formSerialize from '../../utils/formSerialize';

const LoginContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > h1 {
    margin-bottom: 20px;
  }

`;

const LoginForm = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 450px;

  & > div:first-child {
    margin-bottom: 50px;
  }

  & > button {
    margin-top: 50px;
  }

`;


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toasts: [],
      roles: [
        'Admin',
        'User',
        'Guest',
      ],
      role: 'Admin',
      isLoading: false,
      loadingProgress: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
  }


  componentWillUnmount() {
    // Flush
    this.setState({
      toasts: [],
      roles: [],
      loadingProgress: 0,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { login } = this.props;
    const { username, password } = formSerialize(e);

    this.setState({
      isLoading: true,
    });


    const notifyRequestFailed = (errorMessage) => {
      if (errorMessage) {
        this.toaster.show({
          message: errorMessage,
          intent: 'DANGER',
        });

        this.setState({
          isLoading: false,
        });
      }
    };

    const notifyRequestProgress = (progress) => {
      const { loaded, total } = progress;

      this.setState({
        // Get the first decimal
        loadingProgress: ((loaded / total) * 100) / 100,
      });
    };

    // callback function to display the Toaster if login failed and to send real time progress.
    login({ username, password }, notifyRequestFailed, notifyRequestProgress);
  }

  handleRoleChange(e) {
    e.preventDefault();

    this.setState({
      role: e.target.value,
    });
  }

  render() {
    const {
      roles,
      toasts,
      role,
      isLoading,
      loadingProgress,
    } = this.state;

    return (
      <LoginContainer>
        <H1>Sign In</H1>
        {/* FORM */}
        <LoginForm className="bp3-card bp3-elevation-2" onSubmit={this.handleSubmit}>
          {isLoading && <ProgressBar intent="success" value={loadingProgress} />}
          {/* ROLES */}
          <FormGroup inline label="Sign in as:" labelFor="role">
            <HTMLSelect
              id="role"
              onChange={this.handleRoleChange}
              options={roles}
              value={role}
            />
          </FormGroup>
          {/* USERNAME */}
          <FormGroup label="Username" labelFor="username">
            <InputGroup name="username" id="username" type="text" />
          </FormGroup>
          {/* PASSWORD */}
          <FormGroup label="Password" labelFor="password">
            <InputGroup name="password" id="password" type="password" />
          </FormGroup>
          {/* LOGIN BUTTON */}
          <Button disabled={isLoading} intent="success" text="Login" type="submit" />
        </LoginForm>
        <Toaster position={Position.TOP_RIGHT} ref={(node) => { this.toaster = node; }}>
          {/* "Failed!" will appear here after login-failed. */}
          {toasts.map(toast => <Toast {...toast} />)}
        </Toaster>
      </LoginContainer>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};


export default connect(null, authDispatcher)(Login);
