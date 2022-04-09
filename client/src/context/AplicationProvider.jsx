import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import AplicationContext from './AplicationContext';

function AplicationProvider({ children }) {
  const stateValue = useMemo(() => ({}), []);

  return (
    <AplicationContext.Provider value={stateValue}>
      { children }
    </AplicationContext.Provider>
  );
}

AplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AplicationProvider;
