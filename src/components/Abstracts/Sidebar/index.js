import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import { Logo } from '../../Base';
import {
  SidebarContainer,
  SidebarNav,
  SidebarList,
  SidebarListItem,
  SidebarToggler,
  SidebarLogoContainer,
} from './styles';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);


    this.state = {};
    this.renderNav = this.renderNav.bind(this);
  }

  renderNav(navList, subClassName) {
    return (
      <SidebarList className={subClassName}>
        {navList.map(item => (
          <SidebarListItem key={item.name}>
            {((listItem) => {
              /*
If 'path' does exists then just return the 'NavLink' component

else

It will assume that the 'item' contains 'children' property
and traverse through it using recursion for another children and another and another and another....
                */
              if (!Object.prototype.hasOwnProperty.call(listItem, 'path')) {
                if (Object.keys(listItem).includes('children')) {
                  const {
                    icon, name, children, ...rest
                  } = listItem;

                  // This statement below will give functionality to dropdown
                  // eslint-disable-next-line react/destructuring-assignment
                  const containerClass = this.state[name]
                    ? 'sidebar-sub--container--expand'
                    : 'sidebar-sub--container';

                  /*
Using 'React.Fragment' to contain 2 individual
jsx elements without using 'key' property
*/
                  return (
                    <React.Fragment>
                      <SidebarToggler
                        type="button"
                        intent="success"
                        onClick={(e) => {
                          e.preventDefault();

                          /* Toggle the 'renderNav' base on the given name */
                          this.setState(prevState => ({
                            ...prevState,
                            [name]: !prevState[name],
                          }));
                        }}
                        {...rest}
                      >
                        <Icon icon={icon || 'circle'} />
                        {name}
                      </SidebarToggler>
                      {/* Recursively returting 'ul' element */}
                      {this.renderNav(children, containerClass)}
                    </React.Fragment>
                  );
                }
                return <p>{listItem.name}</p>;
              }
              const {
                path,
                name,
                icon,
                ...rest
              } = listItem;

              return (
                <NavLink to={path} {...rest} activeClassName="activeLink">
                  <Icon icon={icon || 'circle'} />
                  {name}
                </NavLink>
              );
            })(item)}
          </SidebarListItem>
        ))}
      </SidebarList>
    );
  }


  render() {
    const { navList, ...rest } = this.props;

    return (
      <SidebarContainer {...rest}>
        <SidebarLogoContainer>
          <Logo />
        </SidebarLogoContainer>
        <SidebarNav>
          {this.renderNav(navList)}
        </SidebarNav>
      </SidebarContainer>
    );
  }
}


Sidebar.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidebar;
