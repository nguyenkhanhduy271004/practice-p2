'use strict'

import { SuccessResponse } from "../core/success.response.js"
import UserSerivce from "../services/user.service.js"

class UserController {


    createUser = async (req, res, next) => {

        new SuccessResponse({
            message: 'Useer created successfully',
            metadata: await UserSerivce.createUser(req.body)
        }).send(res)
    }

    getAllUsers = async (req, res, next) => {


        new SuccessResponse({
            message: 'Get all users successfully',
            metadata: await UserSerivce.getAllUsers(req.query)
        }).send(res)
    }

    getUserById = async (req, res, next) => {

        new SuccessResponse({
            message: 'Get user info successfully',
            metadata: await UserSerivce.getUserById(req.params.userId)
        }).send(res)
    }

    updateUser = async (req, res, next) => {

        new SuccessResponse({
            message: 'User updated successfully',
            metadata: await UserSerivce.updateUser(req.params.userId, req.body)
        }).send(res)
    }

    deleteUser = async (req, res, next) => {

        new SuccessResponse({
            message: 'User deleted successfully',
            metadata: await UserSerivce.deleteUser(req.params.userId)
        }).send(res)
    }

}

export default new UserController()