import { useState } from "react";
import "./Bill.css";

import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BillPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalCost = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handlePayment = () => {
    alert('Payment successful!');
    localStorage.removeItem('cart');
    setCart([]); // Clear cart from state as well
    navigate('/');
  };

  const handleBackToProducts = () => {
    navigate('/product'); // Navigate to the Product Page
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updatedCart[index].subtotal = updatedCart[index].price * updatedCart[index].quantity;
    updateCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updatedCart[index].subtotal = updatedCart[index].price * updatedCart[index].quantity;
      updateCart(updatedCart);
    }
  };

  const removeProduct = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2>Bill</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>
                    <Button variant="outline-primary" onClick={() => decreaseQuantity(index)}>-</Button>
                    <span>{product.quantity}</span>
                    <Button variant="outline-primary" onClick={() => increaseQuantity(index)}>+</Button>
                  </td>
                  <td>${product.price * product.quantity}</td>
                  <td>
                    <Button variant="danger" onClick={() => removeProduct(index)}>Remove</Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}><strong>Total:</strong></td>
                <td><strong>${totalCost}</strong></td>
              </tr>
            </tbody>
          </Table>

          {/* Payment Button */}
          <Button variant="success" onClick={handlePayment} className="me-2">
            Pay Now
          </Button>

          {/* Back to Products Button */}
          <Button variant="success" onClick={handleBackToProducts}>
            Back to Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BillPage;
