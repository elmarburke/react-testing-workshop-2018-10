import React from 'react';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import Button from '../components/Button';
import TodoListData from './TodoListData'

class App extends React.Component {
  render() {
    return (
      <TodoListData>
        {({
          todos,
          newTodoValue,
          handleAddTodo,
          handleNewTodoInputChange,
          remove
        }) => (
          <>
            <TodoInput
              value={newTodoValue}
              onChange={handleNewTodoInputChange}
            />
            <Button onClick={handleAddTodo}>Add Todo</Button>
            <TodoList todos={todos} remove={remove} />
          </>
        )}
      </TodoListData>
    );
  }
}

export default App;
