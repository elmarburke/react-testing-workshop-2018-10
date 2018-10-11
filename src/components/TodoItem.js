import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, remove }) => (
  <li onClick={() => remove(todo.id)}> {todo.text}</li>
);

TodoItem.propTypes = {
  remove: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default TodoItem;
