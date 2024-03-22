const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        min: 1,
        max: 5,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    userName: String,
    userAvatar: String
})

const musicscoreSchema = new Schema({
    song: String,
    artist: String,
    composer: String,
    musicScore: String,
    genre: {
        type: String,
        enum: ['pop', 'classical', 'jazz', 'R&B', 'rock', 'country', 'other']
    },
    reviews: [reviewSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
})

module.exports = mongoose.model('Music', musicscoreSchema);