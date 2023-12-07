import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collections } from './data';
import './MyWork.css';

const MyWork = () => {
  const [collectionImages, setCollectionImages] = useState([]);

  useEffect(() => {
    // Initialize collectionImages with the first image of each collection
    const initialImages = collections.map((collection) => collection.images[0]);
    setCollectionImages(initialImages);

    // Preload images
    collections.forEach((collection) => {
      collection.images.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
    });

    // Update collectionImages with a time gap
    const intervalId = setInterval(() => {
      setCollectionImages((prevImages) => {
        // Cycle through images in each collection
        return prevImages.map((currentImage, index) => {
          const collection = collections[index];
          const currentIndex = collection.images.indexOf(currentImage);
          const nextIndex = (currentIndex + 1) % collection.images.length;
          return collection.images[nextIndex];
        });
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="my-work">
      <div className="collections">
        {collections.map((collection, index) => (
          <Link to={`/collection/${index}`} key={index} className="collection-link">
            <div className="collection">
              <div className="collection-image" style={{ backgroundImage: `url(${collectionImages[index]})` }} />
              <h2>{collection.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
