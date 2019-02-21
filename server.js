const express = require('express');

const helmet =  require('helmet');

const userRoute = require('./data/helpers/userRouter.js');
const postRoute = require('./data/helpers/postsRouter.js');

const server = express();

//pull in global middleware:
server.use(express.json());
server.use(upperCase);
server.use(helmet());
server.use('/api/users', userRoute);
server.use('/api/posts', postRoute);


server.get('/', (req, res) => {
    res.send(`<h2>Node-Blog -- Success</h2>`);
})

function upperCase(req, res, next) {
    if (!req.body.name) {
        next();
    } else {
        req.body.name = req.body.name.toUpperCase();
        next();
    }
}


module.exports = server;


//server.js is where main functions and error handling takes place 