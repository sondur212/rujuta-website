import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.scss';

const SideBar = ({ children }) => {
  return (
    <nav data-class="SideBar" className="sidebar">
      {children}
    </nav>
  );
};

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideBar;
