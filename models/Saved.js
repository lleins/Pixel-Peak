import mongoose from 'mongoose';

const savedSchema = new mongoose.Schema({
    email: String,
    src: String,
    url: String,
    type: String,
    user: String

}, {
    collection: 'Saved-Pics-Vids' // Specify the collection name
});

const Saved = mongoose.model('Saved', savedSchema);

export default Saved;