import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import App from '@/app/page';

test('removes the red div when "Toggle Red" is clicked', () => {
  render(<App />);

  // the red div should initially be in the document
  const redDiv = screen.getByTestId('reddiv');
  expect(redDiv).toBeInTheDocument();

  // click the toggle button
  const button = screen.getByText('Toggle Red');
  fireEvent.click(button);

  // after clicking, the red div should no longer exist
  expect(screen.queryByTestId('reddiv')).toBeNull();
});
