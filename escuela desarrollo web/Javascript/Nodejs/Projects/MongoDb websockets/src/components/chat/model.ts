import { Schema, model } from 'mongoose';

const chatSchema = new Schema({
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
});

export default model('Chat', chatSchema);
