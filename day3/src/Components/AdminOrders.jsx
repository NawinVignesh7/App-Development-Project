import React, { useEffect, useState } from 'react';
import './AdminOrders.css'; // Make sure to create and style this file accordingly

// Example data for orders
const exampleOrders = [
  { id: 1, productId: 1, quantity: 2, status: 'Shipped' },
  { id: 2, productId: 5, quantity: 1, status: 'Processing' },
  { id: 3, productId: 7, quantity: 1, status: 'Delivered' },
  { id: 4, productId: 10, quantity: 3, status: 'Cancelled' },
  { id: 5, productId: 12, quantity: 4, status: 'Shipped' },
];

// Example toy data
const toys = [
  { id: 1, name: 'Building Blocks', price: 29.99 },
  { id: 2, name: 'Plush Bear', price: 19.99 },
  { id: 3, name: 'Kidding Toy', price: 39.99 },
  { id: 4, name: 'Magic Wand', price: 14.99 },
  { id: 5, name: 'Robot Dog', price: 49.99 },
  { id: 6, name: 'Art Kit', price: 24.99 },
  { id: 7, name: 'Toy Drum', price: 15.99 },
  { id: 8, name: 'Puzzle Cube', price: 9.99 },
  { id: 9, name: 'Toy Airplane', price: 29.99 },
  { id: 10, name: 'Dinosaur Figure', price: 19.99 },
  { id: 11, name: 'Toy Car', price: 14.99 },
  { id: 12, name: 'Puzzle Game', price: 24.99 },
  { id: 13, name: 'Action Figure', price: 34.99 },
  { id: 14, name: 'RC Helicopter', price: 59.99 },
  { id: 15, name: 'Yo-Yo', price: 7.99 },
];

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching orders
    setOrders(exampleOrders);
  }, []);

  return (
    <div className="admin-orders">
      <h1>Manage Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => {
            // Find the product details based on the productId
            const product = toys.find(toy => toy.id === order.productId);
            return (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{product ? product.name : 'Unknown'}</td>
                <td>{order.quantity}</td>
                <td>${product ? (product.price * order.quantity).toFixed(2) : '0.00'}</td>
                <td>{order.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrders;
