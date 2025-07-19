// const mongoose = require('mongoose');

// // Define the schema for the "Favorite" model
// const favoriteSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: String,
//       required: true, // User ID is mandatory
//       trim: true, // Removes unnecessary whitespace
//     },
//     propertyId: {
//       type: Number,
//       required: true, // Property ID is mandatory
//       validate: {
//         validator: Number.isInteger, // Ensures propertyId is an integer
//         message: '{VALUE} is not a valid property ID.',
//       },
//     },
//   },

// );



// // Create and export the Favorite model
// const Favorite = mongoose.model('Favorite', favoriteSchema);
// module.exports = Favorite;


// 2nd

// const mongoose = require('mongoose');

// // Define the schema for the "Favorite" model
// const favoriteSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: String,
//       required: true, // User ID is mandatory
//       trim: true, // Removes unnecessary whitespace
//     },
//     propertyId: {
//       type: Number,
//       required: true, // Property ID is mandatory
//       validate: {
//         validator: Number.isInteger, // Ensures propertyId is an integer
//         message: '{VALUE} is not a valid property ID.',
//       },
//     },
//     location: String,
//     priceBuy: String,
//     priceRent: String,
//     image: String,
//     description: String,
//     propertyType: String,
//     beds: Number,
//     baths: Number
//   },
// );

// const Favorite = mongoose.model('Favorite', favoriteSchema);
// module.exports = Favorite;


// 3rd

// models/Favorites.js
const mongoose = require('mongoose');

// Define the schema for the "Favorite" model
const favoriteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true, // User ID is mandatory
    trim: true,
  },
  propertyId: {
    type: String,  // This should be a String instead of Number
    required: true,
  },
  image: String,
  location: String,
  priceBuy: String,
  priceRent: String,
  description: String,
  propertyType: String,
  beds: Number,
  baths: Number
});

// Create and export the Favorite model
const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;
