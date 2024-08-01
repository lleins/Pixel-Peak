const app = express();
const port = process.env.PORT || 5000;
import User from './models/User.js'; //For loggin and creating account
import Saved from './models/Saved.js'; //For saved pics/vids
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from 'bcrypt';
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';


dotenv.config({ path: 'C:/Coding Files/Pixel Peak/react-app/Pixel.env' });


// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server Running...');
});


const secretKey = process.env.JWT_SECRET; //Secret Key for verifying token authenticity - stored in .env folder
//Login Verification ---------------------------------------------------------------------------------------------------------

app.post('/api/login', (req, res) => { //Logging in
    const { email, password } = req.body;

    User.findOne({ email: email }) //checks account with duplicate email
        .then(user => {
            if (!user) {
                // User not found
                //console.log('User not found');
                res.status(400).json({ success: 0, message: 'User not found' });
            } else {
                bcrypt.compare(password, user.password, (err, result) => { //compares hashed passwords
                    if (err) {
                        res.status(401).json({ success: 0, message: 'Authentication failed' }); //Server failed/Issue
                        //console.log("Error Comparing");
                        return;
                    }
                    if (result) {
                        const token = jsonwebtoken.sign( //Assigns a login token
                            {
                                email: user.email,
                            },
                            secretKey, // Replace with your actual secret key
                            {
                                expiresIn: '1d', // Token expiration time (e.g., 1 hour)
                            }
                        );

                        const Loggin_Token = token;
                        //console.log("Token: ", Loggin_Token);
                        const decoded = jsonwebtoken.verify(Loggin_Token, secretKey); //Verifies token is valid
                        //console.log("Email from Token: ", decoded.email);

                        res.status(200).json({ success: 1, message: 'Authentication successful', token: token, }); //sends token
                        //console.log("Password comparing success");
                    } else {
                        res.status(401).json({ success: 0, message: 'Authentication failed' }); //failed
                        //console.log("Password Comparing Failed");
                    }
                });
            }
        })
        .catch(err => {
            console.error('Error finding user:', err);
            res.status(500).json({ success: 0, message: 'Server error' }); //Error with server communication
        });


});
//Login Verification ---------------------------------------------------------------------------------------------------------



//Create Account  ---------------------------------------------------------------------------------------------------------

async function HashPassword(pass) {
    const hashedValue = await bcrypt.hash(pass, 10); //bcrypt
    return hashedValue;
}

app.post('/api/create_account', async (req, res) => {  //Creating Account
    const { email_create, password_create, date_create } = req.body;

    const existingUser = await User.findOne({ email: email_create });

    if (existingUser) {
        return res.status(409).json({ message: 3 }); // User already exists
    }
    try {
        const hashedPassword = await HashPassword(password_create);

        const newUser = new User({ email: email_create, password: hashedPassword, date: date_create }); // Create and save the new user
        await newUser.save();

        const token = jsonwebtoken.sign( //Assigns a login token
            {
                email: email_create,
            },
            secretKey, // Replace with your actual secret key
            {
                expiresIn: '1d', // Token expiration time (e.g., 1 hour)
            }
        );

        return res.status(201).json({ message: 1, token: token }); // User created successfully
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 0 }); // Server error
    }
});

//Create Account  ---------------------------------------------------------------------------------------------------------



//Token Verification/Account Information ---------------------------------------------------------------------------------------------------------

/*
Login token verification process:
1. If logged in succesfully, Login Token generates in Server.js and gets sent to SignIn_Format.tsx.
2. Token then gets delcared as a cooking under variable name "Login_Token".
3. Token can now be accessed from variable name "Login_Token" via a cookie to verify user log in status.
4. Token contains email of user, secretkey is in .env file.
*/

app.post('/api/account_information', (req, res) => { //Grabbing Account Information
    const { email } = req.body;
    try {
        const Decoded_Login_Token = jsonwebtoken.verify(email, secretKey); //Decoded Token tested for validity
        //console.log("Email from Token in verification: ", Decoded_Login_Token.email);
        const Login_Email = Decoded_Login_Token.email; //Uses email in payload to find user in database

        User.findOne({ email: Login_Email }) //Finds user with corresponding email
            .then((user) => {
                if (!user) {
                    //console.log('User not found');
                    res.status(400).json({ success: 0, message: 'User not found' });
                } else {

                    res.status(200).json({ success: 1, message: 'Authentication successful', email: user.email, date: user.date }); //sends email and date as a reponse
                    //console.log("Here is Data Sending to Account: ", user.email, "", user.date);
                }
            })


    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 0 }); // Server error
    }
});



//Token Verification/Account Information ---------------------------------------------------------------------------------------------------------



//Delete Account---------------------------------------------------------------------------------------------------------

function removeUserByEmail(email) {
    return User.findOneAndDelete({ email: email }).exec();
}

app.post('/api/delete_account', (req, res) => { //Delete Login Account
    const { email } = req.body
    removeUserByEmail(email)
        .then(user => {
            if (user) {
                // User with the specified email removed
                res.status(200).json({ success: 1, message: 'Account deleted successfully' });
            } else {
                // User not found
                return res.status(404).json({ success: 0, message: 'User not found' });
            }
        })
        .catch(err => {
            // Handle any errors that occurred during the removal
            res.status(500).json({ success: 3, message: 'Server error' });
        });
});


