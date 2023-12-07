import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MyWork from './components/MyWork/MyWork';
import CollectionDetail from './components/MyWork/CollectionDetail';
import PhotoFrames from './components/PhotoFrames/PhotoFrames';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/mywork" element={<MyWork/>} />
          <Route path="/collection/:id" element={<CollectionDetail/>} />
          <Route path="/photoframes" element={<PhotoFrames/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
