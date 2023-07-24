import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import './styles/AboutMe.css'; // Make sure to create the CSS file for styling
import mypic from './images/mypic.jpg';


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


const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1 className="heading">Your Name</h1>
      <div className="content-container">
        <div className="image-container">
          <img src={mypic} alt='image of mab'/>
        </div>
        <div className="text-container">
          <p>
            Your blurb of text goes here. Write about your background, skills,
            and any other information you want to share with visitors.
          </p>
        </div>
      </div>
      <footer className="footer">Your Footer Content</footer>
    </div>
  );
};


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
