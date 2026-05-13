import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif' }}>
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
          <Link style={{ marginRight: '15px' }} to="/">Início</Link>
          <Link style={{ marginRight: '15px' }} to="/about">Sobre</Link>
          <Link to="/contact">Contato</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;