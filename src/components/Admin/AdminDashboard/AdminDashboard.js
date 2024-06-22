import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import AdminLayout from "../../../Layouts/AdminLayout/AdminLayout";
import { useNavigate } from "react-router-dom";
import CollectionCard from "./CollectionCard";
import Cookies from 'js-cookie';

const AdminDashboard = () => {
  const [collections, setCollections] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCollections = async () => {
      const token = Cookies.get('adminToken');
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/collections",
          {
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json'
            }
          }
        );
        setCollections(response.data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  const handleAddCollection = async () => {
    try {
      const token = Cookies.get('adminToken');
      await axios.post(
        "http://localhost:8080/api/admin/addCollection",
        {
          string: selectedCollection.name,
        },
        {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      );
      const response = await axios.get(
        "http://localhost:8080/api/admin/collections",
        {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      );
      setCollections(response.data);
      setShowAddModal(false);
      alert("Collection added successfully");
    } catch (error) {
      console.error("Error adding collection:", error);
      alert("Failed to add collection: " + error.response.data);
    }
  };

  const handleRenameCollection = async () => {
    try {
      if (!selectedCollection.id) {
        console.error("Selected collection or collectionId is undefined.");
        return;
      }
      const token = Cookies.get('adminToken');
      await axios.put(
        `http://localhost:8080/api/admin/renameCollection/${selectedCollection.id}`,
        { string: selectedCollection.name },
        {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      );
      const response = await axios.get(
        "http://localhost:8080/api/admin/collections",
        {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      );
      setCollections(response.data);
      setShowRenameModal(false);
      alert("Collection renamed successfully");
    } catch (error) {
      console.error("Error renaming collection:", error);
      alert("Failed to rename collection: " + error.response.data);
    }
  };

  const handleDeleteCollection = async () => {
    try {
      if (!selectedCollection.id) {
        console.error("Selected collection or collectionId is undefined.");
        return;
      }
      const token = Cookies.get('adminToken');
      await axios.delete(
        `http://localhost:8080/api/admin/removeCollection/${selectedCollection.id}`,
        {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      );
      const response = await axios.get(
        "http://localhost:8080/api/admin/collections",
        {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      );
      setCollections(response.data);
      setShowDeleteModal(false);
      alert("Collection removed successfully");
    } catch (error) {
      console.error("Error deleting collection:", error);
      alert("Failed to remove collection: " + error.response.data);
    }
  };

  const handleViewCollection = (collection) => {
    navigate(`/admin/collection/${collection.id}/view`);
  };

  const handleSelectCollection = (collection) => {
    setSelectedCollection(collection);
  };

  const handleLogout = async () => {
    const token = Cookies.get('adminToken');
    try {
      await axios.post(
        "http://localhost:8080/api/admin/logout",
        {},
        {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      );
      Cookies.remove('adminToken'); // Remove the token from cookies
      sessionStorage.clear();
      window.history.replaceState(null, null, "/admin/login");
      navigate("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  

  return (
    <AdminLayout>
      <div className="admin-dashboard">
        <h2>Collections</h2>
        <button onClick={() => setShowAddModal(true)}>Add Collection</button>

        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
            onView={() => handleViewCollection(collection)}
            onRename={() => {
              handleSelectCollection(collection);
              setShowRenameModal(true);
            }}
            onDelete={() => {
              handleSelectCollection(collection);
              setShowDeleteModal(true);
            }}
          />
        ))}

        {/* Add Collection Modal */}
        {showAddModal && (
          <div className="modal-overlay">
            <div className="modal">
              <span
                className="close-btn"
                onClick={() => setShowAddModal(false)}
              >
                &times;
              </span>
              <h2>Add Collection</h2>
              <input
                type="text"
                value={selectedCollection.name || ""}
                onChange={(e) =>
                  handleSelectCollection({
                    ...selectedCollection,
                    name: e.target.value,
                  })
                }
              />
              <button onClick={handleAddCollection}>Add</button>
              <button onClick={() => setShowAddModal(false)}>Cancel</button>
            </div>
          </div>
        )}

        {/* Rename Collection Modal */}
        {showRenameModal && (
          <div className="modal-overlay">
            <div className="modal">
              <span
                className="close-btn"
                onClick={() => setShowRenameModal(false)}
              >
                &times;
              </span>
              <h2>Rename Collection</h2>
              <input
                type="text"
                value={selectedCollection.name || ""}
                onChange={(e) =>
                  handleSelectCollection({
                    ...selectedCollection,
                    name: e.target.value,
                  })
                }
              />
              <button onClick={handleRenameCollection}>Rename</button>
              <button onClick={() => setShowRenameModal(false)}>Cancel</button>
            </div>
          </div>
        )}

        {/* Delete Collection Modal */}
        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="modal">
              <span
                className="close-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                &times;
              </span>
              <h2>Delete Collection</h2>
              <p>Are you sure you want to delete this collection?</p>
              <button onClick={handleDeleteCollection}>Yes</button>
              <button onClick={() => setShowDeleteModal(false)}>No</button>
            </div>
          </div>
        )}

        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
