import { Schema, model } from 'mongoose';

const msjSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'Chat',
  },
  message: {
    type: String,
    required: true,
  },
  fileUrl: String,
  date: Date,
});

const msjModel = model('Message', msjSchema);
export default msjModel;
