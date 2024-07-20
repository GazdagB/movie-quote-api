const router = require('express').Router();
const {getAllQuotes, createQuote, getRandomQuote, getQuote, updateQuote, deleteQuote} = require('../controllers/quoteController');

router
.route('/')
.get(getAllQuotes)
.post(createQuote); 

router.route('/random')
.get(getRandomQuote)
; 

router.route('/:id')
.get(getQuote)
.patch(updateQuote)
.delete(deleteQuote);

module.exports = router;