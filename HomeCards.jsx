import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../img_jewl/newcard/1.jpg';
import img2 from '../img_jewl/newcard/2.jpg';
import img3 from '../img_jewl/newcard/3.jpg';
import img4 from '../img_jewl/newcard/i2.webp';
import img5 from '../img_jewl/newcard/5.jpg';
import img6 from '../img_jewl/newcard/i7 (2).png';
import img7 from '../img_jewl/newcard/i3.webp';
import img8 from '../img_jewl/newcard/i4.webp';
import './HomeCards.css';

function HomeCards() {
    const cardsData = [
        { path: img1, name: 'Eternal Elegance', text: 'Embrace timeless beauty with the Eternal Elegance necklace.' },
        { path: img2, name: 'Radiant Reverie', text: 'Savor the dreamy allure of the Radiant Reverie necklace.' },
        { path: img3, name: 'Mystic Serenity', text: 'Experience the calming aura of the Mystic Serenity necklace.' },
        { path: img4, name: 'Opulent Opal', text: 'Indulge in the opulence of the Opulent Opal necklace.' },
        { path: img5, name: 'Golden Goddess', text: 'Adorn yourself with the divine charm of the Golden Goddess necklace.' },
        { path: img6, name: 'Enchanting Essence', text: 'Immerse yourself in the enchanting essence of this exquisite necklace.' },
        { path: img7, name: 'Timeless Treasure', text: 'Discover the timeless allure of the Timeless Treasure necklace.' },
        { path: img8, name: 'Royal Radiance', text: 'Experience the regal beauty of the Royal Radiance necklace.' },
      ];
      
      
    

    return (
        <Container>
            <Row className="container text-center mt-5">
                <h2>Elevate your style with our new collection of Necklaces at SwarnaRatna</h2>
            </Row>
            <Row xs={1} md={4} className="g-3 mt-3">
                {cardsData.map((card, idx) => (
                    <Col key={idx}>
                        <Card className="custom-card">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + card.path} style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
                            <Card.Body className="text-center">
                                <Card.Title><h3>{card.name}</h3></Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>     
        </Container>
    );
}

export default HomeCards;
