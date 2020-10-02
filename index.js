const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Connect to DB
require('dotenv/config');
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('DB connection established'),
    );
    
    
// Middlewares
app.use(express.json());
    
// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts',postRoute);

app.listen(3000,() => console.log('Server listening'));