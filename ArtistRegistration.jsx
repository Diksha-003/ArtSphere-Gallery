import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Navigationbar } from './Navigationbar';
import { register } from '../Services/UserService';
import { useNavigate } from 'react-router-dom';

const ArtistRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    artistName: '',
    artistEmail: '',
    artistPhone: '',
    artistPassword: '',
    profilePic: '', // Change this to an empty string
    artworksCreated: '',
    prizesWon: '',
    exhibitionsAttended: '',
    artStyle: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [signUpError, setSignUpError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      validateField(name, value);
    }
  };

  const validateField = (name, value) => {
    const errors = { ...formErrors };

    switch (name) {
      case 'artistName':
        errors.artistName = /^[A-Za-z\s]+$/.test(value) ? '' : 'Name should contain only letters and spaces';
        break;
      case 'artistPhone':
        errors.artistPhone = /^[0-9]{10}$/.test(value) ? '' : 'Phone should contain exactly 10 numbers';
        break;
      case 'artistEmail':
        errors.artistEmail = /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address';
        break;
      case 'artistPassword':
        errors.artistPassword =
          value.length >= 6 && /[A-Z]/.test(value) && /\d/.test(value) && /[!@#$%^&*(),.?":{}|<>]/.test(value)
            ? ''
            : 'Password must be at least 6 characters long, contain one uppercase letter, one number, and one special character';
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formErrors).some((error) => error !== '')) {
      return;
    }

    try {
      const formDataForUpload = new FormData();

      // Append form data excluding the file
      Object.keys(formData).forEach((key) => {
        if (key !== 'profilePic') {
          formDataForUpload.append(key, formData[key]);
        }
      });

      // Append the file separately
      formDataForUpload.append('profilePic', formData.profilePic);

      const result = await register(formDataForUpload);
      console.log(result);

      if (result.status === true) {
        alert(result.statusMessage || "Congratulations! You're officially a part of the club.");
        navigate('/log-in');
      } else {
        // Display an alert message with the error details
        alert(result.statusMessage || "Oops! It seems like you're already a member. Please Log In.");
        navigate('/log-in');
      }
    } catch (error) {
      console.log(error);
      setSignUpError(true);
      setTimeout(() => {
        setSignUpError(false);
      }, 2000);
    }

    console.log('Artist Data:', formData);
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      artistName: '',
      artistEmail: '',
      artistPhone: '',
      artistPassword: '',
      profilePic: '', // Change this from null to an empty string
      artworksCreated: '',
      prizesWon: '',
      exhibitionsAttended: '',
      artStyle: '',
    });
  };

  return (
    <>
      <Navigationbar />
      <Container>
        <h2 className="mt-5 text-center">Artist Registration</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Artist Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Artist Name"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleChange}
                />
                {formErrors.artistName && <Alert variant="danger" className="mt-2">{formErrors.artistName}</Alert>}
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Artist Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="Enter Artist Email"
                  name="artistEmail"
                  value={formData.artistEmail}
                  onChange={handleChange}
                />
                {formErrors.artistEmail && <Alert variant="danger" className="mt-2">{formErrors.artistEmail}</Alert>}
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Artist Phone</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Artist Phone"
                  name="artistPhone"
                  value={formData.artistPhone}
                  onChange={handleChange}
                />
                {formErrors.artistPhone && <Alert variant="danger" className="mt-2">{formErrors.artistPhone}</Alert>}
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="Enter Password"
                  name="artistPassword"
                  value={formData.artistPassword}
                  onChange={handleChange}
                />
                {formErrors.artistPassword && <Alert variant="danger" className="mt-2">{formErrors.artistPassword}</Alert>}
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" name="profilePic" onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Artworks Created</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Number of Artworks Created"
                  name="artworksCreated"
                  value={formData.artworksCreated}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Prizes Won</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Number of Prizes Won"
                  name="prizesWon"
                  value={formData.prizesWon}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Exhibitions Attended</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Exhibitions Attended"
                  name="exhibitionsAttended"
                  value={formData.exhibitionsAttended}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Art Style</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Art Style"
                  name="artStyle"
                  value={formData.artStyle}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={2}>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default ArtistRegistration;
