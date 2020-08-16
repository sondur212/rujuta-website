import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { ActiveContext } from '../store';
// import * as Authentication from 'stores/authentication';
// import readAccess from 'components/rbac/read-access';
// const myLogger = require('util/logging')('sidebar-item');

import './sidebar.scss';

const SideBarItem = ({ label, component }) => {
  const [active, setActive] = useContext(ActiveContext);
  const url = component.Url;

  const itemClass =
    url === active
      ? classnames('sidebar-item-content', 'active')
      : 'sidebar-item-content';

  return (
    <li className="sidebar-item">
      <div className={itemClass}>
        <Link onClick={() => setActive(url)} to={{ pathname: url }}>
          <span>{label} </span>
        </Link>
      </div>
    </li>
  );
};

SideBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default SideBarItem;
