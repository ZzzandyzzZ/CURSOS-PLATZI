const success = (req, res, message, status = 200) => {
  res.status(status)
    .send({
      error: '',
      body: message,
    });
};
const error = (req, res, message, status = 500, detail = '') => {
  console.error('ERROR', detail);
  res.status(status)
    .send({
      error: message,
      body: '',
    });
};

export { success, error };
