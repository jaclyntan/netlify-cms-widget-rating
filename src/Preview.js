import PropTypes from 'prop-types';
import React from 'react';

export default function Preview({ field,value }) {
  return <div><strong>{field.get('label')}:</strong> { value }</div>
}

Preview.propTypes = {
  value: PropTypes.node,
};
