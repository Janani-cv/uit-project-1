import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      <header className="navbar">
        <div className="logo">PHARMA</div>
        
        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-user"></i>
        </div>
      </header>

      <section className="hero">
        <div className="overlay">
          <h4>Effective Medicine. New Medicine Everyday</h4>
          
          <h1>Welcome to PHARMA</h1>
          <div className="video-container">
      <video
        src="/mediv.mp4" // If it's in public/
        autoPlay
        muted
        loop
        className="scrolling-video"
      />
    </div>
          <a href="/product" className="cta-button"><b>SHOP NOW</b></a>
        </div>
      </section>

      <section className="info-boxes">
      <div className="box blue">
        <i className="fas fa-shipping-fast"></i>
        <h3>Fast Delivery</h3>
        <p>Quick doorstep delivery across India.</p>
      </div>
      <div className="box green">
        <i className="fas fa-capsules"></i>
        <h3>Genuine Medicines</h3>
        <p>100% authentic and verified products.</p>
      </div>
      <div className="box orange">
        <i className="fas fa-headset"></i>
        <h3>24/7 Support</h3>
        <p>Expert assistance anytime you need.</p>
      </div>
    </section>
    


    </div>
  );
};

export default Home;