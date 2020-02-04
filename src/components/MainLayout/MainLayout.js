import React from 'react';
import PropTypes from 'prop-types';
import Headre from '../Headre/Headre.';

const MainLayout = ({children}) => (
  <div>
    <Headre />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;