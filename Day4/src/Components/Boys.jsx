import React from 'react';
import './Boys.css';
import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import action1 from './Assets/ag1.jpg';
import action2 from './Assets/ag2.jpg';
import action3 from './Assets/ag3.jpg';
import robo from './Assets/Boys/robot.jpg'
import racecar from './Assets/Boys/race car.jpg'
import hero from './Assets/Boys/hero.jpg'

function Boys({ addToCart, addToWishlist }) {
  const toys = [
    { id: 1, name: 'Building Blocks', price: 29.99, img: img2, description: 'Colorful blocks to enhance creativity and motor skills.' },
    { id: 2, name: 'Plush Bear', price: 19.99, img: img3, description: 'Ultra-soft and cuddly bear for endless snuggling.' },
    { id: 3, name: 'Kidding Toy', price: 39.99, img: img1, description: 'Engaging toy with interactive components for fun and learning.' },
    { id: 4, name: 'Superhero Figure', price: 24.99, img: hero, description: 'Action-packed superhero for thrilling playtime.' },
    { id: 5, name: 'Robot Kit', price: 49.99, img: robo, description: 'Build your own robot and program it to move.' },
    { id: 6, name: 'Race Car Set', price: 34.99, img: racecar, description: 'High-speed race cars for competitive fun.' },
  ];

  return (
    <div className="boys">
      <h1>Featured Toys for Boys</h1>
      <section className="featured-toys">
        <h2>Top Picks</h2>
        <div className="toy-list">
          {toys.slice(0, 3).map((toy) => (
            <div key={toy.id} className="toy-item">
              <img src={toy.img} alt={toy.name} />
              <h3>{toy.name}</h3>
              <p className="description">{toy.description}</p>
              <div className="review-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <i key={i} className={i < Math.floor(toy.price / 10) ? "fas fa-star" : "far fa-star"}></i>
                ))}
              </div>
              <div className="toy-details">
                <span className="price">${toy.price}</span>
                <button className="add-to-cart" onClick={() => addToCart(toy)}>Add to Cart</button>
                <button className="add-to-wishlist" onClick={() => addToWishlist(toy)}>Add to Wishlist</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="popular-toys">
        <h2>Popular Toys</h2>
        <div className="toy-list">
          {toys.slice(3).map((toy) => (
            <div key={toy.id} className="toy-item">
              <img src={toy.img} alt={toy.name} />
              <h3>{toy.name}</h3>
              <p className="description">{toy.description}</p>
              <div className="review-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <i key={i} className={i < Math.floor(toy.price / 10) ? "fas fa-star" : "far fa-star"}></i>
                ))}
              </div>
              <div className="toy-details">
                <span className="price">${toy.price}</span>
                <button className="add-to-cart" onClick={() => addToCart(toy)}>Add to Cart</button>
                <button className="add-to-wishlist" onClick={() => addToWishlist(toy)}>Add to Wishlist</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="toy-categories">
        <h2>Categories</h2>
        <div className="category-list">
          <div className="category-item">
            <img src={action1} alt="Action Figures" />
            <h3>Action Figures</h3>
            <p className="description">Popular characters for imaginative play.</p>
          </div>
          <div className="category-item">
            <img src={action2} alt="Building Sets" />
            <h3>Building Sets</h3>
            <p className="description">Constructive fun with various building kits.</p>
          </div>
          <div className="category-item">
            <img src={action3} alt="Vehicles" />
            <h3>Vehicles</h3>
            <p className="description">Toy cars, trucks, and more for racing adventures.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Boys;
