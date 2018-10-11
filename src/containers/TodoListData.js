import React from 'react';


/**
 * @argument {{id: number}[]} todos
 * @argument {number} id
 */
const removeId = (todos, id) => todos.filter(todo => todo.id !== id);


class TodoListData extends React.Component {
  state = {
    todos: [
      { id: 0, text: 'Test my application' },
      { id: 1, text: 'Make an Blendle account' }
    ],
    newTodoValue: ''
  };

  remove = id => {
    this.setState(prevState => ({
      todos: removeId(prevState.todos, id)
    }));
  };

  handleNewTodoInputChange = e => {
    this.setState({
      newTodoValue: e.target.value
    });
  };

  handleAddTodo = () => {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        { id: prevState.todos.length, text: prevState.newTodoValue }
      ],
      newTodoValue: ''
    }));
  };

  render() {
    const { children } = this.props;
    const { newTodoValue, todos } = this.state;

    return children({
      todos,
      newTodoValue,
      handleAddTodo: this.handleAddTodo,
      handleNewTodoInputChange: this.handleNewTodoInputChange,
      remove: this.remove
    });
  }
}

export default TodoListData;
