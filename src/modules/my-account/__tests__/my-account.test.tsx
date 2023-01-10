import { render, screen, waitFor } from '@testing-library/react';

import MyAccount from '..';

jest.mock('../hooks/useAccount', () => () => ({ data: { id: 1, name: 'Trond', email: null } }));

it('renders with the name of the account owner', async () => {
  render(<MyAccount />);
  await waitFor(() => expect(screen.getByText('Hello Trond')).toBeInTheDocument());
});
