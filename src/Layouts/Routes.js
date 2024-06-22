import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import AdminLayout from './AdminLayout/AdminLayout';
import Home from '../components/Home/Home';
import MyWork from '../components/MyWork/MyWork';
import CollectionDetail from '../components/MyWork/CollectionDetail';
import PhotoFrames from '../components/PhotoFrames/PhotoFrames';
import Packages from '../components/Packages/Packages';
import About from '../components/About/About';
import ContactUs from '../components/ContactUs/ContactUs';
import AdminLogin from '../components/Admin/AdminLogin/AdminLogin';
import AdminDashboard from '../components/Admin/AdminDashboard/AdminDashboard';
import CollectionView from '../components/Admin/AdminDashboard/CollectionView';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Regular Pages */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/mywork"
        element={
          <Layout>
            <MyWork />
          </Layout>
        }
      />
      <Route
        path="/collection/:id"
        element={
          <Layout>
            <CollectionDetail />
          </Layout>
        }
      />
      <Route
        path="/photoframes"
        element={
          <Layout>
            <PhotoFrames />
          </Layout>
        }
      />
      <Route
        path="/packages"
        element={
          <Layout>
            <Packages />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/contactus"
        element={
          <Layout>
            <ContactUs />
          </Layout>
        }
      />

      {/* Admin Pages */}
      <Route
        path="/admin/login"
        element={
          <AdminLayout>
            <AdminLogin />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/collection/:collectionId/view"
        element={
          <AdminLayout>
            <CollectionView />
          </AdminLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;