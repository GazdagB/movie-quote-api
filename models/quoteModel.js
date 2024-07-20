const mongoose = require('mongoose');

const allowedCategories = ["inspirational","motivational","funny", "romantic","dramatic","action","sad","friendship","villian","hero","adventure","family","fantasy","historical","comedic","thriller"]

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: [true, 'A quote must have a quote'],
        unique: true,
    },
    movie: {
        type: String,
        required: [true, 'A quote must have a movie']
    },
    actor: {
        type: String,
        required: [true, 'A quote must have an actor']
    },
    character: {
        type: String,
        required: [true, 'A quote must have a character']
    },
    genre: {
        type: [String],
        required: [true, 'A quote must have a genre']
    },
    year: {
        type: Number,
        required: [true, 'A quote must have a year']
    },
    category: {
        type: [String],
        required: [true, 'A quote must have a category'],
        validate: {
            validator: function(v) {
                // Convert array to lowercase for validation
                const lowerCaseCategories = v.map(cat => cat.toLowerCase());
                // Check if every category provided is in the allowed list
                return lowerCaseCategories.every(cat => allowedCategories.includes(cat));
            },
            message: props => `${props.value} is not a valid category`
        }
    }
    
});

quoteSchema.pre("save", function(next){
    if (this.category) {
        // Ensure category is always saved in lowercase
        this.category = this.category.map(cat => cat.toLowerCase());
    }
    next();
})

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;