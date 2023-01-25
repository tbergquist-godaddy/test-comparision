// import axios from 'axios';

import { z } from 'zod';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email().nullable()
});

// export default async function fetchAccount() {
//   const { data } = await axios.get('http://localhost:3000/api/account');
//   return userSchema.parse(data);
// }
export default async function fetchAccount() {
  const res = await fetch('http://localhost:3000/api/account');
  const json = await res.json();
  return userSchema.parse(json);
}
