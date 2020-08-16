import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './main-view.scss';

export const MainView = ({ className, children }) => {
  const classes = classNames('main-view', className);
  return (
    <div
      data-class="MainView"
      className={classes}
      style={{ minHeight: 'calc(100vh - 50px)' }}
    >
      {' '}
      {children}
    </div>
  );
};

MainView.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * used for rendering view contents
 */
export const ViewContent = ({ className, children }) => {
  const classes = classNames('viewContent', className);
  return (
    <section data-class="ViewContent" className={classes}>
      {' '}
      {children}
    </section>
  );
};

ViewContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const BreadCrumb = ({ breadCrumbLink, breadCrumbLabel }) => {
  return breadCrumbLink && breadCrumbLabel ? (
    <Link className="text-white font-md" to={breadCrumbLink}>
      <span className="pl-5">-</span>{' '}
      <span className="font-uline">{breadCrumbLabel}</span>
    </Link>
  ) : null;
};

BreadCrumb.propTypes = {
  breadCrumbLink: PropTypes.string,
  breadCrumbLabel: PropTypes.string,
};

export const ViewHeader = ({ subLabel, label, children }) => {
  return (
    <section data-class="ViewHeader" className="content-header">
      <div className="content-label-box">
        <div className="content-sublabel">{subLabel}</div>
        <h3>{label}</h3>
      </div>
      {/* <BreadCrumb {...props} /> */}
      {children}
    </section>
  );
};

ViewHeader.propTypes = {
  subLabel: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
};
