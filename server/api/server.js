const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const gameRouter = require('./game_tables/user-router');
const authRouter = require('./auth/auth-router');

const server = express();

server.use(helmet());
server.use(express.json());
// server.use(cors());

server.use('/auth', authRouter)

server.use('/games', gameRouter);

server.get('/', (req, res) => {
    res.send('Server is working')
})


module.exports = server;