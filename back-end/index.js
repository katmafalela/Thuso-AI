const {connectDB} = require('./utils/db');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({path: './.env'});

app.use(express.json());
app.use(cors());

const myApp = async ()=>{
    await connectDB();

    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}

myApp();

module.exports = app;