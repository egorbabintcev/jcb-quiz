import React from 'react';
import { render } from '@testing-library/react';
import TUPage from './TUPage';

describe('ThankYouPage component', () => {
  it('Should render thanksgiving page with title and 3 gifts', () => {
    const { asFragment } = render(<TUPage />);
    expect(asFragment(<TUPage />)).toMatchSnapshot();
  });
})
