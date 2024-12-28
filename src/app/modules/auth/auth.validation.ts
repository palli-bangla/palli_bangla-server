import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    phone_number: z.string({
      required_error: 'email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
  }),
});

const loginUserZodSchema = z.object({
  body: z.object({
    phone_number: z.string({
      required_error: 'phone_number is required',
    }),
    password: z.string({
      required_error: 'password is required',
    })
  }),
});

const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh Token is required',
    }),
  }),
});

const changePassWordZodSchema = z.object({
  body: z.object({
    phone_number: z.string({
      required_error: 'phone_number is required',
    }),
    oldPassword: z.string({
      required_error: 'oldPassword is required',
    }),
    newPassword: z.string({
      required_error: 'newPassword is required',
    }),
  }),
});


export const AuthValidation = {
  createUserZodSchema,
  loginUserZodSchema,
  refreshTokenZodSchema,
  changePassWordZodSchema
};