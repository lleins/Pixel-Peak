//const express = require('express');
//const mongoose = require('mongoose');
//const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
import User from './models/User.js';
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from 'bcrypt';

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                // User not found
                console.log('User not found');
                res.status(400).json({ success: 0, message: 'User not found' });
            } else {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.status(401).json({ success: 0, message: 'Authentication failed' });
                        console.log("Error Comparing");
                        return;
                    }
                    if (result) {
                        res.status(200).json({ success: 1, message: 'Authentication successful' });
                        console.log("Password comparing success");
                    } else {
                        res.status(401).json({ success: 0, message: 'Authentication failed' });
                        console.log("Password Comparing Failed");
                    }
                });
            }
        })
        .catch(err => {
            console.error('Error finding user:', err);
            res.status(500).json({ success: 0, message: 'Server error' });
        });


});


async function HashPassword(pass) {
    const hashedValue = await bcrypt.hash(pass, 10);
    return hashedValue;
}

app.post('/api/create_account', async (req, res) => {
    const { email_create, password_create } = req.body;

    const existingUser = await User.findOne({ email: email_create });

    if (existingUser) {
        return res.status(409).json({ message: 3 }); // User already exists
    }

    try {
        // Hash the password asynchronously
        const hashedPassword = await HashPassword(password_create);

        // Log the hashed password for debugging
        console.log('Hashed Password:', hashedPassword);

        // Create and save the new user
        const newUser = new User({ email: email_create, password: hashedPassword });
        await newUser.save();

        return res.status(201).json({ message: 1 }); // User created successfully
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 0 }); // Server error
    }
});









mongoose.connect('mongodb://127.0.0.1:27017/Pixel-Peak', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const P_P_Connection = mongoose.connection;

P_P_Connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
P_P_Connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});















/* for mongo communication
const { email } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                console.log('User not found');
                res.status(400).json({ success: 0 });
            } else {
                console.log('Found user:', user);
                res.status(200).json({ success: 1 });
            }
        })
        .catch(err => {
            console.error('Error finding user:', err);
            res.status(500).json({ success: "01" });
        });
});
*/