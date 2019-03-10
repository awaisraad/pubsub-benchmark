const Redis = require('ioredis');

const redis = new Redis();

async function main() {
  
  for (let count = 0; count < 1000; count++) {
    startPublishing()
  }
}

function startPublishing() {
  const message = 'This message is from Redis client';
  setInterval(() => redis.publish('inbox.10322', message))
}

main().catch(console.error);
