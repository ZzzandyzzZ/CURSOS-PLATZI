import { Schema, model } from 'mongoose';

const msjSchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const msjModel = model('Message', msjSchema);
export default msjModel;
