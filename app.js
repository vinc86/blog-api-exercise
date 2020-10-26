const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const server = require('./config/server');
const db = require('./config/db');

// routes
const UsersRouter = require('./router/UsersRouter');
const PostsRouter = require('./router/PostsRouter');
const { Router } = require('express');

////
app.use(express.json())
app.use("/users", UsersRouter)
app.use("/posts", PostsRouter)


db(mongoose);
server(app);