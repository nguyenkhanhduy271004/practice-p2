'use strict';

import mongoose from 'mongoose';

const connectString = 'mongodb://mongo:27017/practiceDB';

mongoose.connect(connectString)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

if (1 == 1) {
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true });
};

export default mongoose;