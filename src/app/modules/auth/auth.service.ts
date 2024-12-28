import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import {
  IChangePassword,
  ILogInUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
  IUser,
} from './auth.interface';
import { User } from './auth.model';

const insertIntoDB = async (user: IUser): Promise<IUser | null> => {
  const isUserExist = await User.isUserExist(user.phone_number);
  if (isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User is already exits');
  }
  const createdUser = await User.create(user);
  return createdUser;
};


const logInUser = async (userData: ILogInUser): Promise<ILoginUserResponse> => {
  const isUserExist = await User.isUserExist(userData.phone_number);

  console.log(userData, 'userData');
  console.log(isUserExist, 'isUserExist');
  
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user does not exist');
  }
  
  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(userData.password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }
  
  const { _id, role, phone_number} = isUserExist;
  
  const accessToken = jwtHelpers.createToken(
    { _id, role , phone_number},
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  
  console.log(accessToken, 'accessToken');
  const refreshToken = jwtHelpers.createToken(
    { _id, role ,phone_number  },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
  }
  const { _id } = verifiedToken;

  const isUserExist = await User.findOne({ _id });
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserExist._id,
      role: isUserExist.role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};


//change password

const changePassword = async (userInfo: IChangePassword) => {
  const { oldPassword, newPassword, phone_number } = userInfo;

  // console.log(userInfo, 'userInfo');
  const isUserExist = await User.isUserExist(phone_number);
// console.log(isUserExist, 'isUserExist');
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const isMatchPassword = await User.isPasswordMatched(
    oldPassword,
    isUserExist.password
  );
  console.log(isMatchPassword, 'isMatchPassword');

  if (!isMatchPassword) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is not matched');
  }

  // Hash the new password before updating
  const hashedPassword = await bcrypt.hash(newPassword, Number(config.bycrypt_salt_rounds));

  // Update the user with the hashed password
  const result = await User.findOneAndUpdate({ phone_number }, { password: hashedPassword }, { new: true });
console.log(result, 'result');
  return result;
};



export const authService = {
  insertIntoDB,
  logInUser,
  refreshToken,
  changePassword,
};
