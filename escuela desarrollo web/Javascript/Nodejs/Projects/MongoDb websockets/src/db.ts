import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => {
  const URI = process.env.MONGO_URI || '';
  mongoose.connect(URI);
  const db = mongoose.connection;
  db.on('error', (e) => console.error('error', e));
  db.once('open', () => console.log('Mongoose is connected'));
};

export default connect;
