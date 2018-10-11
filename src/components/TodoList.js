import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, remove }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} remove={remove} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({ todo: TodoItem.propTypes.todo }).isRequired
  ).isRequired,
  remove: PropTypes.func.isRequired
};

export default TodoList;
