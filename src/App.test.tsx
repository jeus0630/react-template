import { screen, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render correctly', () => {
    render(<App></App>);
    const countButton = screen.getByRole('button', {
      name: 'count is 0',
    });
    expect(countButton).toBeInTheDocument();
  });
});
