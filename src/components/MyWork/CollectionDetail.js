import React from 'react';
import { useParams } from 'react-router-dom';
import { collections } from './data'; // Adjust the path based on your project structure
import './CollectionDetail.css'; // New import for styling

const CollectionDetail = () => {
  const { id } = useParams();
  const collection = collections[id];

  if (!collection) {
    return <div>Collection not found</div>;
  }

  return (
    <div className="collection-detail">
      <h2>{collection.title}</h2>
      <div className="images">
        {collection.images.map((image, index) => (
          <img key={index} src={image} alt={`${collection.title} ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetail;
