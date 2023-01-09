import { render, screen } from '@testing-library/react';

import MyAccount from '../my-account';

it('With the name of the account owner', () => {
  render(<MyAccount />);
  expect(screen.getByText('Hello Trond')).toBeInTheDocument();
});
