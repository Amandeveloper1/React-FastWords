const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    sno: {
        type: Number,
        require: true
    },
    content: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Word = mongoose.model('Contents', UserSchema);
module.exports = Word;