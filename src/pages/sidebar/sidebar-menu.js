import React from 'react';
import PropTypes from 'prop-types';

import './sidebar.scss';

const SideBarMenu = ({ children }) => {
  return (
    <ul data-class="SideBarMenu" className="sidebar-menu">
      {' '}
      {children}
    </ul>
  );
};

SideBarMenu.propTypes = {
  children: PropTypes.node,
};

export default SideBarMenu;
