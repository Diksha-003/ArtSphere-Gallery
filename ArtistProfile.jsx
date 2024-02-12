import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './ArtistProfile.css';
import { Navigationbar } from './Navigationbar';

function ArtistProfile() {
  const name = sessionStorage.getItem('userName');
  const email = sessionStorage.getItem('userEmail');
  const newid = sessionStorage.getItem('userId');
  
  const [userImages, setUserImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    fetchUserImages(newid);
  }, [newid]);

  const fetchUserImages = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/art/fetchArtPhotosByArtist/${userId}`);
      const data = await response.json();

      if (data.status) {
        setUserImages(data.list);
        setLoading(false);
      } else {
        console.error('Failed to fetch user images:', data.statusMessage);
      }
    } catch (error) {
      console.error('Error fetching user images:', error);
    }
  };

  const renderUserImages = () => {
    return (
      <div className="user-images">
        {loading ? (
          <p>Loading...</p>
        ) : (
          userImages.map((image, index) => (
            <img
              key={index}
              src={`http://localhost:8080/artist/fetch/pic/${image.id}`}
              alt={`User Image ${index + 1}`}
              className="user-image" 
            />
          ))
        )}
      </div>
    );
  };

  const handleChange = (event) => {
    setProfilePic(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!profilePic) {
      alert('Please select a profile picture before uploading.');
      return;
    }
  
    const formData = new FormData();
    formData.append('profilePic', profilePic);
  
    try {
      const response = await fetch(`http://localhost:8080/add-art/${formData}`, {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.status) {
        console.log('Profile picture uploaded successfully');
      } else {
        console.error('Failed to upload profile picture:', data.statusMessage);
      }
    } catch (error) {
      console.error('Error uploading profile picture:', error);
    }
  };
  

  return (
    <>
      <Navigationbar />
      <Container className="mt-5">
        <h2 className="mb-4 head">Welcome {name}...</h2>
        <Card className="card">
          <Card.Header className="card-header">
            <h3>Artist Profile</h3>
          </Card.Header>
          <Card.Body className="card-body">
            <div className="text-center mb-4">
              <img
                className="newImg"
                src={`http://localhost:8080/artist/fetch/profilePic/${newid}`}
                alt="Profile Pic"
              />
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
            <div style={{ marginTop: '30px' }}>
              <h4 style={{ color: '#555' }}>Uploaded Arts</h4>
              {renderUserImages()}
            </div>
            <div style={{ marginTop: '30px' }}>
              <h4 style={{ color: '#555' }}>Upload Profile Picture</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control type="file" name="profilePic" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" className="mt-2" onClick={handleUpload}>
                  Upload
                </Button>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ArtistProfile;
