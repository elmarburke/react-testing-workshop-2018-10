import React from 'react';
import Button from './Button';
import { render } from 'react-testing-library';

describe('<Button />', () => {
  test('basic render', () => {
    // Arrange
    const { container, asFragment } = render(<Button>Send Data</Button>);
    // Act
    // Assert
    expect(container).toHaveTextContent('Send Data');
    // expect(container.firstChild).toMatchSnapshot()
  });
});
