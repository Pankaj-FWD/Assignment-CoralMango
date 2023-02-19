const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
dotEnv.config();


const restaurantRoutes = require('./routes/restaurant');
const reviewRoutes = require('./routes/review');

const app = express();
const port = process.env.PORT ;
const dburl=process.env.DBURL;
const dbName=process.env.DBNAME;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb://${dburl}:27017/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB database', err);
  });

app.use('/restaurants', restaurantRoutes);
app.use('/reviews', reviewRoutes);

app.listen(port, () => {
  console.log(`Server running at http://${dburl}:${port}`);
});
