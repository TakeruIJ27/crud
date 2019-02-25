import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Navbar,
  Button,
  Alignment,
  Popover,
  Menu,
  MenuItem,
  Position,
} from '@blueprintjs/core';
import { logout } from '../auth/actions';
import { Sidebar, Routes, BreadCrumbs } from '../../components/Abstracts';
import { Link } from '../../components/Base';
import routes from '../../routes';
import navList from '../../navList';
import { StyledDefaultLayout, StyledSwitch } from './styles';


class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogoutPending: false,
    };

    this.htmlStyle = document.getElementsByTagName('html')[0].style;
    this.handleColorInvert = this.handleColorInvert.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillUnmount() {
    this.htmlStyle.backgroundColor = '#fff';
  }

  handleColorInvert() {
    // eslint-disable-next-line no-shadow
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }));
  }

  handleLogout() {
    // eslint-disable-next-line no-shadow
    const { logout } = this.props;

    this.setState({
      isLogoutPending: true,
    });

    const whenLogoutFail = () => {
      this.setState({
        isLogoutPending: false,
      });
    };

    logout(whenLogoutFail);
  }

  render() {
    const { history } = this.props;
    const { isLogoutPending, isDark } = this.state;

    if (isDark) {
      this.htmlStyle.backgroundColor = '#30404d';
    } else {
      this.htmlStyle.backgroundColor = '#fff';
    }

    return (
      <StyledDefaultLayout className={isDark && 'bp3-dark'}>
        <header>
          <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>Codedisruptors Inc.</Navbar.Heading>
              <Navbar.Divider />
              <Link to="/dashboard">
                <Button minimal icon="home" text="Home" />
              </Link>
              <Navbar.Divider />
              <Popover
                content={(
                  <Menu>
                    <MenuItem text="Update Profile" />
                    <MenuItem text="Change Password" />
                    <MenuItem text="Delete Profile" intent="danger" />
                  </Menu>
                )}
                position={Position.BOTTOM}
                interactionKind="hover"
              >
                <Button minimal icon="person" text="Profile" />
              </Popover>
              <Navbar.Divider />
              <Link to="/theme">
                <Button minimal icon="tint" text="Theme" />
              </Link>
              <Navbar.Divider />
              <StyledSwitch
                alignIndicator="center"
                label="Dark Theme"
                inline
                onChange={this.handleColorInvert}
              />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
              <Button
                onClick={this.handleLogout}
                minimal
                intent="danger"
                icon="circle-arrow-right"
                text="Logout"
                loading={isLogoutPending}
              />
            </Navbar.Group>
          </Navbar>
          <Navbar>
            <Navbar.Group>
              <BreadCrumbs history={history} />
            </Navbar.Group>
          </Navbar>
        </header>
        <Sidebar navList={navList} />
        <main>
          <Routes routeList={routes} />
        </main>
      </StyledDefaultLayout>
    );
  }
}


DefaultLayout.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  logout: PropTypes.func.isRequired,
};


const mapStateToProps = ({ auth }) => ({
  isLogin: auth.isLogin,
});

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
