import { Schema, model } from 'mongoose';

const chatSchema = new Schema({
  users: [{
    type: Schema.Types.ObjectId,
  }],
});

export default model('Chat', chatSchema);
