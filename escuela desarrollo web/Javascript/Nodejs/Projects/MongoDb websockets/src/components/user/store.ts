import { User } from '../../types';
import UserModel from './model';

const addUser = (user:User) => {
  const newUser = new UserModel(user);
  return newUser.save();
};

const listUsers = () => {
  return UserModel.find();
};

export { addUser, listUsers };
