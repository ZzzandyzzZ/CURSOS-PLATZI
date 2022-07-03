import message from '../components/message/network';

const routes = (server) => {
  server.use('/message', message);
};

export default routes;
