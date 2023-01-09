import { Suspense } from 'react';
import { QueryClient, dehydrate } from '@tanstack/react-query';

import MyAccount, { FETCH_ACCOUNT, fetchFn } from '../modules/my-account';

export default function MyApp(): JSX.Element {
  return (
    <Suspense fallback='loading...'>
      <MyAccount />
    </Suspense>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [FETCH_ACCOUNT],
    queryFn: fetchFn
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
