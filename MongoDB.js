import bcrypt from "bcrypt";
import User from './models/User.js';
import mongoose from 'mongoose';


function HashPassword(pass) {

    const password = pass;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return;
        }
        return hash;
    });
}


const uri = 'mongodb://127.0.0.1:27017/Pixel-Peak';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');

    const password = 'password123';

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return;
        }
        const hashPass = hash;
    });

    const newUser = new User({
        email: 'example@example.com',
        password: hashPass
    });

    newUser.save()
        .then(savedUser => {
            console.log('New user saved:', savedUser);
        })
        .catch(err => {
            console.error('Error saving new user:', err);
        });
});


export default db;


/*
import mongoose from 'mongoose';
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/User'); // Replace with your actual user model


const Email = "lleins237@gmail.com";
const Password = "pass";


User.findOne({ Email })
    .then(user => {
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Step 3: Compare Hashed Passwords
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                // Passwords match - authentication successful
                return res.status(200).json({ message: 'Login successful' });
            } else {
                // Passwords do not match - authentication failed
                return res.status(401).json({ message: 'Invalid credentials' });
            }
        });
    })
    .catch(err => console.log('Error: ', err));

    */




/*
For checking user info for loggin in
on user below do user.password or user.email to access individual items

const emailToFind = "bigtasty652@gmail.com";

    User.findOne({ email: emailToFind })
        .then(user => {
            if (!user) {
                console.log('User not found');
                return;
            }

            console.log('Found user:', user);

        })
        .catch(err => {
            console.error('Error finding user:', err);
        });




*/
