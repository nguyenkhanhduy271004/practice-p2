'use strict'

import express from "express";
import routerUser from "./user/index.js";
const router = express.Router();


router.use('/v1/api/users', routerUser)

export default router;
