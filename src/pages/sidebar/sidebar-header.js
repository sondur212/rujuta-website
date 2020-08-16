import React from 'react';
import './sidebar.scss';

const SideBarHeader = () => {
  return (
    <div data-class="SideBarHeader" className="sidebar-header">
      <div
        className="flow-builder"
        data-init="Flow Builder"
        data-hover="FB"
      ></div>
      <div
        className="flow-dev"
        data-init="Dev Environment"
        data-hover="Dev"
      ></div>
    </div>
  );
};

export default SideBarHeader;
