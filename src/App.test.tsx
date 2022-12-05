import { screen, render } from './utils/TestUtils';

import App from './App';

describe('App', () => {
  it('Should work with API Call', () => {
    render(<App></App>);
    const homeText = screen.getByText(/Vite React Template !/);
    expect(homeText).toBeInTheDocument();
  });
});
