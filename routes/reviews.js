const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// POST /musicscores/:id/reviews 
router.post('/musicscores/:id/reviews', reviewsCtrl.create);
// POST /musicscores/:id/reviews
router.delete('/musicscores/:id/reviews/:revId', reviewsCtrl.delete)

module.exports = router;