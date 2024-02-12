// Profile.jsx
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './Profile.css';
import { Navigationbar } from './Navigationbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Profile() {
  const name = sessionStorage.getItem('userName');
  const email = sessionStorage.getItem('userEmail');
  const newid = sessionStorage.getItem('userId');
  const userDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et facilisis justo, eu ultrices ex. Proin consequat augue vel justo consequat, sit amet scelerisque nunc luctus."

  return (
    <>
      <Navigationbar />
      <Container className="mt-5">
        <h2 className="mb-4 head">Welcome {name}...</h2>
        <Card className="card">
          <Card.Header className="card-header">
            <h3>User's Profile</h3>
          </Card.Header>
          <Card.Body className="card-body">
            <div className="text-center mb-4">
              <img className='newImg' src={`http://localhost:8080/user/fetch/profilePic/${newid}`} alt="Profile Pic" />
            </div>
            <div style={{ marginTop: '30px', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
              <div style={{ marginTop: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#555' }}>Name</h4>
                  <p>{name}</p>
                </div>
                <div>
                  <h4 style={{ color: '#555' }}>Email</h4>
                  <p>{email}</p>
                </div>
                <div>
                  <h4 style={{ color: '#555' }}>Description</h4>
                  <p>{userDescription}</p>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <div className="social-links">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                </a>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Profile;
