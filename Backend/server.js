require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRouter = require('./routes/workouts');
const userRouter = require('./routes/user');
const entertainmentRouter = require('./routes/entertainment');
const userImageRouter = require('./routes/userImage');
const authRouter = require('./routes/auth');


const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

app.use('/api/workouts',workoutRouter);
app.use('/api/user',userRouter);
app.use('/api/entertainment',entertainmentRouter);
app.use('/uploads',userImageRouter);
app.use('/',authRouter);

mongoose.connect(process.env.MONG_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected  to db & running on port ' ,process.env.PORT);
    });
})
.catch((err) => {
    console.log(err);
    
});



