// import fetch from 'isomorphic-fetch';
import { z } from 'zod';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email().nullable()
});

export default async function fetchAccount() {
  const res = await fetch('http://localhost:3000/api/account');
  const json = await res.json();
  return userSchema.parse(json);
}
