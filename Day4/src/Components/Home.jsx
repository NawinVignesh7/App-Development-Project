import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import ag1 from './Assets/ag1.jpg';
import ag2 from './Assets/ag2.jpg';
import ag3 from './Assets/ag3.jpg';
import gal1 from './Assets/gal1.jpeg';
import gal2 from './Assets/gal2.jpeg';
import './Home.css';

function Home({ addToCart, addToWishlist, searchQuery }) {
  const toys = [
    { id: 1, name: 'Building Blocks', price: 29.99, img: img2, description: 'Colorful blocks to enhance creativity and motor skills.', type: 'featured' },
    { id: 2, name: 'Plush Bear', price: 19.99, img: img3, description: 'Ultra-soft and cuddly bear for endless snuggling.', type: 'featured' },
    { id: 3, name: 'Kidding Toy', price: 39.99, img: img1, description: 'Engaging toy with interactive components for fun and learning.', type: 'featured' },
    { id: 10, name: 'Magic Wand', price: 14.99, img: img1, description: 'Spark your imagination with this magical wand.', type: 'featured' },
    { id: 11, name: 'Robot Dog', price: 49.99, img: img2, description: 'A friendly robot dog that follows your commands.', type: 'featured' },
    { id: 12, name: 'Art Kit', price: 24.99, img: img3, description: 'Everything you need for a creative art session.', type: 'featured' },
    { id: 13, name: 'Toy Drum', price: 15.99, img: img2, description: 'Fun and interactive drum set for kids.', type: 'featured' },
    { id: 14, name: 'Puzzle Cube', price: 9.99, img: img3, description: 'Challenging puzzle cube to keep you engaged.', type: 'featured' },
    { id: 15, name: 'Toy Airplane', price: 29.99, img: img1, description: 'Fly high with this amazing toy airplane.', type: 'featured' },
    { id: 16, name: 'Dinosaur Figure', price: 19.99, img: img2, description: 'Detailed dinosaur figure for imaginative play.', type: 'featured' },
    { id: 4, name: 'Toy Car', price: 14.99, img: img1, description: 'Fast and fun toy car for racing enthusiasts.', type: 'new' },
    { id: 5, name: 'Puzzle Game', price: 24.99, img: img2, description: 'Challenging puzzle game to stimulate the mind.', type: 'new' },
    { id: 6, name: 'Action Figure', price: 34.99, img: img3, description: 'Detailed action figure for imaginative play.', type: 'new' },
    { id: 17, name: 'RC Helicopter', price: 59.99, img: img1, description: 'Fly high with this amazing RC Helicopter.', type: 'new' },
    { id: 21, name: 'Yo-Yo', price: 7.99, img: img2, description: 'Classic toy for endless fun.', type: 'new' },
    { id: 7, name: 'Doll House', price: 49.99, img: img1, description: 'Beautiful doll house with intricate details.', type: 'best' },
    { id: 8, name: 'Train Set', price: 44.99, img: img2, description: 'Complete train set for hours of fun.', type: 'best' },
    { id: 9, name: 'Lego Set', price: 59.99, img: img3, description: 'Large Lego set to build and create.', type: 'best' },
  ];

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderToys = (type) => (
    <div className="toy-list">
      {filteredToys
        .filter((toy) => toy.type === type)
        .map((toy) => (
          <div key={toy.id} className="toy-item">
            <Link to={`/toys/${toy.id}`}>
              <img src={toy.img} alt={toy.name} />
            </Link>
            <h3>{toy.name}</h3>
            <p className="description">{toy.description}</p>
            <div className="review-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="toy-details">
              <span className="price">${toy.price}</span>
              <button className="add-to-cart" onClick={() => addToCart(toy)}>Add to Cart</button>
              <button className="add-to-wishlist" onClick={() => addToWishlist(toy)}>Add to Wishlist</button>
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <div className="home">
      <h1>Welcome to Joyville</h1>
      <p>Discover the best toys for every child!</p>

      <section className="featured-toys">
        <h2>Featured Toys</h2>
        {renderToys('featured')}
      </section>

      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        {renderToys('new')}
      </section>

      <section className="best-sellers">
        <h2>Best Sellers</h2>
        {renderToys('best')}
      </section>

      <hr />
      <h1>Kids Age Groups</h1>
      <div className="toy-list">
        <div className="toy-item">
          <img src={ag1} alt="0-5 Years" />
          <h3>0-5 Years</h3>
        </div>
        <div className="toy-item">
          <img src={ag2} alt="5-9 Years" />
          <h3>5-9 Years</h3>
        </div>
        <div className="toy-item">
          <img src={ag3} alt="15+ Years" />
          <h3>15+ Years</h3>
        </div>
      </div>

      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-images">
          <img src={gal1} alt="Gallery Image 1" />
          <img src={gal2} alt="Gallery Image 2" />
          <img src={img3} alt="Gallery Image 3" />
        </div>
      </section>
    </div>
  );
}

export default Home;
