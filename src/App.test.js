/**
 * Built by Sam Ayoub, Reallexi.com
 * https://github.com/melayyoub
 * https://mawajez.com
 * Important: To use this code please leave the copyright in place
 * Reallexi LLC, https://reallexi.com
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('Mawajez Test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mawajez/i);
  expect(linkElement).toBeInTheDocument();
});
