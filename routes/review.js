const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/:restaurantId', reviewController.getReviews);

router.post('/:restaurantId', reviewController.createReview);

module.exports = router;
