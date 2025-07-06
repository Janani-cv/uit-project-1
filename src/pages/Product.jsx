import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const ProductPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    let newCart;

    if (existing) {
      newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    navigate('/bill');
  };

  const products = [
    { id: 1, name: 'Paracetamol Tablets', price: 70, image: 'PYREMUST-650-TAB.jpg', description: 'Relieves headaches and fever', category: 'Medicines' },
    { id: 2, name: 'Vitamin C Capsules', price: 80, image: 'Untitled.jpg', description: 'Boosts immune system', category: 'Supplements' },
    { id: 3, name: 'Band-Aids', price: 30, image: '67c35a4f80926964af41b9e8-band-aid-brand-flexible-fabric-adhesive.jpg', description: 'For minor cuts and scrapes', category: 'First Aid' },
    { id: 4, name: 'Aspirin', price: 50, image: 'aspirin.jpg', description: 'Pain reliever and anti-inflammatory', category: 'Medicines' },
    { id: 5, name: 'Cough Syrup', price: 60, image: 'cough syrup.jpg', description: 'Soothes cough and sore throat', category: 'Medicines' },
    { id: 6, name: 'Hand Sanitizer', price: 20, image: 'sanitizer.avif', description: 'Kills 99.9% of germs', category: 'Hygiene' },
    { id: 7, name: 'Antiseptic Cream', price: 45, image: 'antiseptic.jpg', description: 'For cuts, burns, and scrapes', category: 'First Aid' },
    { id: 8, name: 'Thermometer', price: 50, image: 'thermometer.jpg', description: 'Accurate temperature measurement', category: 'Accessories' },
    { id: 9, name: 'Elastic Bandage', price: 50, image: 'elastic bangase.jpg', description: 'Ideal for sprains and strains', category: 'First Aid' },
    { id: 10, name: 'Face Masks', price: 60, image: 'face mask.jpg', description: 'Protection from dust and germs', category: 'Hygiene' },
    { id: 11, name: 'First Aid Kit', price: 200, image: 'csgjz_512.webp', description: 'Complete emergency care supplies', category: 'First Aid' },
    { id: 12, name: 'Pain Relief Gel', price: 30, image: 'pain relief.jpg', description: 'Topical gel for muscle pain relief', category: 'Medicines' },
    { id: 13, name: 'Cold Compress', price: 15, image: 'coldcompress.jpg', description: 'Helps reduce swelling and pain', category: 'Accessories' },
    { id: 14, name: 'Inhaler', price: 130, image: 'asthalin-inhaler.jpg', description: 'For asthma and breathing issues', category: 'Medicines' },
    { id: 15, name: 'T.moxikind cv 625', price: 25, image: '625.jpg', description: 'Long-lasting freshness all day', category: 'Medicines' },
    { id: 16, name: 'Sunscreen Lotion', price: 90, image: 'SPF50_Frontcopy3.webp', description: 'Protects your skin from harmful UV rays', category: 'Personal Care' },
    { id: 17, name: 'Omee20', price: 35, image: 'omee.avif', description: 'Cleans and nourishes your hair', category: 'Medicines' },
    { id: 18, name: 'Toothpaste', price: 20, image: 'c.webp', description: 'Freshens breath and protects against cavities', category: 'Hygiene' },
    { id: 19, name: 'Toothbrush', price: 25, image: 'toothbrush.webp', description: 'For a clean and healthy smile', category: 'Hygiene' },
    { id: 20, name: 'T.cefixime200', price: 20, image: 'cefix_200mg.bmp', description: 'Treats bacterial infections', category: 'Medicines' },
    { id: 21, name: 'Lip Balm', price: 40, image: 'lip-balm.jpg', description: 'Keeps lips soft and hydrated', category: 'Personal Care' },
    { id: 22, name: 'Oflamac400', price: 12, image: 'oflomac.webp', description: 'Helps treat bacterial infections', category: 'Medicines' },
    { id: 23, name: 'Cifrofiox200', price: 6, image: 'cifochem.webp', description: 'Treats various bacterial infections', category: 'Medicines' },
    { id: 24, name: 'Naproxen', price: 5, image: 'naproxen.jpg', description: 'Reduces fever and pain', category: 'Medicines' },
    { id: 25, name: 'Cotton Swabs', price: 30, image: 'cotton swabs.jpg', description: 'Soft and gentle on skin', category: 'Hygiene' },
    { id: 26, name: 'Cotton Pads', price: 50, image: 'cotton pads.jpg', description: 'Perfect for bodycare routines', category: 'Hygiene' },
    { id: 27, name: 'Ranitidine', price: 30, image: 'ranitidine.jpg', description: 'Prevents stomach ulcers', category: 'Medicines' },
    { id: 28, name: 'Lisinopril', price: 15, image: 'lisinopril.png', description: 'Used to treat high blood pressure', category: 'Medicines' },
    { id: 29, name: 'Face Wash', price: 40, image: 'facewash.avif', description: 'Cleanses and refreshes your face', category: 'Personal Care' },
    { id: 30, name: 'Loratadine', price: 20, image: 'loratadine-.jpeg', description: 'Relieves allergy symptoms', category: 'Medicines' },
    { id: 31, name: 'Ciprofioxacin', price: 15, image: 'ciprofloxa.jpg', description: 'Treats bacterial infections', category: 'Medicines' },
    { id: 32, name: 'Tissues', price: 60, image: 'tissue.jpg', description: 'Soft tissues for everyday use', category: 'Hygiene' },
    { id: 33, name: 'Wipes', price: 70, image: 'wipes.webp', description: 'Gentle wipes for all-purpose cleaning', category: 'Hygiene' },
    { id: 34, name: 'Metformin', price: 12, image: 'metformin.jpg', description: 'Used to treat type 2 diabetes', category: 'Medicines' },
    { id: 35, name: 'Amoxicillin', price: 8, image: 'amoxicillin.webp', description: 'Antibiotic for bacterial infections', category: 'Medicines' },
    { id: 36, name: 'Hair Oil', price: 30, image: 'hairoil.jpeg', description: 'Nourishes and strengthens hair', category: 'Personal Care' },
{ id: 37, name: 'Nasal Spray', price: 40, image: 'nasalspray.jpeg', description: 'Clears nasal congestion instantly', category: 'Medicines' },
{ id: 38, name: 'Disinfectant Spray', price: 55, image: 'disinfectantspray.jpeg', description: 'Kills 99.9% of viruses and bacteria', category: 'Hygiene' },
{ id: 39, name: 'Antacid Tablets', price: 20, image: 'antacid.jpeg', description: 'Relieves heartburn and indigestion', category: 'Medicines' },
{ id: 40, name: 'Moisturizer Cream', price: 90, image: 'moisturizer.jpeg', description: 'Hydrates and softens skin', category: 'Personal Care' },
{ id: 41, name: 'Mouthwash', price: 25, image: 'mouthwash.jpeg', description: 'Freshens breath and kills bacteria', category: 'Hygiene' },
{ id: 42, name: 'Eye Drops', price: 45, image: 'eyedrops.jpeg', description: 'Soothes dry and irritated eyes', category: 'Medicines' },
{ id: 43, name: 'Neem Soap', price: 20, image: 'neemsoap.jpeg', description: 'Antibacterial and natural cleanser', category: 'Hygiene' },
{ id: 44, name: 'Protein Powder', price: 120, image: 'protienpowder.jpeg', description: 'Supports muscle growth and recovery', category: 'Supplements' },
{ id: 45, name: 'Hair Shampoo', price: 45, image: 'shampoo.jpeg', description: 'Cleanses hair and removes oil', category: 'Personal Care' },
{ id: 46, name: 'Allergy Relief Tablets', price: 18, image: 'allergy.jpeg', description: 'Fast relief from sneezing and itching', category: 'Medicines' },
{ id: 47, name: 'Foot Cream', price: 35, image: 'foot cream.jpeg', description: 'Repairs cracked heels and dry feet', category: 'Personal Care' },
{ id: 48, name: 'Blood Pressure Monitor', price: 200, image: 'boodp.jpeg', description: 'Monitor your BP at home', category: 'Accessories' },
{ id: 49, name: 'Glucose Test Strips', price: 150, image: 'glucose.jpeg', description: 'Check sugar levels easily', category: 'Accessories' },
{ id: 50, name: 'Shaving Gel', price: 50, image: 'tshaving gel.jpeg', description: 'Smooth shave without irritation', category: 'Personal Care' },
{ id: 51, name: 'Multivitamin Gummies', price: 60, image: 'multivitamine.jpeg', description: 'Tasty daily vitamin boost', category: 'Supplements' },
{ id: 52, name: 'Oral Rehydration Salts (ORS)', price: 10, image: 'ors.jpeg', description: 'Replenishes lost fluids', category: 'Medicines' },
{ id: 53, name: 'Aloe Vera Gel', price: 100, image: 'aloevera.jpeg', description: 'Soothes skin and reduces inflammation', category: 'Personal Care' },
{ id: 54, name: 'Disposable Gloves', price: 15, image: 'gloves.jpeg', description: 'Single-use protection', category: 'Hygiene' },
{ id: 55, name: 'Nail Cutter Set', price: 50, image: 'nail.jpeg', description: 'Precision nail grooming kit', category: 'Accessories' },
{ id: 56, name: 'Omega-3 Fish Oil', price: 90, image: 'fishoil.jpeg', description: 'Supports heart & brain health', category: 'Supplements' },
{ id: 57, name: 'Sleeping Mask', price: 20, image: 'sleepmask.jpeg', description: 'Blocks light for better sleep', category: 'Accessories' },
{ id: 58, name: 'Heating Pad', price: 120, image: 'heatingpad.jpeg', description: 'Provides heat therapy for pain relief', category: 'Accessories' },
{ id: 59, name: 'Herbal Tea Bags', price: 35, image: 'herbal tea.jpeg', description: 'Boosts digestion and immunity', category: 'Supplements' },
{ id: 60, name: 'Hand Wash', price: 18, image: 'handwash.jpeg', description: 'Kills germs and keeps hands soft', category: 'Hygiene' },
{ id: 61, name: 'Anti-Dandruff Shampoo', price: 45, image: 'dandruffshampoo.jpeg', description: 'Removes dandruff and soothes scalp', category: 'Personal Care' },
{ id: 62, name: 'Earbuds', price: 3, image: 'earbuds.jpeg', description: 'Gentle cleaning for ears', category: 'Hygiene' },
{ id: 63, name: 'Hydrocortisone Cream', price: 35, image: 'cream.jpeg', description: 'Relieves itching and rashes', category: 'First Aid' },
{ id: 64, name: 'Zinc Tablets', price: 25, image: 'zinc.jpeg', description: 'Supports immune system function', category: 'Supplements' },
{ id: 65, name: 'Baby Diapers', price: 50, image: 'diapers.jpeg', description: 'Comfort and dryness for babies', category: 'Hygiene' },
{ id: 66, name: 'Medical Tape', price: 20, image: 'medicaltape.jpeg', description: 'Secures dressings and bandages', category: 'First Aid' },
{ id: 67, name: 'Nebulizer Kit', price: 220, image: 'nebulizer.jpeg', description: 'Effective asthma and respiratory treatment', category: 'Accessories' },
{ id: 68, name: 'Knee Support Brace', price: 275, image: 'kneebrace.jpeg', description: 'Provides joint stability', category: 'Accessories' },
{ id: 69, name: 'Anti-Fungal Powder', price: 30, image: 'antifungal.jpeg', description: 'Treats skin infections and itching', category: 'Medicines' },
{ id: 70, name: 'Surgical Face Mask', price: 50, image: 'surgicalmask.jpeg', description: 'Standard protection against airborne germs', category: 'Hygiene' },


  ];

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((product) => selectedCategory === 'All' || product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'lowToHigh') return a.price - b.price;
    if (sortOrder === 'highToLow') return b.price - a.price;
    return 0;
  });

  return (
    <Container>
      <h2 className="text-center my-4">Shop Our Products</h2>

      <Row className="mb-4">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="default">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {sortedProducts.map((product) => (
          <Col key={product.id} md={2} sm={6} xs={12} className="mb-4">
            <Card className="product-card h-100">
              <Card.Img variant="top" src={product.image} className="product-image" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="product-price">Price: ₹{product.price}</Card.Text>
                <Button variant="success" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
