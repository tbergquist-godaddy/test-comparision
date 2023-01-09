import useAccount from './hooks/useAccount';
export { FETCH_ACCOUNT } from './hooks/useAccount';
export { default as fetchFn } from './api/fetch-account';

export default function MyAccount(): JSX.Element {
  const { data } = useAccount();
  console.log({ data });
  return <h1>Hello {data.name}</h1>;
}
