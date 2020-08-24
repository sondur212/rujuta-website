import React from 'react';
import PropTypes from 'prop-types';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MainPage from './main-page';
import { pageRoutes } from './sidebar/sidebar-area';

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/work" />} />
      <Route
        path="/:page"
        render={(props) => {
          const page = props.match.params.page;

          return page !== 'login' && page !== 'logout' ? (
            <MainPage {...props}>{pageRoutes()}</MainPage>
          ) : null;
        }}
      />
    </Switch>
  </Router>
);

Routing.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string,
    }),
  }),
};

export default Routing;
