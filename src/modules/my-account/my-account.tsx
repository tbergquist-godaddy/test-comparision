import useAccount from './hooks/useAccount';

export default function MyAccount(): JSX.Element {
  const { data } = useAccount();
  return <h1>Hello {data?.name}</h1>;
}
