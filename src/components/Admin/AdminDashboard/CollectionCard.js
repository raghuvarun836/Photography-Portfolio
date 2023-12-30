import React from "react";

const CollectionCard = ({ collection, onView, onRename, onDelete }) => {
  return (
    <div className="collection-card">
      <div>
        <h4>{collection.name}</h4>
      </div>
      <div>
        <button onClick={onView}>View</button>
        <button onClick={onRename}>Rename</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default CollectionCard;
