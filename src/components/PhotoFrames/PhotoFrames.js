import React from 'react';
import './PhotoFrames.css';
import {frames} from './frames';

const PhotoFrames = () => {
  return (
    <div className="photo-frames">
      {frames.map((frame, index) => (
        <div key={frame.id} className={`frame ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <div className="frame-image">
            <img src={frame.imageUrl} alt={frame.title} />
          </div>
          <div className="frame-description">
            <h2>{frame.title}</h2>
            <p>{frame.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoFrames;