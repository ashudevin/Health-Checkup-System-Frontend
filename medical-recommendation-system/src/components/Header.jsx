// src/components/Header.jsx
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">❤️</span>
          <h1>HealthAssist</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-banner">
        <h2>Your Health Navigator</h2>
        <p>Select your symptoms to get potential diagnosis, precautions, and recommendations</p>
      </div>
    </header>
  );
};

export default Header;