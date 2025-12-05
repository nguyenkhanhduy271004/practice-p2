'use strict'

import e from "express";
import mongoose from "mongoose"

const COLLECTION_NAME = 'Users'
const DOCUMENT_NAME = 'User'

var userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    status: {type: String, enum: ['active', 'inactive'], default: 'active'},
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});


const UserModel = mongoose.model(DOCUMENT_NAME, userSchema);

export default UserModel;