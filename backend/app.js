const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const app = express();

app.use(express.json())
app.use(cors())

const uri = process.env.Mongo;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : console.log('Connected to database'));

const RegisterRouter = require('./auth/routes/register.router')
app.use('/register' , RegisterRouter);

const LoginRouter = require('./auth/routes/login.router')
app.use('/login' , LoginRouter);

const ADDItemRouter = require('./routes/add-post')
app.use('/posts' , ADDItemRouter)


app.listen(process.env.PORT || 5000)
