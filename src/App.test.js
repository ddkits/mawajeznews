import { render, screen } from '@testing-library/react';
import App from './App';

test('Mawajez Test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mawajez/i);
  expect(linkElement).toBeInTheDocument();
});
