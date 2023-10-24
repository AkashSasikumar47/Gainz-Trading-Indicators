import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Gainz Trading Indicators link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Gainz Trading Indicators/i);
  expect(linkElement).toBeInTheDocument();
});
