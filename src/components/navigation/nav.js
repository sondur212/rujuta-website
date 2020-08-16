import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './nav.scss';

export const LeftNav = ({ children }) => {
  const sidebarClass = classnames('left-nav', 'main-sidebar');
  return (
    <aside data-class="LeftNav" className={sidebarClass}>
      {' '}
      {children}
    </aside>
  );
};

LeftNav.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DsApp = ({ children }) => {
  return (
    <div data-class="DsApp" className="wrapper">
      {children}
    </div>
  );
};

DsApp.propTypes = {
  children: PropTypes.node.isRequired,
};

export const BodyOuter = ({ children }) => {
  return (
    <div data-class="BodyOuter" className="body-outer">
      {children}
    </div>
  );
};

BodyOuter.propTypes = {
  children: PropTypes.node.isRequired,
};

export const BodyContent = ({ children }) => {
  return (
    <div data-class="BodyContent" className="body-content">
      {children}
    </div>
  );
};

BodyContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SideBarControl = () => {
  return (
    <aside
      data-class="SideBarControl"
      className="control-sidebar control-sidebar-dark"
    />
  );
};

SideBarControl.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TopNav = ({ children }) => {
  return (
    <header data-class="TopNav" className="main-header">
      {children}
    </header>
  );
};

TopNav.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Body = ({ children }) => {
  return (
    <div data-class="body" className="wrapper">
      {children}
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
};
