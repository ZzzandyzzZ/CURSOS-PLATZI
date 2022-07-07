import { Server } from 'socket.io';

const socket: { io?: any } = {};

const connect = (server: any) => {
  socket.io = new Server(server);
};

export { connect, socket };
