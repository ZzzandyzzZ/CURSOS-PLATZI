const addMessage = (user, message)=>{
  return new Promise((resolve, reject)=>{
    if (!user || !message) {
      reject(new Error('User or message is missing'));
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    resolve(fullMessage);
  });
};

export {addMessage};
