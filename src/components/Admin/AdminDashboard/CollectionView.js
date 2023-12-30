import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Masonry from "react-masonry-css";
import "./CollectionView.css";
import AdminLayout from "../../../Layouts/AdminLayout/AdminLayout";

const CollectionView = () => {
  const { collectionId } = useParams();
  const [images, setImages] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [newImageUrl, setNewImageUrl] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `//localhost:8080/api/admin/collection/${collectionId}/images`
        );
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [collectionId]);

  const handleAddImage = async () => {
    try {
      await axios.post(
        `//localhost:8080/api/admin/addImageToCollection/${collectionId}`,
        { string: newImageUrl }
      );
      const response = await axios.get(
        `//localhost:8080/api/admin/collection/${collectionId}/images`
      );
      setImages(response.data);
      setShowAddModal(false);
      setNewImageUrl("");
      alert("Image added successfully");
    } catch (error) {
      console.error("Error adding image:", error);
      alert("Failed to add image: " + error.response.data);
    }
  };

  const handleDeleteImage = async () => {
    try {
      if (!selectedImage.id) {
        console.error("Selected image or imageId is undefined.");
        return;
      }
      await axios.delete(
        `//localhost:8080/api/admin/removeImageFromCollection/${collectionId}/${selectedImage.id}`
      );
      const response = await axios.get(
        `//localhost:8080/api/admin/collection/${collectionId}/images`
      );
      setImages(response.data);
      setShowDeleteModal(false);
      alert("Image removed successfully");
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Failed to remove image: " + error.response.data);
    }
  };

  const handleSelectImage = (image) => {
    setSelectedImage(image);
    setShowDeleteModal(true);
  };

  //const textToCopy = 'https://drive.google.com/uc?export=view&id=GIVE_IMAGE_ID_HERE';
  const textareaStyle = {
    background: '#333',
    color: '#fff',
    resize: 'vertical',
    marginLeft: '15px',
  };

  return (
    <AdminLayout>
      <div className="admin-collection-view">
        <h2>Collection Images</h2>
        <button onClick={() => setShowAddModal(true)}>Add Image</button>
        <label>
          Use this link to add image URL:
          <textarea
            name="postContent"
            defaultValue="https://drive.google.com/uc?export=view&id="
            rows={2}
            cols={45}
            style={textareaStyle}
          />
        </label>

        <Masonry
          breakpointCols={{ default: 3, 800: 2, 500: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image) => (
            <div key={image.id} className="image-card">
              <img src={image.imageUrl} alt={`Image ${image.id}`} />
              <span
                className="delete-icon"
                onClick={() => handleSelectImage(image)}
              >
                &times;
              </span>
            </div>
          ))}
        </Masonry>

        {/* Add Image Modal */}
        {showAddModal && (
          <div className="modal-overlay">
            <div className="modal">
              <span
                className="close-btn"
                onClick={() => setShowAddModal(false)}
              >
                &times;
              </span>
              <h2>Add Image</h2>
              <input
                type="text"
                placeholder="Image URL"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
              />
              <button onClick={handleAddImage}>Add</button>
              <button onClick={() => setShowAddModal(false)}>Cancel</button>
            </div>
          </div>
        )}

        {/* Delete Image Modal */}
        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="modal">
              <span
                className="close-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                &times;
              </span>
              <h2>Delete Image</h2>
              <p>Are you sure you want to delete this image?</p>
              <button onClick={handleDeleteImage}>Yes</button>
              <button onClick={() => setShowDeleteModal(false)}>No</button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default CollectionView;
