import React from 'react';
import './Exhibition.css';
import { Navigationbar } from './Navigationbar';

const exhibitionsData = [
  {
    id: 1,
    title: 'The Grand Indian Art Exhibition',
    date: '2023-05-15',
    venue: 'National Art Gallery, New Delhi',
    description:
      'Explore the rich tapestry of Indian art at this grand exhibition, featuring works from renowned and emerging artists across the country.',
    image: 'https://www.saic.edu/sites/default/files/styles/16_9_1992x1120/public/2023-06/030223_2234_0.jpg.webp?itok=Jl7Iy4XX',
    status: 'future',
  },
  {
    id: 2,
    title: 'Contemporary Expressions: A Modern Art Showcase',
    date: '2023-06-20',
    venue: 'Mumbai Art Center, Mumbai',
    description:
      'Immerse yourself in the vibrant world of contemporary Indian art. This exhibition showcases innovative and thought-provoking works by contemporary artists pushing boundaries.',
    image: 'https://theglossarymagazine.com/wp-content/uploads/elementor/thumbs/RA_SUMMER_22-170-q7nvvuymfpry6c955u5bah9tsp6bwj8r38ac3mu0n0.webp',
    status: 'future',
  },
  {
    id: 3,
    title: 'Rediscovering Tradition: Classic Indian Masterpieces',
    date: '2023-03-10',
    venue: 'Kolkata Art Museum, Kolkata',
    description:
      'Journey through the timeless classics of Indian art. This exhibition pays homage to traditional Indian masterpieces, celebrating the beauty and heritage of our artistic roots.',
    image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/03/23/thumbs/800x531/26574.jpg?v=1584966017',
    status: 'past',
  },
  {
    id: 4,
    title: 'Colors of India: A Palette of Diversity',
    date: '2023-08-25',
    venue: 'Chennai Art Pavilion, Chennai',
    description:
      'Experience the vibrant hues and diverse artistic expressions of India. This exhibition showcases the myriad colors and cultural richness that define our nation.',
    image: 'https://www.jameshempel.com/wp-content/uploads/2019/06/Art-Exhibition.jpg',
    status: 'future',
  },
  {
    id: 5,
    title: 'Abstract Explorations: Beyond Boundaries',
    date: '2023-07-15',
    venue: 'Bengaluru Art Space, Bengaluru',
    description:
      'Dive into the world of abstract art, where boundaries fade, and imagination takes center stage. This exhibition features abstract works by contemporary artists.',
    image: 'https://images.mid-day.com/images/images/2023/jul/soloexhibition_d.jpg',
    status: 'future',
  },
  {
    id: 6,
    title: 'Ephemeral Elegance: Paper Art Showcase',
    date: '2023-04-05',
    venue: 'Jaipur Art Hub, Jaipur',
    description:
      'Witness the delicate beauty of paper art in this unique showcase. Artists transform paper into intricate masterpieces, exploring themes of transience and elegance.',
    image: 'https://www.nationalgallery.sg/sites/default/files/20211117_JO2_8461_MIDRES.jpg',
    status: 'future',
  },
  {
    id: 7,
    title: 'Sculpting Dreams: 3D Art Extravaganza',
    date: '2023-09-10',
    venue: 'Hyderabad Sculpture Park, Hyderabad',
    description:
      'Step into the world of three-dimensional art. This exhibition features sculptures that come to life, telling stories and inviting viewers to explore from every angle.',
    image: 'https://listart.mit.edu/sites/default/files/styles/landscape_crop_100/public/media/images/2022-09/1a3a2781.jpg.webp?itok=nfghkBtU',
    status: 'future',
  },
  {
    id: 8,
    title: 'Natures Canvas: Landscape Impressions',
    date: '2023-01-20',
    venue: 'Shimla Art Retreat, Shimla',
    description:
      'Celebrate the beauty of nature through landscape art. Artists capture the essence of scenic vistas, inviting viewers to experience the tranquility of the great outdoors.',
    image: 'https://offloadmedia.feverup.com/secretsanfrancisco.com/wp-content/uploads/2023/08/13021836/murakami-1-1024x645.jpg',
    status: 'past',
  },
];

const Exhibition = () => {
    return (
        <>
        <Navigationbar />
        <div className="exhibition-container">
          <h2 className="exhibition-title">Art-Sphere Exhibitions</h2>
          <div className="exhibition-list">
            {exhibitionsData.map((exhibition) => (
              <div key={exhibition.id} className={`exhibition-card ${exhibition.status}`}>
                <img src={exhibition.image} alt={exhibition.title} className="exhibition-image" />
                <h3 className="exhibition-name">{exhibition.title}</h3>
                <p className="exhibition-info">
                  <span className="exhibition-label">Date:</span> {exhibition.date}
                </p>
                <p className="exhibition-info">
                  <span className="exhibition-label">Venue:</span> {exhibition.venue}
                </p>
                <p className="exhibition-description">{exhibition.description}</p>
              </div>
            ))}
          </div>
        </div>
        </>
      );
};

export default Exhibition;
