import { useQuery } from '@tanstack/react-query';

import fetchAccount from '../api/fetch-account';

export const FETCH_ACCOUNT = 'FETCH_ACCOUNT';

export default function useAccount() {
  // if (fetchAccount.some.path) {
  //   return null;
  // }
  return useQuery({ queryKey: [FETCH_ACCOUNT], queryFn: fetchAccount, suspense: true });
}
