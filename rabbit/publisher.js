const amqp = require('amqplib');

async function main() {
  const connection = await amqp.connect({
    hostname: '127.0.0.1',
    username: 'guest',
    password: 'guest',
  });
  
  const channel = await connection.createChannel();
  
  for (let count = 0; count < 1000; count++) {
    startPublishing(channel)
  }
}

/**
 * @param {Channel} channel
 */
function startPublishing(channel) {
  const content = Buffer.from('This message is from RabbitMQ client');
  
  setInterval(() => {
    channel.publish('amq.topic', 'inbox-10322', content)
  })
}

main().catch(console.error);