async function removeUserByEmailSaved(email) {
    try {
        //Deletes all documents with specified email
        const result = await Saved.deleteMany({ email: email });

        if (result.deletedCount === 0) {
            //console.log('No users found with this email.');
            return;
        }

        //console.log(`Removed ${result.deletedCount} users with email ${email}.`);
    } catch (err) {
        console.error(err);
    }
}

app.post('/api/delete_saved_pics_vids', (req, res) => {
    const { email } = req.body
    removeUserByEmailSaved(email) //uses same email used in fetch above.
        .then(user => {
            if (user) {
                // User with the specified email removed
                res.status(200).json({ success: 1, message: 'Accounts deleted successfully' });
            } else {
                // User not found
                return res.status(404).json({ success: 0, message: 'User not found' });
            }
        })
        .catch(err => {
            // Handle any errors that occurred during the removal
            res.status(500).json({ success: 3, message: 'Server error' });
        });
});

//Delete Account---------------------------------------------------------------------------------------------------------


//Save a Video or Picture------------------------------------------------------------------------------------------------


app.post('/api/save', async (req, res) => {
    const { email_data, src_data, url_data, type_data, user } = req.body;

    const Decoded_Login_Token = jsonwebtoken.verify(email_data, secretKey);


    const Login_Email = Decoded_Login_Token.email;

    try {

        const count = await Saved.countDocuments({ email: Login_Email });

        if (count >= 10) {
            return res.status(400).json({ message: 3 });
        }

        // If less than 10, proceed to save the new document
        const newUser = new Saved({ email: Login_Email, src: src_data, url: url_data, type: type_data, user: user });
        await newUser.save();

        return res.status(201).json({ message: 1 });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 0 });
    }
});
//Save a Video or Picture------------------------------------------------------------------------------------------------



//Remove a Video or Picture----------------------------------------------------------------------------------------------

function removeUserByEmail_link(email, url) {
    return Saved.findOneAndDelete({ email: email, url: url }).exec();
}

app.post('/api/delete_saved', (req, res) => {
    const { email_data, url_data } = req.body

    const Decoded_Login_Token = jsonwebtoken.verify(email_data, secretKey); //Decoded Token tested for validity
    //console.log("Email from Token in Remove 2: ", Decoded_Login_Token.email);
    const email_cookie = Decoded_Login_Token.email; //Uses email in payload to find user in database

    removeUserByEmail_link(email_cookie, url_data)
        .then(user => {
            if (user) {
                // User with the specified email and link removed
                res.status(200).json({ success: 1 });
            } else {

                return res.status(404).json({ success: 0 });
            }
        })
        .catch(err => {
            // Handle any errors that occurred during the removal
            res.status(500).json({ success: 3 });
        });
});


//Remove a Video or Picture----------------------------------------------------------------------------------------------


//Delete a Saved item in Saved Tab---------------------------------------------------------------------------------
function removeUserByEmail_src(email, src) {
    return Saved.findOneAndDelete({ email: email, src: src }).exec();
}

app.post('/api/Item_Saved_Delete', (req, res) => {
    const { email_data, src_data } = req.body
    //console.log(src_data);
    const Decoded_Login_Token = jsonwebtoken.verify(email_data, secretKey); //Decoded Token tested for validity
    //console.log("Email from Token in Remove 1: ", Decoded_Login_Token.email);
    const email_cookie = Decoded_Login_Token.email; //Uses email in payload to find user in database

    removeUserByEmail_src(email_cookie, src_data)
        .then(user => {
            if (user) {
                // User with the specified email and link removed
                res.status(200).json({ success: 1 });
            } else {
                //console.log("User not found Delete: ")
                return res.status(404).json({ success: 0 });
            }
        })
        .catch(err => {
            //console.log("went wrong ", err);
            res.status(500).json({ success: 3 });
        });
});
//Delete a Saved item in Saved Tab---------------------------------------------------------------------------------


//Display Saved Items----------------------------------------------------------------------------------------------------
function findDocumentsByEmail(email) {
    return Saved.find({ email: email }).exec();
}

app.post('/api/Get_Pics_Vids', (req, res) => {
    const { email_data } = req.body;

    const Decoded_Login_Token_saved = jsonwebtoken.verify(email_data, secretKey); // Decoded Token tested for validity
    //console.log("Token in Saved: ", Decoded_Login_Token_saved.email);
    const email_cookie_saved = Decoded_Login_Token_saved.email;

    findDocumentsByEmail(email_cookie_saved)
        .then(docs => {
            if (docs.length > 0) {

                res.status(200).json({ success: 1, documents: docs });
            } else {

                res.status(200).json({ success: 0 });
            }
        })
        .catch(err => {

            res.status(404).json({ success: 3 });
        });
});





//Display Saved Items----------------------------------------------------------------------------------------------------

//mongodb+srv://lleins237:9JQmeNpmMVVage4@cluster0.vrxb658.mongodb.net/Raven?retryWrites=true&w=majority&appName=Cluster0
//mongodb://127.0.0.1:27017/Pixel-Peak

mongoose.connect('mongodb://127.0.0.1:27017/Pixel-Peak', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const PP_Login_Connection = mongoose.connection; //establish connection to database

PP_Login_Connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
PP_Login_Connection.once('open', () => {
    console.log('Connected to MongoDB');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});














