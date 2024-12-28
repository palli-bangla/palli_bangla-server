"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../../../config"));
const userSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
//Pre-Save Hook: password hashing
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        if (user.isModified('password') || user.isNew) {
            user.password = yield bcrypt_1.default.hash(user.password, Number(config_1.default.bycrypt_salt_rounds));
        }
        next();
    });
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
userSchema.statics.isUserExist = function (phone_number) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield exports.User.findOne({ phone_number }, { _id: 1, password: 1, role: 1, phone_number: 1 });
    });
};
// check  password match  Static Method
userSchema.statics.isPasswordMatched = function (givenPassword, savedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.compare(givenPassword, savedPassword);
    });
};
exports.User = (0, mongoose_1.model)('User', userSchema);
// export const User = model<IUser>('User', userSchema);
