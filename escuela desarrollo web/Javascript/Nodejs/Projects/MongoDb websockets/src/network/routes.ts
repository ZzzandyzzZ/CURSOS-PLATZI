import { Application } from 'express';

import message from '../components/message/network';

const routes = (server:Application):void => {
  server.use('/message', message);
};

export default routes;
