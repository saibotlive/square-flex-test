import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from './App';

describe('<Content/>', () => {
  afterEach(cleanup);

  it('should render content', async () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
