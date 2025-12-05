'use strict'

import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler.js';
import UserController from '../../controllers/user.controller.js';

const router = express.Router();

router.post('', asyncHandler(UserController.createUser));
router.get('', asyncHandler(UserController.getAllUsers));
router.get('/:userId', asyncHandler(UserController.getUserById));
router.put('/:userId', asyncHandler(UserController.updateUser));
router.delete('/:userId', asyncHandler(UserController.deleteUser));

export default router;