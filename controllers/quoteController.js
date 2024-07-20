const Quote = require('../models/quoteModel');

exports.getAllQuotes = async (req, res) => {

    try {
        const Quotes = await Quote.find();
        
        res.status(200).json({
            status: "succsess",
            requestedAt: req.requestTime,
            results: Quotes.length,
            data : {
                Quotes,
            }
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error
        })
    }

};

exports.createQuote = async (req, res) => {

    try {
        const newQuote = await Quote.create(req.body);
        
        res.status(201).json({
            status: "succsess",
            data: {
                quote: newQuote
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail', 
            message: error
        })
    }
};

exports.getRandomQuote = async (req, res) => {
    try {
        const randomQuote = await Quote.aggregate([
            { $sample: { size: 1 } }
        ]);

        if (randomQuote.length) {
            res.status(200).json({
                status: 'success',
                data: {
                    quote: randomQuote[0]
                }
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'No quotes found'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
        });
    }
};

exports.getQuote = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Get a movie'
    });
};

exports.updateQuote = async (req, res) => {
    try {

        const quote = await Quote.findByIdAndUpdate(req.params.id,req.body,{new: true, runValidators: true})

        res.status(200).json({
           status: 'succsess', 
           data: quote
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error,
          });
    }
    
};

exports.deleteQuote = async (req, res) => {
   try {
    
    await Quote.findByIdAndDelete(req.params.id);
    
    res.status(204).json({
        status: 'succsess',
        data: null
    })
   } catch (error) {
    res.status(404).json({
        status: 'fail',
        message: error,
      });
   }
}