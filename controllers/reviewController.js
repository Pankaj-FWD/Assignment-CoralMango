const Review = require('../models/review');

exports.getReviews = (req, res) => {
  Review.find({ restaurant: req.params.restaurantId }, 'reviewText', (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
};

exports.createReview = (req, res) => {
  const review = new Review({
    restaurant: req.params.restaurantId,
    reviewText: req.body.reviewText,
  });
  review.save((err, review) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(review);
    }
  });
};
