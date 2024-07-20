
exports.getAllQuotes = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Get all movies'
    });
};

exports.createQuote = (req, res) => {
    res.status(201).json({
        status: 'success',
        message: 'Create a new movie'
    });
};

exports.getRandomQuote = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Get a random movie'
    });
};

exports.getQuote = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Get a movie'
    });
};

exports.updateQuote = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Update a movie'
    });
};

exports.deleteQuote = (req, res) => {
    res.status(204).json({
        status: 'success',
        message: 'Delete a movie'
    });
}