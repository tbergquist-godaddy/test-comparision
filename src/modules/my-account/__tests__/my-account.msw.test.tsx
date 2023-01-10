import { Suspense } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { rest } from 'msw';

import MyAccount from '..';
import { server } from '../../../test/server';

let queryClient;
beforeEach(() => {
  queryClient = new QueryClient();
});

it('renders with the name of the account owner', async () => {
  server.use(
    rest.get('http://localhost:3000/api/account', (_, res, ctx) => {
      return res(
        ctx.json({
          id: 1,
          name: 'Trond',
          address: null,
          email: null
        })
      );
    })
  );

  render(
    <QueryClientProvider client={queryClient}>
      <Suspense fallback='loading'>
        <MyAccount />
      </Suspense>
    </QueryClientProvider>
  );

  await waitFor(() => expect(screen.getByText('Hello Trond')).toBeInTheDocument());
});
