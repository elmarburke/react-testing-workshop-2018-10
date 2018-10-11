import React from 'react';
import App from './App';
import { render, fireEvent } from 'react-testing-library';

describe('<App />', () => {
  test('add a new item to the list', () => {
    // Arrange
    const { container, getByLabelText, getByText } = render(<App />);
    // Act
    const input = getByLabelText('New Todo');
    const listItemCount = container.querySelectorAll('li').length;

    fireEvent.change(input, { target: { value: 'Test Value' } });

    fireEvent.click(getByText('Add Todo'));

    // Assert
    expect(getByText('Test Value')).toBeTruthy();
    expect(container.querySelectorAll('li').length).toBe(listItemCount + 1);
  });

  test('remove item when click on it', () => {
    // Arrange
    const { container, queryByTestId, getAllByTestId, getByTestId } = render(
      <App />
    );
    const listItemCount = getAllByTestId(/todo-list-item-\d+/).length;
    const firstItemFromList = getByTestId('todo-list-item-0');
    // Act
    fireEvent.click(firstItemFromList);
    // Assert
    expect(queryByTestId('todo-list-item-0')).toBeFalsy();
    expect(getAllByTestId(/todo-list-item-\d+/).length).toBe(listItemCount - 1);
  });
});
