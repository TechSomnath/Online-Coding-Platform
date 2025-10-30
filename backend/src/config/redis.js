const { createClient }  = require('redis');


const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-11320.c263.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 11320
    }
});
module.exports = redisClient;