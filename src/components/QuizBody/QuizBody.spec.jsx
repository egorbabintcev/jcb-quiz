import React from 'react';
import { render } from '@testing-library/react';
import QuizBody from './QuizBody';

describe('QuizBody component', () => {
  it('Should render children props', () => {
    const { getByTestId } = render(
      <QuizBody>
        <span data-testid="test-span">test</span>
      </QuizBody>
    );
    expect(getByTestId('test-span')).toBeInTheDocument();
  })
})
