'use strict'
import mongoose from "mongoose"
import os from "os"
import process from "process"

const _SECONDES = 5000;

const countConnect = () => {
    const numConnections = mongoose.connections.length;
    console.log(`Number of connections::${numConnections}`);
};

const checkOverload = () => {

    setInterval(() => {

        const numConnections = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        const maxConnections = numCores * 5;

        console.log(`Active connections::${numConnections}`);
        console.log(`Memory usage (RSS)::${(memoryUsage / 1024 / 1024).toFixed(2)} MB`);

        if (numConnections > maxConnections) {
            console.warn(`Overload detected: ${numConnections} connections (max: ${maxConnections})`);
        }
    }, _SECONDES);
}

export {countConnect, checkOverload};
