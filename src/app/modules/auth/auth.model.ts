/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../../config';
import { IUser, UserModel } from './auth.interface';

const userSchema = new Schema<IUser>(
  {
    password: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: 'admin',
    },
    name: {
      type: String,
      // required: true,
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

//Pre-Save Hook: password hashing

userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password') || user.isNew) {
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bycrypt_salt_rounds)
    );
  }
  next();
});

// type UserProjection = Pick<IUser, "_id" | "password" | "role" | "phone_number" | "name">;

// userSchema.statics.isUserExist = async function (
//   phone_number: string
// ): Promise<UserProjection | null> {
//   return await User.findOne(
//     { phone_number },
//     { _id: 1, password: 1, role: 1, phone_number: 1, name: 1 }
//   );
// };

// check user exit  Static Method
userSchema.statics.isUserExist = async function (
  phone_number: string
): Promise<IUser | null> {
  return await User.findOne(
    { phone_number },
    { _id: 1, password: 1, role: 1, phone_number: 1 }
  );
};

// check  password match  Static Method

userSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

export const User = model<IUser, UserModel>('User', userSchema);

// export const User = model<IUser>('User', userSchema);
