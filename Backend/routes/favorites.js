// // routes/favorites.js
// const express = require('express');
// const Favorite = require('../models/Favorites');
// const router = express.Router();

// // Add a favorite property
// router.post('/add', (req, res) => {
//   const { userId, propertyId, propertyType } = req.body;

//   // Check if the property is already added to favorites
//   Favorite.findOne({ userId, propertyId })
//     .then(existingFavorite => {
//       if (existingFavorite) {
//         return res.status(400).json({ message: 'Property already added to favorites.' });
//       }

//       // Create a new favorite and save it
//       const favorite = new Favorite({ userId, propertyId, propertyType });
//       return favorite.save();
//     })
//     .then(() => res.status(201).json({ message: 'Property added to favorites.' }))
//     .catch(error => res.status(500).json({ message: 'Failed to add to favorites.', error }));
// });

// module.exports = router;



/// 2nd 

// const express = require('express');
// const Favorite = require('../models/Favorites');
// const router = express.Router();

// // Add a favorite property
// router.post('/add', (req, res) => {
//   const { userId, propertyId, location, priceBuy, priceRent, image, description, propertyType, beds, baths } = req.body;
//   console.log("Received data: ", req.body); // Log the request data

//   // Check if the property is already added to favorites
//   Favorite.findOne({ userId, propertyId })
//     .then(existingFavorite => {
//       if (existingFavorite) {
//         return res.status(400).json({ message: 'Property already added to favorites.' });
//       }

//       // Create a new favorite and save it
//       const favorite = new Favorite({
//         userId, 
//         propertyId,
//         location,
//         priceBuy,
//         priceRent,
//         image,
//         description,
//         propertyType,
//         beds,
//         baths
//       });
//       return favorite.save();
//     })
//     .then(() => res.status(201).json({ message: 'Property added to favorites.' }))
//     .catch(error => res.status(500).json({ message: 'Failed to add to favorites.', error }));
// });

// module.exports = router;



// 3rd


// routes/favorites.js
// const express = require('express');
// const Favorite = require('../models/Favorites');
// const router = express.Router();

// router.post('/add', (req, res) => {
//   const { userId, propertyId, propertyType, image, location, priceBuy, priceRent, description, beds, baths } = req.body;

//   console.log("Received data: ", req.body);  // Ensure this logs correctly

//   // Check if the property is already added to favorites
//   Favorite.findOne({ userId, propertyId })
//     .then(existingFavorite => {
//       if (existingFavorite) {
//         return res.status(400).json({ message: 'Property already added to favorites.' });
//       }

//       // Create a new favorite and save it
//       const favorite = new Favorite({
//         userId,
//         propertyId,
//         propertyType,
//         image,
//         location,
//         priceBuy,
//         priceRent,
//         description,
//         beds,
//         baths
//       });

//       return favorite.save();
//     })
//     .then(() => res.status(201).json({ message: 'Property added to favorites.' }))
//     .catch(error => {
//       console.error('Error saving favorite:', error);  // Log the error to console
//       res.status(500).json({ message: 'Failed to add to favorites.', error });
//     });
// });

// module.exports = router;


// 4th 

// routes/favorites.js
// const express = require('express');
// const Favorite = require('../models/Favorites');
// const router = express.Router();

// router.post('/add', (req, res) => {
//   const { userId, propertyId, propertyType, image, location, priceBuy, priceRent, description, beds, baths } = req.body;

//   console.log("Received data: ", req.body);  // Log incoming request data for inspection

//   // Check if the property is already added to favorites
//   Favorite.findOne({ userId, propertyId })
//     .then(existingFavorite => {
//       if (existingFavorite) {
//         // Send response if already in favorites and return to stop further execution
//         return res.status(400).json({ message: 'Property already added to favorites.' });
//       }

//       // Create a new favorite and save it
//       const favorite = new Favorite({
//         userId,
//         propertyId,
//         propertyType,
//         image,
//         location,
//         priceBuy,
//         priceRent,
//         description,
//         beds,
//         baths
//       });

//       return favorite.save();
//     })
//     .then(() => res.status(201).json({ message: 'Property added to favorites.' }))
//     .catch(error => {
//       console.error('Error saving favorite:', error);  // Log the error for debugging
//       // Only send a response once, when there's an error in saving the favorite
//       if (!res.headersSent) {
//         res.status(500).json({ message: 'Failed to add to favorites.', error: error.message });
//       }
//     });
// });

// module.exports = router;

// 5th simplified


const express = require('express');
const Favorite = require('../models/Favorites');
const router = express.Router();

// Add a favorite property (simplified version)
router.post('/add', (req, res) => {
  const { userId, propertyId, image, location, priceBuy, priceRent, description, propertyType, beds, baths} = req.body;

  // Create a new favorite object and save it
  const favorite = new Favorite({
    userId,
    propertyId,
    image,
    location,
    priceBuy,
    priceRent,
    description,
    propertyType,
    beds,
    baths
  });

  // Save the favorite to the database
  favorite.save()
    .then(() => {
      res.status(201).json({ message: 'Property added to favorites.' });
    })
    .catch(error => {
      console.error('Error saving favorite:', error);
      // Send the response only once, in case of an error
      if (!res.headersSent) {
        res.status(500).json({ message: 'Failed to add to favorites.', error: error.message });
      }
    });
});

// GET all favorites
// GET all favorites
router.get('/get', async (req, res) => {
  try {
    // Fetch all favorite records from the database
    const favorites = await Favorite.find();
    res.status(200).json(favorites);
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).json({ message: 'Server error. Could not fetch favorites.' });
  }
});

module.exports = router;

