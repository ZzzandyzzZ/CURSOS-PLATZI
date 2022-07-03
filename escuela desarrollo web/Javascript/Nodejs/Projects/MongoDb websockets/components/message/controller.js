const addMessage = (user, message) => new Promise(
  (resolve, reject) => {
    if (!user || !message) {
      reject(new Error('User or message is missing'));
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };
    resolve(fullMessage);
  },
);

export default { addMessage };
