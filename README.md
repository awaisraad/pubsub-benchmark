## Publish rate load test on messaging systems

This repo contains code used to test publish rate on different messaging systems, as of now on RabbitMQ, Nats, and Redis (well it supports pubsub)

Roughly estimated, I had 10x times better publishing rate on Nats (250MB/s) than as compared to Redis (25MB/s) and RabbitMQ (22MB/s). Nats was better in all terms i.e IO, memory usage and CPU.

I only observed publish rate, no subscribers were used for any of them.

#### RabbitMQ:

1: `docker-compose up rabbit`
2: `node rabbit/publisher.js` (run multiple sessions)

#### Nats:

1: `docker-compose up nats`
2: `node nats/publisher.js` (run multiple sessions)

#### Redis:

1: `docker-compose up redis`
2: `node redis/publisher.js` (run multiple sessions)


Run `docker stats` for observing CPU, Memory and IO rate for servers.
 