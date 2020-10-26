const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user_id:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    image:{
        data: Buffer,
        type: String
    }
})

module.exports = mongoose.model("Posts", PostSchema);