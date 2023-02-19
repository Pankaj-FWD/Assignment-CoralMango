const Restaurant = require('../models/restaurant');

exports.getRestaurants = (req, res) => {
  Restaurant.find({}, 'name address', (err, restaurants) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(restaurants);
    }
  });
};

exports.getRestaurantById = (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(restaurant);
    }
  });
};

exports.createRestaurant = (req, res) => {
  const restaurant = new Restaurant(req.body);
  restaurant.save((err, restaurant) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(restaurant);
    }
  });
};


exports.getRestaurantsWithReview = (req, res) => {
  Restaurant.aggregate([
    {
      $lookup: {
        from: 'reviews',
        localField: '_id',
        foreignField: 'restaurant',
        as: 'reviews',
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        totalReviews: { $size: '$reviews' },
      },
    },
  ], (err, restaurants) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(restaurants);
    }
  });
};

