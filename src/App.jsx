import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navigation from "./components/NavBar";
import Home from "./components/Home";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Bill from "./pages/Bill";
import Order from "./pages/Order";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("loggedIn");
    setIsAuthenticated(user === "true");
  }, [location]);

  // Show Navbar only for authenticated routes
  const publicRoutes = location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!publicRoutes && <Navigation />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/order" element={<Order />} />
            <Route path="/bill" element={<Bill />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </>
  );
};

export default App;
