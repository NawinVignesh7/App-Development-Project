import React from 'react';
import './WishlistPage.css';

function WishlistPage({ wishlist, removeFromWishlist, moveToCart }) {
  const handleRemove = (index) => {
    if (window.confirm('Are you sure you want to remove this item from your wishlist?')) {
      removeFromWishlist(index);
    }
  };

  const handleMoveToCart = (index) => {
    if (window.confirm('Are you sure you want to move this item to your cart?')) {
      moveToCart(index);
    }
  };

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist ({wishlist.length} items)</h1>
      {wishlist.length > 0 ? (
        <div className="wishlist-list">
          {wishlist.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={require(`../../public/images/${item.img}`)} alt={item.name} className="wishlist-item-image" />
              <div className="wishlist-item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <div className="wishlist-item-actions">
                  <button 
                    onClick={() => handleRemove(index)} 
                    aria-label={`Remove ${item.name} from wishlist`}
                  >
                    Remove
                  </button>
                  <button 
                    onClick={() => handleMoveToCart(index)} 
                    aria-label={`Move ${item.name} to cart`}
                  >
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}

export default WishlistPage;
