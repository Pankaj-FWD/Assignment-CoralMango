const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  reviewText: { type: String, required: true },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
