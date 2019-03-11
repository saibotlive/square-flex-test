import React from 'react';
import { render, waitForDomChange } from 'react-testing-library';
import useFetch from './useFetch';

describe('useFetch', () => {
  it('works with `useEffect`', async () => {
    const Comp = () => {
      const data = useFetch('url');
      return <div>{data[0] && data[0].title}</div>;
    };

    const { container } = render(<Comp />);
    await waitForDomChange(container);
    expect(container.textContent).toEqual('Lorem Ipsum 1');
  });
});
