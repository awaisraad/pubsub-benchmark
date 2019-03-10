const Nats = require('ts-nats');

async function main() {
  const nats = await Nats.connect({ servers: ['nats://127.0.0.1:4222'] });
  
  for (let count = 0; count < 1000; count++) {
    startPublishing(nats)
  }
}

/**
 * @param {Client} client
 */
function startPublishing(client) {
  const payload = { message: 'This message is from Nats client' };
  const data = JSON.stringify(payload);
  
  setInterval(() => client.publish('inbox.10332', data))
}

main().catch(console.error);
