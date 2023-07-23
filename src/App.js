import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';

const Home = () => (
  <div>
    <h1>Welcome to my Portfolio</h1>
    <Link to="/about">About Me</Link>
  </div>
);



const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} Your Name</p>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
