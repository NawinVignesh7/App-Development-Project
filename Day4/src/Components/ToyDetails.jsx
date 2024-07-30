import React from 'react';
import { useParams } from 'react-router-dom';
import './ToyDetails.css';
import img from './Assets/img2.jpg'
function ToyDetails({ toys, addToCart, addToWishlist }) {
  const { id } = useParams();

  const toy = toys.find(toy => toy.id === parseInt(id));
  const imgPath = toy.img.replace('./Components', '.');
  
  console.log(imgPath);
  if (!toy) {
    return <div>Toy not found</div>;
  }
  // console.log(toy.img);

  return (
    <div className="toy-details-page">
      <h1>{toy.name}</h1>
      <img src={require(`${imgPath}`)} alt={toy.name} />
      <p className="description">{toy.description}</p>
      <p className="price">${toy.price.toFixed(2)}</p>
      <button className="add-to-cart" onClick={() => addToCart(toy)}>Add to Cart</button>
      <button className="add-to-wishlist" onClick={() => addToWishlist(toy)}>Add to Wishlist</button>
    </div>
  );
}

export default ToyDetails;
