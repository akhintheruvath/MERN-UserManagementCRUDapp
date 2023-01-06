const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const userRouter = require('./Routes/userRouter');
const adminRouter = require('./Routes/adminRouter');

app.use(express.json());
app.use('/',userRouter);
app.use('/admin',adminRouter);

mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGODB_CONNECTION).then(()=>{
    console.log('Database connected successfully');
    app.listen(PORT,()=>{
        console.log(`Server Started on port ${PORT}`);
    })
});