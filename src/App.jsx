import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Chat from './components/Pages/Chat/Chat';
import Home from './components/Pages/Home/HomePage/Home';
import ReadMore from './components/Pages/Home/Productinfo/ReadMore';
import useGeoLocation from './useGeoLocation';
import "./App.css";

const App = () => {
  const location = useGeoLocation();

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/chat/:postId" element={<Chat />} />
          <Route path="/readmore" element={<ReadMore />} />
        </Routes>
      </Router>
      {location.loaded ? (
        <div>
          {/* <h2>Your Location:</h2>
          <p>Latitude: {location.coordinates.lat}</p>
          <p>Longitude: {location.coordinates.lng}</p>
          <p>Address: {location.address}</p> */}
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default App;
