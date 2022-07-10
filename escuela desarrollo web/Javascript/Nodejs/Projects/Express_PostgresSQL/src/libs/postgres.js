import { Client } from 'pg';

const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'andy',
    password: 'andy123',
    database: 'my_store',
  });
  await client.connect();
  return client;
};

export default getConnection;
