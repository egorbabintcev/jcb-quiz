import React from 'react';
import { render } from '@testing-library/react';
import QuizSidebar from './QuizSidebar';

describe('QuizSidebar component', () => {
  it('Should render children props', () => {
    const { getByTestId } = render(
      <QuizSidebar>
        <span data-testid="test-span">test</span>
      </QuizSidebar>
    );
    expect(getByTestId('test-span')).toBeInTheDocument();
  })
})
