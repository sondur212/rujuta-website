import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ActiveContext = createContext('/');

const Store = ({ location, children }) => {
  const [active, setActive] = useState(location.pathname);

  return (
    <ActiveContext.Provider value={[active, setActive]}>
      <div>{children}</div>
    </ActiveContext.Provider>
  );
};

Store.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Store;
