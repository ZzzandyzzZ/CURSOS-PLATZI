const success = (req, res, message, status=200) => {
  res.status(status);
  res.send({
    error: '',
    body: message,
  });
};
const error = (req, res, message, status=500, detail) => {
  console.error(detail);
  res.send(status, {
    error: message,
    body: '',
  });
};

export {success, error};
