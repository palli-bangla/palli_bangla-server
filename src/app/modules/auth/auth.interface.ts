/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IUser = {
  _id?: string;
  name?: string;
  phone_number: string;
  password: string;
  role?: string;
};

export type ILogInUser = {
  phone_number: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};


export type IChangePassword = {
  oldPassword: string;
  newPassword: string;
  phone_number: string;
};

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, '_id' | 'password' | 'phone_number' | 'role'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
