const mongoose = require('mongoose');


const friendshipSchema = new mongoose.Schema({
    // the user who sent this request
    form_user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // the user who accepted this request, the naming is just to understand, otherwise, the users won't see a difference
    to_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},{
    timestamps: ture;
});

const friendship = mongoose.model('Friendship', friendshipSchema);
module.exports = Friendship;
