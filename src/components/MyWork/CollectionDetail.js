import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import './CollectionDetail.css';

const CollectionDetail = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/collections/${id}`);
        setCollection(response.data);
      } catch (error) {
        console.error('Error fetching collection:', error);
      }
    };

    fetchCollection();
  }, [id]);

  console.log('ID:', id);
  console.log('Collection:', collection);

  if (!collection) {
    return <div>Loading...</div>;
  }

  return (
    <div className="collection-detail">
      <h2>{collection.name}</h2>
      <div className="images">
        {collection.images.map((image) => (
          <img key={image.id} src={image.imageUrl} alt={image.id} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetail;
