import { User } from '../../types';
import * as str from './store';

const addUser = (userName:string) => {
  if (!userName) {
    return Promise.reject(new Error('Missing user name'));
  }
  const user:User = {
    name: userName,
  };
  return str.addUser(user);
};

const listUsers = () => {
  return str.listUsers();
};

export { addUser, listUsers };
