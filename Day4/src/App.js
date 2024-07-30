import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import About from './Components/About';
import Boys from './Components/Boys';
import Girls from './Components/Girls';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AdminNavbar from './Components/AdminNavbar';
import CartPage from './Components/CartPage';
import WishlistPage from './Components/WishlistPage';
import Notification from './Components/Notification';
import ToyDetails from './Components/ToyDetails';
import Payment from './Components/Payment';
import AdminDashboard from './Components/AdminDashboard'; // Import the AdminDashboard component
import AdminProducts from './Components/AdminProducts'; // Import AdminProducts component
import AdminFeedback from './Components/AdminFeedback'; // Import AdminFeedback component
import AdminReports from './Components/AdminReports'; // Import AdminReports component
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState({ message: '', key: 0 });

  const toys = [
    { id: 1, name: 'Building Blocks', price: 29.99, img: './Components/Assets/img2.jpg', description: 'Colorful blocks to enhance creativity and motor skills.', type: 'featured' },
    { id: 2, name: 'Plush Bear', price: 19.99, img: './Components/Assets/img3.jpg', description: 'Ultra-soft and cuddly bear for endless snuggling.', type: 'featured' },
    { id: 3, name: 'Kidding Toy', price: 39.99, img: './Components/Assets/img2.jpg', description: 'Engaging toy with interactive components for fun and learning.', type: 'featured' },
    { id: 10, name: 'Magic Wand', price: 14.99, img: './Components/Assets/img1.jpg', description: 'Spark your imagination with this magical wand.', type: 'featured' },
    { id: 11, name: 'Robot Dog', price: 49.99, img: './Components/Assets/img2.jpg', description: 'A friendly robot dog that follows your commands.', type: 'featured' },
    { id: 12, name: 'Art Kit', price: 24.99, img: './Components/Assets/img3.jpg', description: 'Everything you need for a creative art session.', type: 'featured' },
    { id: 13, name: 'Toy Drum', price: 15.99, img: './Components/Assets/img2.jpg', description: 'Fun and interactive drum set for kids.', type: 'featured' },
    { id: 14, name: 'Puzzle Cube', price: 9.99, img: './Components/Assets/img3.jpg', description: 'Challenging puzzle cube to keep you engaged.', type: 'featured' },
    { id: 15, name: 'Toy Airplane', price: 29.99, img: './Components/Assets/img1.jpg', description: 'Fly high with this amazing toy airplane.', type: 'featured' },
    { id: 16, name: 'Dinosaur Figure', price: 19.99, img: './Components/Assets/img2.jpg', description: 'Detailed dinosaur figure for imaginative play.', type: 'featured' },
    { id: 4, name: 'Toy Car', price: 14.99, img: './Components/Assets/img1.jpg', description: 'Fast and fun toy car for racing enthusiasts.', type: 'new' },
    { id: 5, name: 'Puzzle Game', price: 24.99, img: './Components/Assets/img2.jpg', description: 'Challenging puzzle game to stimulate the mind.', type: 'new' },
    { id: 6, name: 'Action Figure', price: 34.99, img: './Components/Assets/img3.jpg', description: 'Detailed action figure for imaginative play.', type: 'new' },
    { id: 17, name: 'RC Helicopter', price: 59.99, img: './Components/Assets/img1.jpg', description: 'Fly high with this amazing RC Helicopter.', type: 'new' },
    { id: 21, name: 'Yo-Yo', price: 7.99, img: './Components/Assets/img2.jpg', description: 'Classic toy for endless fun.', type: 'new' },
    { id: 7, name: 'Doll House', price: 49.99, img: './Components/Assets/img1.jpg', description: 'Beautiful doll house with intricate details.', type: 'best' },
    { id: 8, name: 'Train Set', price: 44.99, img: './Components/Assets/img2.jpg', description: 'Complete train set for hours of fun.', type: 'best' },
    { id: 9, name: 'Lego Set', price: 59.99, img: './Components/Assets/img3.jpg', description: 'Large Lego set to build and create.', type: 'best' },
  ];

  const addToCart = (item) => {
    if (loggedIn) {
      const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        const newCart = [...cart];
        newCart[existingItemIndex].quantity += 1;
        setCart(newCart);
      } else {
        setCart([...cart, { ...item, quantity: 1 }]);
      }
      setNotification({ message: 'Added to cart', key: Date.now() });
    } else {
      alert('Please sign in or register to add items to the cart.');
    }
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const updateQuantity = (index, quantity) => {
    if (quantity <= 0) {
      removeFromCart(index);
    } else {
      const newCart = [...cart];
      newCart[index].quantity = quantity;
      setCart(newCart);
    }
  };

  const addToWishlist = (item) => {
    if (loggedIn) {
      setWishlist([...wishlist, item]);
      setNotification({ message: 'Added to wishlist', key: Date.now() });
    } else {
      alert('Please sign in or register to add items to the wishlist.');
    }
  };

  const removeFromWishlist = (index) => {
    const newWishlist = wishlist.filter((_, i) => i !== index);
    setWishlist(newWishlist);
  };

  const moveToCart = (index) => {
    const item = wishlist[index];
    addToCart(item);
    removeFromWishlist(index);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
    setCart([]);
    setWishlist([]);
  };

  const clearNotification = () => {
    setNotification({ message: '', key: Date.now() });
  };

  return (
    <Router>
      <div>
        {user?.role === 'admin' ? (
          <AdminNavbar loggedIn={loggedIn} onLogout={handleLogout} />
        ) : (
          <Navbar loggedIn={loggedIn} cart={cart} wishlist={wishlist} onSearch={handleSearch} onLogout={handleLogout} />
        )}
        {notification.message && (
          <Notification key={notification.key} message={notification.message} clearNotification={clearNotification} />
        )}
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} addToWishlist={addToWishlist} searchQuery={searchQuery} />} />
          <Route path="/about" element={<About />} />
          <Route path="/boys" element={<Boys addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/girls" element={<Girls addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser} />} />
          <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setUser={setUser} />} />
          <Route path="/profile" element={loggedIn ? <Profile user={user} onUpdate={setUser} onLogout={handleLogout} /> : <Navigate to="/" replace />} />
          <Route path="/cart" element={loggedIn ? <CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} /> : <Navigate to="/login" replace />} />
          <Route path="/wishlist" element={loggedIn ? <WishlistPage wishlist={wishlist} removeFromWishlist={removeFromWishlist} moveToCart={moveToCart} /> : <Navigate to="/login" replace />} />
          <Route path="/toys/:id" element={<ToyDetails toys={toys} addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/payment" element={loggedIn ? <Payment cart={cart} /> : <Navigate to="/login" replace />} />
          <Route path="/admin-dashboard" element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/" replace />} />
          <Route path="/admin/products" element={user?.role === 'admin' ? <AdminProducts /> : <Navigate to="/" replace />} />
          <Route path="/admin/feedback" element={user?.role === 'admin' ? <AdminFeedback /> : <Navigate to="/" replace />} />
          <Route path="/admin/reports" element={user?.role === 'admin' ? <AdminReports /> : <Navigate to="/" replace />} />
          {loggedIn && <Route path="*" element={<Navigate to="/" replace />} />}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;