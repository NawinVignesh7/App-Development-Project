import React from 'react';
import './Girls.css';
import doll1 from './Assets/ag1.jpg';
import craft1 from './Assets/ag2.jpg';
import plush1 from './Assets/ag3.jpg';

function Girls({ addToCart, addToWishlist }) {
  // Array of toys for girls
  const toys = [
    { id: 1, name: 'Classic Doll', price: 24.99, img: doll1, description: 'A timeless doll for imaginative play.' },
    { id: 2, name: 'Craft Kit', price: 29.99, img: craft1, description: 'A creative kit for hands-on crafting fun.' },
    { id: 3, name: 'Plush Toy', price: 19.99, img: plush1, description: 'Soft and cuddly plush toy for comfort and play.' },
    { id: 4, name: 'Fashion Doll', price: 34.99, img: doll1, description: 'Stylish doll with accessories for endless fashion fun.' },
    { id: 5, name: 'DIY Jewelry Kit', price: 39.99, img: craft1, description: 'Create your own beautiful jewelry with this fun kit.' },
    { id: 6, name: 'Unicorn Plush Toy', price: 24.99, img: plush1, description: 'Magical unicorn plush toy for extra cuddles.' }
  ];

  // Array of categories for girls
  const categories = [
    { id: 1, name: 'Dolls', img: doll1, description: 'Beautiful dolls for imaginative play.' },
    { id: 2, name: 'Craft Kits', img: craft1, description: 'Creative kits for artistic fun.' },
    { id: 3, name: 'Plush Toys', img: plush1, description: 'Soft and cuddly toys for comfort and play.' }
  ];

  return (
    <div className="girls">
      <h1>Girl's Toys</h1>
      <p>Discover our delightful range of toys for girls! From dolls to craft kits, we have everything to inspire and entertain young girls.</p>

      <section className="featured-toys">
        <h2>Featured Toys</h2>
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
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <img src={category.img} alt={category.name} />
              <h3>{category.name}</h3>
              <p className="description">{category.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Girls;
