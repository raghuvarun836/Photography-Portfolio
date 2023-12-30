import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MyWork.css';

const MyWork = () => {
  const [collections, setCollections] = useState([]);
  const [currentImageIndices, setCurrentImageIndices] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get('//localhost:8080/api/collections');
        setCollections(response.data);

        // Initialize current image indices
        setCurrentImageIndices(response.data.map(() => 0));

        // Log the fetched data for debugging
        console.log('Fetched collections:', response.data);

        // Preload images
        const imagePromises = response.data.flatMap((collection) =>
          collection.images.map((image) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = image.imageUrl;
              img.onload = () => resolve();
            });
          })
        );

        Promise.all(imagePromises).then(() => {
          // All images have been preloaded
          console.log('All images preloaded');
        });
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    fetchCollections();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndices((prevIndices) =>
        prevIndices.map((prevIndex, index) => {
          const collectionImages = collections[index].images;
          return collectionImages.length > 1 ? (prevIndex + 1) % collectionImages.length : 0;
        })
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [collections]);

  return (
    <div className="my-work">
      <div className="collections">
        {collections.map((collection, index) => (
          <Link to={`/collection/${collection.id}`} key={collection.id} className="collection-link">
            <div className="collection">
              {collection.images.map((image, imageIndex) => (
                <div
                  key={image.id} // Assuming each image has an 'id' property
                  className="collection-image"
                  style={{
                    backgroundImage: `url(${image.imageUrl})`,
                    display: currentImageIndices[index] === imageIndex ? 'block' : 'none',
                  }}
                />
              ))}
              <h2>{collection.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
