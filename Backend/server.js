require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRouter = require('./routes/workouts');
const userRouter = require('./routes/user');
const entertainmentRouter = require('./routes/entertainment');
const Login = require('./models/loginModel');
const bcrypt = require('bcrypt');
const UserImage = require('./models/userImage');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

app.use('/api/workouts',workoutRouter);
app.use('/api/user',userRouter);
app.use('/api/entertainment',entertainmentRouter);

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const user = new Login({
        username: username,
        password: hashedPassword,
      });
      await user.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
 
  app.post('/login', async (req, res) => {
    const { username, password } = req.body; 
  
    try {
      const user = await Login.findOne({ username: username });
  
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      res.json({ message: 'Login successful' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/uploads', async (req, res) => {
    const {userImage} = req.body;
  
    try {
        const userimage = await UserImage.create({userImage});
        res.status(200).json(userimage);
      res.status(201).json({ message: 'Image uploaded successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get('/uploads', async (req, res) => {
    const userImage = await UserImage.find({}).sort({createdAt: -1});
    if(!userImage){
        return res.status(404).json({error: 'No users found'});
        } 
    res.status(200).json(userImage);
  });

mongoose.connect(process.env.MONG_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected  to db & running on port ' ,process.env.PORT);
    });
})
.catch((err) => {
    console.log(err);
    
});



