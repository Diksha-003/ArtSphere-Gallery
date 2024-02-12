import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../img_art/crausal/11.jpg';
import img2 from '../img_jewl/reviews/1.jpg';
import img3 from '../img_jewl/reviews/2.jpg';
import img4 from '../img_jewl/reviews/3.jpg';
import img5 from '../img_jewl/reviews/4.jpg';
import img6 from '../img_jewl/reviews/5.jpg';
import img7 from '../img_jewl/reviews/6.jpg';

import './Reviews.css';
import Carousel from 'react-bootstrap/Carousel';

function Reviews() {
    return (
        <>
          <div className='section'>
            <h2>Art Gallery Reviews</h2>
          </div>
          <Card className="bg-dark text-white position-relative">
            <Card.Img src={img1} alt="Card background" className='bkg' style={{ width: '100%', height: '90vh', objectFit: 'cover' }} />
            <div className="overlay"></div>
            <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <Carousel fade className="card-carousel" indicators={false} controls={false} interval={5000} pause={false}>
                <Carousel.Item>
                  <img src={img2} alt="Reviewer avatar" className="reviewer-avatar" />
                  <h4>
                    "The art gallery is a hidden gem! I love the way each piece tells a different story, and the atmosphere inside is perfect for immersing oneself in the world of art."
                  </h4>
                  <p>-- Art Explorer 1 --</p>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img7} alt="Reviewer avatar" className="reviewer-avatar" />
                  <h4>
                    "Attending exhibitions at this gallery is always a delight. The curation is excellent, showcasing a variety of styles and mediums. It's a haven for art enthusiasts."
                  </h4>
                  <p>-- Art Aficionado 2 --</p>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img3} alt="Reviewer avatar" className="reviewer-avatar" />
                  <h4>
                    "The gallery's commitment to supporting local artists is commendable. The diverse range of artworks reflects the rich talent within the community."
                  </h4>
                  <p>-- Local Art Advocate 3 --</p>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img4} alt="Reviewer avatar" className="reviewer-avatar" />
                  <h4>
                    "I've attended several art events here, and each time I'm impressed by the engaging exhibitions. The gallery's contribution to the art scene is invaluable."
                  </h4>
                  <p>-- Art Enthusiast 4 --</p>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img5} alt="Reviewer avatar" className="reviewer-avatar" />
                  <h4>
                    "The gallery's staff is knowledgeable and passionate about art. Their insights and willingness to share information enhance the overall experience for visitors."
                  </h4>
                  <p>-- Informed Visitor 5 --</p>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img6} alt="Reviewer avatar" className="reviewer-avatar" />
                  <h4>
                    "As an artist, I'm grateful for the opportunities the gallery provides. It's a platform that fosters creativity and encourages artists to push boundaries."
                  </h4>
                  <p>-- Grateful Artist 6 --</p>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img7} alt="Reviewer avatar" className="reviewer-avatar" />
                  <h4>
                    "The gallery's commitment to creating an inclusive space for art appreciation is commendable. It welcomes diverse perspectives and encourages dialogue."
                  </h4>
                  <p>-- Inclusive Art Enthusiast 7 --</p>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img6} alt="Reviewer avatar" className="reviewer-avatar" />
                  <h4>
                    "I recently discovered this gallery, and I'm impressed by its dedication to showcasing emerging artists. It's become my go-to place for discovering new talents."
                  </h4>
                  <p>-- Emerging Artist Fan 8 --</p>
                </Carousel.Item>
              </Carousel>
            </Card.ImgOverlay>
          </Card>
        </>
      );
}

export default Reviews;
