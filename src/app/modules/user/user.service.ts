import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../auth/auth.model';
import { IUser } from '../auth/auth.interface';

const getAllUsers = async (): Promise<IUser[] | null> => {
  const users = await User.find();
  return users;
};


const getSingleUser = async (id: string): Promise<IUser | null> => {
  const isexits = await User.findOne({ _id: id });
  if (!isexits) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user is not found');
  }
  const singleUser = await User.findOne({ _id: id });
  return singleUser;
};


const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const isExist = await User.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user not found !');
  }

  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};


const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};


export const userService = {
  getSingleUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
