// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Home from './pages/Home/home.jsx';
import About from './pages/About/about.jsx';
import Services from './pages/Services/services.jsx';
import Contact from './pages/Contact/contact.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div id="app">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
