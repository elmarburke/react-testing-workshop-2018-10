import React from 'react';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import Button from '../components/Button';

/**
 * @argument {{id: number}[]} todos
 * @argument {number} id
 */
const removeId = (todos, id) => todos.filter(todo => todo.id !== id);

class App extends React.Component {
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
    const { todos, newTodoValue } = this.state;

    return (
      <>
        <TodoInput
          value={newTodoValue}
          onChange={this.handleNewTodoInputChange}
        />
        <Button onClick={this.handleAddTodo}>Add Todo</Button>
        <TodoList todos={todos} remove={this.remove} />
      </>
    );
  }
}

export default App;
