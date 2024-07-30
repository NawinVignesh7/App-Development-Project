import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo1 from './Assets/logo1.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars, faTimes, faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar({ loggedIn, cart, wishlist, onSearch, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    navigate('/');
    setMenuOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
        <div className="logo">
          <img src={logo1} style={{ borderRadius: "45%" }} alt="Kids TOS" className="logo-img" />
          <span className="app-name">Joyville</span>
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li className="category-dropdown">
            <button onClick={toggleDropdown}>Category</button>
            <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              <li><Link to="/boys" onClick={() => setMenuOpen(false)}>Boys</Link></li>
              <li><Link to="/girls" onClick={() => setMenuOpen(false)}>Girls</Link></li>
              <li><Link to="/new-arrivals" onClick={() => setMenuOpen(false)}>Toddlers</Link></li>
            </ul>
          </li>
        </div>
      </div>
      <div className="nav-right">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search toys..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className="icons">
          {!loggedIn ? (
            <>
              <Link to="/login" className="nav-button" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="nav-button" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          ) : (
            <>
              <div className="icon profile-link">
                <Link to="/profile">
                  <FontAwesomeIcon icon={faUserCircle} />
                </Link>
              </div>
              <div className="icon cart">
                <Link to="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span className="badge">{cart.length}</span>
                </Link>
              </div>
              <div className="icon wishlist">
                <Link to="/wishlist">
                  <FontAwesomeIcon icon={faHeart} />
                  <span className="badge">{wishlist.length}</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
