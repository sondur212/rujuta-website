import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Collapse } from 'react-bootstrap';
// import readAccess from 'components/rbac/read-access';

const SidebarGroup = ({ label, iconClass, children }) => {
  /**
   * am I active?
   * @private
   */
  // const _isActive = () =>
  // {
  //     const { activeItem } = this.context;
  //     return activeItem === this.props.eventKey;
  // }

  // _setActive() {
  //     this.context.onActiveChange(this.props.eventKey);
  // }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    return;
    // const { activeItem } = this.context;
    // if (activeItem === this.props.eventKey) {
    //     this.context.onActiveChange(null);
    // } else {
    //     this._setActive();
    // }
  };

  const _renderChildren = () => {
    return children;
  };

  const _renderChildrenWrapper = () => {
    return (
      <Collapse>
        <ul className="treeview-menu">{_renderChildren()}</ul>
      </Collapse>
    );
  };
  // const active = this._isActive;
  // const classes = classNames('treeview', active ? 'active' : null);
  const classes = classNames('treeview', 'active');
  const parentIconClassName = `${iconClass} font-xlg`;
  return (
    <li className={classes}>
      <a href="/config" onClick={handleClick}>
        <i className={parentIconClassName} />
        <span>{label}</span>
        <i className="fa fa-angle-left pull-right" />
      </a>
      {_renderChildrenWrapper()}
    </li>
  );
};

SidebarGroup.propTypes = {
  label: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SidebarGroup;
