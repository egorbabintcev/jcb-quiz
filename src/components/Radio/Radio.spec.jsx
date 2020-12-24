import React from 'react';
import { render } from '@testing-library/react';
import Radio from './Radio';
import userEvent from '@testing-library/user-event';

describe('Radio asnwer component', () => {
  it('With default props', () => {
    const { getByRole } = render(<Radio />);
    const radioBtn = getByRole('radio');
    expect(userEvent.click(radioBtn)).toBeUndefined();
});
})
