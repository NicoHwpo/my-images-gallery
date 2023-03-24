import React from 'react';
import { Spinner as Loader } from 'react-bootstrap';

const spinnerStyle = {
  position: 'absolute',
  top: 'calc(40% - 1rem)',
  left: 'calc(50% - 1rem)',
};

const Spinner = () => {
  return <Loader style={spinnerStyle} animation="border" variant="danger" />;
};

export default Spinner;
