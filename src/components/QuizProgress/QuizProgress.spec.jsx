import React from 'react';
import { render } from '@testing-library/react';
import QuizProgress from './QuizProgress';

describe('QuizProgress component', () => {
  it('Should count the percentage if the step be bigger on 1, and minus 10% from the result', () => {
    const { getByTestId } = render(<QuizProgress step={1} length={4} />);
    expect(getByTestId('percentage-bar')).toHaveStyle('width: 40%');
  });

  it('Should render "Завершено" and 100% in percentage bar, when isFinished is true', () => {
    const { getByTestId, getByText } = render(<QuizProgress isFinished={true} />);
    expect(getByTestId('percentage-bar')).toHaveStyle('width: 100%');
    expect(getByText(/Завершено/i)).toBeInTheDocument();
  });
})
