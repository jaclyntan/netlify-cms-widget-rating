import PropTypes from 'prop-types';
import React from 'react';

export default function Preview({ value }) {
  return <div><strong>Rating:</strong> { value }</div>;
}

Preview.propTypes = {
  value: PropTypes.node,
};
