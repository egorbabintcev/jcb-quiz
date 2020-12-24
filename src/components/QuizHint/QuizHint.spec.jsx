import React from 'react';
import { render } from '@testing-library/react';
import QuizHint from './QuizHint';

describe('QuizHint component', () => {
  it('Default props', () => {
    const { getByTestId } = render(<QuizHint />);
    expect(getByTestId('hint-wrapper')).not.toHaveTextContent();
  });

  it('Should render html string througn innerHtml set', () => {
    const { getByTestId, getByText } = render(<QuizHint hint={'<code>test</code>'} />);
    expect(getByTestId('hint-wrapper')).toContainElement(getByText(/test/i, { selector: 'code' }));
  });
})
