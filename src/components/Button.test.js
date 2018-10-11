import React from 'react';
import Button from './Button';
import { render, fireEvent } from 'react-testing-library';

describe('<Button />', () => {
  test('basic render', () => {
    // Arrange
    const { container } = render(<Button>Send Data</Button>);
    // Act
    // Assert
    expect(container).toHaveTextContent('Send Data');
    expect(container.firstChild).toMatchSnapshot()
  });

  test('handle onClick', () => {
    // Arrange
    const handleClick = jest.fn();
    const { container, getByText } = render(
      <Button onClick={handleClick}>Submit</Button>
    );
    // Act
    fireEvent.click(getByText('Submit'));
    //Assert
    expect(handleClick).toHaveBeenCalled();
  });
});
