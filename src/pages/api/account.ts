import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  const user = {
    id: 1,
    name: 'Trond',
    address: null,
    email: null
  };
  res.status(200).json(user);
}
