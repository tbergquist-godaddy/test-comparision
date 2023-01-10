import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as fetch from 'isomorphic-fetch';

import MyAccount from '..';
import { Suspense } from 'react';

let queryClient;
let windowFetch;
beforeEach(() => {
  queryClient = new QueryClient();
  windowFetch = window.fetch;
  // @ts-ignore: we want to mock it
  window.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => {
        return Promise.resolve({
          id: 1,
          name: 'Trond',
          address: null,
          email: null
        });
      }
    })
  );
});

afterEach(() => {
  window.fetch = windowFetch;
});

it('renders with the name of the account owner', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Suspense fallback='loading'>
        <MyAccount />
      </Suspense>
    </QueryClientProvider>
  );
  await waitFor(() => expect(screen.getByText('Hello Trond')).toBeInTheDocument());
});
