import bcrypt from "bcrypt";
import User from './models/User.js';
import mongoose from "mongoose";

let hashedPassword = null;

function HashPassword(pass) {
    const hashedValue = bcrypt.hashSync(pass, 10);
    hashedPassword = hashedValue; // Assign the hashed password to the global variable
}

HashPassword("Pass");

console.log(hashedPassword);
/*
const uri = 'mongodb://127.0.0.1:27017/Pixel-Peak';

mongoose.connect(uri, {
    useUnifiedTopology: true,
});

const P_P_Connection = mongoose.connection;

P_P_Connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
P_P_Connection.once('open', () => {
    console.log('Connected to MongoDB');


});


export default P_P_Connection;
*/

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
