import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Basic render test for App component
test('renders without crashing', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Check if "Course List" or any expected component is rendered
  const linkElement = screen.getByText(/Course List/i);
  expect(linkElement).toBeInTheDocument();
});

// Additional tests can be added here for different routes and functionalities
