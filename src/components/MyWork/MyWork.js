import React from 'react';
import { Link } from 'react-router-dom';
import { collections } from './data';
import './MyWork.css';

const MyWork = () => {
  return (
    <div className="my-work">
      <div className="collections">
        {collections.map((collection, index) => (
          <Link to={`/collection/${index}`} key={index} className="collection-link">
            <div className="collection">
              <img src={collection.coverImage} alt={collection.title} />
              <h2>{collection.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyWork;