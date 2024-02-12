import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import jewelry1 from '../img_jewl/pds/1.webp';
import jewelry2 from '../img_jewl/pds/2.jpg';
import jewelry3 from '../img_jewl/pds/3.webp';
import jewelry4 from '../img_jewl/pds/4.jpg';
import jewelry5 from '../img_jewl/pds/5.webp';
import jewelry6 from '../img_jewl/pds/6.webp';
import jewelry7 from '../img_jewl/pds/7.webp';
import jewelry8 from '../img_jewl/pds/8.jpg';
import jewelry9 from '../img_jewl/pds/9.webp';
import jewelry10 from '../img_jewl/pds/10.jpg';
import jewelry11 from '../img_jewl/pds/11.webp';
import jewelry12 from '../img_jewl/pds/12.jpg';
import jewelry13 from '../img_jewl/pds/13.webp';
import jewelry14 from '../img_jewl/pds/14.webp';
import jewelry15 from '../img_jewl/pds/15.jpg';
import jewelry16 from '../img_jewl/pds/16.jpg';
import jewelry17 from '../img_jewl/pds/17.webp';
import jewelry18 from '../img_jewl/pds/18.webp';
import jewelry19 from '../img_jewl/pds/19.jpg';
import jewelry20 from '../img_jewl/pds/20.webp';
import { Navigationbar } from './Navigationbar';
import { Link } from 'react-router-dom';
import './Productcards.css';

function ProductCards() {
  const cardsData = [
    { path: jewelry1, name: 'Diamond Elegance Necklace', price: 5000, pid: 101 },
    { path: jewelry2, name: 'Emerald Dream Ring', price: 5500, pid: 102 },
    { path: jewelry3, name: 'Sapphire Serenity Bracelet', price: 7500, pid: 103 },
    { path: jewelry4, name: 'Ruby Radiance Earrings', price: 4000, pid: 104 },
    { path: jewelry5, name: 'Pearl Perfection Pendant', price: 4500, pid: 105 },
    { path: jewelry6, name: 'Gold Grace Anklet', price: 12000, pid: 106 },
    { path: jewelry7, name: 'Platinum Harmony Brooch', price: 9200, pid: 107 },
    { path: jewelry8, name: 'Rose Gold Eternity Ring', price: 8650, pid: 108 },
    { path: jewelry9, name: 'Amethyst Aura Necklace', price: 5000, pid: 109 },
    { path: jewelry10, name: 'Topaz Tranquility Bracelet', price: 5500, pid: 110 },
    { path: jewelry11, name: 'Opal Opulence Earrings', price: 7500, pid: 111 },
    { path: jewelry12, name: 'Silver Sparkle Nose Ring', price: 400, pid: 112 },
    { path: jewelry13, name: 'Turquoise Treasure Anklet', price: 4500, pid: 113 },
    { path: jewelry14, name: 'Rose Quartz Romance Ring', price: 12000, pid: 114 },
    { path: jewelry15, name: 'Citrine Cascade Bracelet', price: 9200, pid: 115 },
    { path: jewelry16, name: 'Peridot Paradise Earrings', price: 8650, pid: 116 },
    { path: jewelry17, name: 'Garnet Glamour Pendant', price: 4500, pid: 117 },
    { path: jewelry18, name: 'Emerald Enchantment Brooch', price: 12000, pid: 118 },
    { path: jewelry19, name: 'Diamond Dazzle Necklace', price: 9200, pid: 119 },
    { path: jewelry20, name: 'Sapphire Splendor Ring', price: 8650, pid: 120 },
  ];

  return (
    <>
      <Navigationbar></Navigationbar>
      <Container>
        <Row className="container text-center mt-5">
          <h2>Home {'>'} Shop Jewelry Online</h2>
        </Row>
        <Row xs={1} md={4} className="g-3 mt-3">
          {cardsData.map((card, idx) => (
            <Col key={idx}>
              <Card className="custom-card">
                <Card.Img variant="top" src={card.path} style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
                <Card.Body className="text-center">
                  <Card.Title>
                    <h3>{card.name}</h3>
                    <p>₹{card.price}</p>
                    <p>Product-id-{card.pid}</p>
                  </Card.Title>
                  <Link to="/add-to-cart">
                    <Button type='submit' variant="outline-secondary">Buy Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className=" justify content centre mt-5">
          <Button variant="outline-secondary">Explore More Jewelry</Button>
        </Row>
      </Container>
    </>
  );
}

export default ProductCards;
