import { screen, render } from './utils/TestUtils';

import App from './App';

describe('App', () => {
  it('Should work with API Call', async () => {
    render(<App></App>);
    const name = await screen.findByText('Leanne Graham');
    expect(name).toBeInTheDocument();
  });
});
