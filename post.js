const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true,
    },

    user: {
         type:mongoose.Schema.ObjectId,
         ref:'user'
    },
    date: {
        type: Date,
        default: Date.now,
    },
    likes: {
        type: Array,
        default: [],
    },

});

 module.exports = mongoose.model('Post', PostSchema);