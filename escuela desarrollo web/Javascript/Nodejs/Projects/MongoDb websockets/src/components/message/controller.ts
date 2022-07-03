interface Message {
  user: string,
  message: string,
  date: Date,
};

const addMessage = (user:string, message:string):Promise<Message> => new Promise(
  (resolve, reject) => {
    if (!user || !message) {
      reject(new Error('User or message is missing'));
    }
    const fullMessage:Message = {
      user,
      message,
      date: new Date()
    };
    resolve(fullMessage);
  }
);

export { addMessage, Message };
