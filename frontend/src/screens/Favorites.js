import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Favorites.css';
import logo1 from '../assets/listings/logo1.jpeg'; // Bed icon
import logo2 from '../assets/listings/logo2.jpeg'; // Tub icon
import love from '../assets/listings/love.png'; // Empty heart icon
import filledLove from '../assets/listings/filledLove.png'; // Filled heart icon

function Favorites() {
  const [properties, setProperties] = useState([]); // State for property data
  const [favorites, setFavorites] = useState([]); // State for favorite properties

  // Fetch properties and initial favorites when the component mounts
  useEffect(() => {
    // Fetch property listings
    // fetch('http://localhost:8000/listings') // Adjust URL for your backend
    //   .then((response) => response.json())
    //   .then((data) => setProperties(data))
    //   .catch((error) => console.error('Failed to fetch properties', error));

    // Fetch initial favorite properties
    axios.get('http://localhost:3001/api/favorites/get') // Adjust URL for your backend
      .then((response) => {
        console.log("Get", response);
        // setFavorites(response.data.map((fav) => fav.propertyId))
        setFavorites(response.data);


      }) // Assuming the API returns an array of favorite property objects
      .catch((error) => console.error('Failed to fetch favorites:', error));
  }, []); // Empty dependency array ensures this runs only once

  // Function to add a property to favorites
  const handleAddToFavorite = (listing) => {
    axios.post('http://localhost:3001/api/favorites', listing)
      .then((response) => {
        console.log('Added to favorites:', response.data);
        setFavorites([...favorites, listing.propertyId]); // Update state with new favorite
      })
      .catch((error) => {
        console.error('Error adding to favorites:', error);
      });
  };

  // Function to toggle favorites with backend interaction
  function toggleFavorite(propertyId) {
    const isFavorite = favorites.includes(propertyId);

    if (isFavorite) {
      // Send a DELETE request to remove the property from favorites
      axios.delete(`http://localhost:3001/api/favorites/${propertyId}`)
        .then(() => setFavorites(favorites.filter((id) => id !== propertyId)))
        .catch((error) => console.error('Failed to remove favorite:', error));
    } else {
      // Send a POST request to add the property to favorites
      const listing = { propertyId }; // Prepare the listing data
      handleAddToFavorite(listing); // Call handleAddToFavorite to add the property
    }
  }

  return (
    <div className="favorites-section">
      <h2>Favorites</h2>
      <div className="property-list">
        {favorites.map((property) => (
          <div className="property-card" key={property.propertyId}>
            <img src={property.image} alt="Property" className="property-image" />
            <div className="property-info">
              <p>Location: {property.location}</p>
            </div>
            <div className="property-details">
              <div className="property-icon">
                <img src={logo1} alt="Bedrooms" />
                <span>{property.beds}</span>
              </div>
              <div className="property-icon">
                <img src={logo2} alt="Bathrooms" />
                <span>{property.baths}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Favorites;
