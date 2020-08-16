import React from 'react';
import SideBarHeader from './sidebar-header';
import SideBarArea from './sidebar-area';
import SideBarFooter from './sidebar-footer';
import './sidebar.scss';

const SideBarContent = () => {
  return (
    <div className="sidebar-content">
      <SideBarHeader />
      <SideBarArea />
      <SideBarFooter />
    </div>
  );
};

export default SideBarContent;
