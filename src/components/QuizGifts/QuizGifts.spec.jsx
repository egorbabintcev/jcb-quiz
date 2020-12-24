import React from 'react';
import { render } from '@testing-library/react';
import QuizGifts from './QuizGifts';

describe('QuizGifts component', () => {
  it('Should render component with title and 3 gifts', () => {
    const { asFragment } = render(<QuizGifts />);
    expect(asFragment(<QuizGifts />)).toMatchSnapshot();
  });
})
