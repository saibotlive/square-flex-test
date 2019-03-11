import React from 'react';
import { render, fireEvent, waitForDomChange, cleanup, waitForElement } from 'react-testing-library';
import { act } from 'react-dom/test-utils';
import Content from '../Content';

describe('<Content/>', () => {
  afterEach(cleanup);

  it('should render content', async () => {
    const { container } = render(<Content />);
    act(() => {
      waitForDomChange(container);
    });

    expect(container).toMatchSnapshot();
  });

  it('should show lightbox', async () => {
    const { container } = render(<Content />);

    const item = await waitForElement(() => container.querySelectorAll('div')[1]);
    await fireEvent.click(item);

    const lightbox = document.body.querySelector('.lightbox');

    expect(lightbox).toMatchSnapshot();
  });
});
