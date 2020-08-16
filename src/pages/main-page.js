/**
 * This is where application starts
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DsApp, TopNav } from '../components/navigation/nav';
import SideBarArea from './sidebar/sidebar-area';

import Store from './store';

const MainPage = (props) => {
  return (
    <Store {...props}>
      <DsApp>
        <TopNav>
          <SideBarArea />
        </TopNav>
        {props.children}
      </DsApp>
    </Store>
  );
};

MainPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainPage;
