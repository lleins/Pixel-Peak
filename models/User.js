import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    date: String
}, {
    collection: 'Login-Information' // Specify the collection name
});

const User = mongoose.model('User', userSchema);

export default User;