'use strict'

import bcrypt from 'bcrypt'
import UserModel from "../models/user.model.js";
import { NotFoundError } from "../core/error.response.js";
import {getInfoData, removeUndefinedObject} from "../utils/index.js";

class UserSerivce {

    static async createUser(data) {

        const { username, email, password } = data;

        const foundUser = await UserModel.findOne({ $or: [{ username }, { email }] });

        if (foundUser) {
            throw new Error('Username or Email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            username,
            email,
            password: hashedPassword
        });

        return getInfoData({
            fields: ['username', 'email', 'status'],
            object: newUser
        }); ;
    }

    static async getUserById(userId) {

        const foundUser = await UserModel.findById(userId);

        if (!foundUser) {
            throw new NotFoundError('User not found');
        }

        return getInfoData({
            fields: ['username', 'email', 'status'],
            object: foundUser
        });

    }


    static async getAllUsers({ status = 'active', limit = 10, page = 0 }) {

        const query = { status };

        const skip = page * limit;

        const fields = ['_id', 'username', 'email', 'status'];

        const users = await UserModel.find(query).skip(skip).limit(limit).select(fields).lean().exec();


        return users;
    }


    static async updateUser(userId, data) {

        data = removeUndefinedObject(data);

        const foundUser = await UserModel.findByIdAndUpdate(userId, data, { new: true });
        if (!foundUser) {
            throw new NotFoundError('User not found');
        }
        return getInfoData({
            fields: ['username', 'email', 'status'],
            object: foundUser
        });
    }

    static async deleteUser(userId) {
        const deletedUser = await UserModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new NotFoundError('User not found');
        }
        return;
    }
}

export default UserSerivce;