const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: [true, 'A quote must have a quote']
    },
    movie: {
        type: String,
        required: [true, 'A quote must have a movie']
    },
    actor: {
        type: String,
        required: [true, 'A quote must have an actor']
    },
    charachter: {
        type: String,
        required: [true, 'A quote must have a charachter']
    },
    genre: {
        type: String,
        required: [true, 'A quote must have a genre']
    },
    year: {
        type: Number,
        required: [true, 'A quote must have a year']
    }
    
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;