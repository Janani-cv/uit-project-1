import { useState } from "react";
import Swal from "sweetalert2";
import "./order.css";

const OrderPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    product: "",
    quantity: 1,
    cash: "",
    deliveryType: "cashOnDelivery",
    paymentMethod: "cod",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.product.trim()) newErrors.product = "Product is required";
    if (!formData.quantity || formData.quantity <= 0)
      newErrors.quantity = "Quantity must be greater than 0";
    if (!formData.cash.trim() || isNaN(formData.cash))
      newErrors.cash = "Enter a valid cash amount";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Order Placed!",
            text: "Your order has been placed successfully.",
          });

          setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            product: "",
            quantity: 1,
            cash: "",
            deliveryType: "cashOnDelivery",
            paymentMethod: "cod",
          });
          setErrors({});
        } else {
          const errorData = await response.json();
          Swal.fire({
            icon: "error",
            title: "Error",
            text: errorData.message || "Failed to place order.",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to place order. Please try again later.",
        });
      }
    }
  };

  return (
    <div
      className="order-page"
      style={{
        background: "url('/public/bue.jpeg') no-repeat center center/cover",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit} className="order-form">
        {/* Name */}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        {/* Address */}
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
          />
          {errors.address && <div className="error">{errors.address}</div>}
        </div>

        {/* Product */}
        <div className="form-group">
          <label>Product:</label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className={`form-control ${errors.product ? "is-invalid" : ""}`}
          >
            <option value="">Select Product</option>
            <option value="paracetamol">Paracetamol</option>
            <option value="ibuprofen">Ibuprofen</option>
            <option value="antibiotics">Antibiotics</option>
            <option value="vitamins">Vitamins</option>
             <option value="aspirin">Aspirin</option>
            <option value="Firstaid">First-Aidkit</option>
            <option value="thermometer">Thermometer</option>
            <option value="cough">CoughSyrup</option>
            <option value="inhaler">Inhaler</option>
            <option value="nasal">Nasal Spray</option>
            <option value="amoxicilin">Amoxicilin</option>
            <option value="oflamac">Oflamac</option>
            <option value="lipbalm">Lip-Balm</option>
            <option value="shmpooo">Shampoo</option>
            <option value="tissues">Tissues</option>
            <option value="Antacid Tablets">Antacid Tablets</option>
          </select>
          {errors.product && <div className="error">{errors.product}</div>}
        </div>

        {/* Quantity */}
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className={`form-control ${errors.quantity ? "is-invalid" : ""}`}
          />
          {errors.quantity && <div className="error">{errors.quantity}</div>}
        </div>

        {/* Total Cash */}
        <div className="form-group">
          <label>Total Cash:</label>
          <input
            type="text"
            name="cash"
            value={formData.cash}
            onChange={handleChange}
            className={`form-control ${errors.cash ? "is-invalid" : ""}`}
          />
          {errors.cash && <div className="error">{errors.cash}</div>}
        </div>

        {/* Payment Method */}
        <div className="form-group">
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="form-control"
          >
            <option value="cod">Cash on Delivery</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
