import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

test('renders welcome message', () => {
  const screen = render(<App />);
  const welcome = screen.getByText('Welcome to the Tandem Code Challenge');
  expect(welcome).toBeTruthy();
});
