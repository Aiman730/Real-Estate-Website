// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Listings from './screens/Listings';
import Agents from './screens/Agent';
import Favorites from './screens/Favorites';
import About from './screens/AboutUs';
import Contact from './screens/ContactUs';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Details from './screens/Details';
import AdminProperties from './screens/AdminProperties';
import AdminDashboard from './screens/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/properties" element={<AdminProperties />} />
      </Routes>
    </Router>
  );
};

export default App;