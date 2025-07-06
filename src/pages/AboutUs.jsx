import React from 'react';

const AboutUs = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "url(C:\'uit\ex-4 uit project\public\medipic.jpg') no-repeat center center/cover",
        
        minHeight: '100vh',
        color: '#000',
      }}
    >
      <div className="container bg-white bg-opacity-75 p-4 rounded">
        <h2 className="text-center text-primary" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>About Us</h2>

        <p className="text-center" style={{ fontSize: '1.2rem', color: '#555' }}>
          Welcome to <span style={{ color: 'violet' }}>Online Medical Store</span>! Your one-stop destination for reliable healthcare products.
        </p>

        <div className="row mt-4">
          <div className="col-md-6">
            <h4 style={{ color: '#007BFF' }}>Our Story</h4>
            <p>
              Online Medical Store was founded by <b>Janani</b>, an entrepreneur with a vision to revolutionize access to medical products and services...
            </p>
          </div>
          <div className="col-md-6">
            <h4 style={{ color: '#007BFF' }}>Our Mission</h4>
            <p>
              Our mission is simple – to make healthcare more accessible, affordable, and reliable for everyone...
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h4 style={{ color: '#007BFF' }}>Our Core Values</h4>
          <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <li><b>Quality:</b> We guarantee genuine, high-quality medical products that you can trust.</li>
            <li><b>Convenience:</b> Shopping for medical essentials should be easy and hassle-free...</li>
            <li><b>Affordability:</b> We strive to offer competitive pricing...</li>
            <li><b>Reliability:</b> From fast deliveries to reliable customer support...</li>
          </ul>
        </div>

        <div className="text-center my-5">
          <video width="80%" controls>
            <source src="/videos/medical.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <h4 style={{ color: '#007BFF' }}>Why Choose Us?</h4>
          <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <li><b>Wide Product Range:</b> From prescription medications to health supplements...</li>
            <li><b>Competitive Pricing:</b> Affordable pricing with the best deals and discounts.</li>
            <li><b>Fast & Reliable Delivery:</b> We ensure your orders are delivered securely and on time.</li>
            <li><b>Secure Shopping Experience:</b> Our website employs the latest security protocols...</li>
          </ul>
        </div>

        <div className="mt-5 text-center">
          <h5 style={{ color: '#007BFF' }}>Get in Touch</h5>
          <p>If you have any questions or need assistance, feel free to reach out to our team...</p>
          <p>Thank you for choosing <span style={{ color: 'violet' }}>Online Medical Store</span> for your healthcare needs!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;