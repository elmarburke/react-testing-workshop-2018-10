import React from 'react';
import PropTypes from 'prop-types';

const TodoInput = ({ value, onChange }) => (
  <label>
    New Todo
    <input placeholder="New Todo..." value={value} onChange={onChange} />
  </label>
);

TodoInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired
};

export default TodoInput;
