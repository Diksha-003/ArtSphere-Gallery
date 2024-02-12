import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { isArtist, isAuthenticated, logout } from '../utils/TokenUtil';
import { useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export function Navigationbar() {
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    logout();
    navigate('/');
  };

  const handleProfileClick = () => {
    if (!isArtist()) {  
      navigate('/user-profile');
    } else {
      navigate('/artist-profile');
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <span className="text-warning">Art</span>Sphere
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="me-2">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/collections">
                <Nav.Link>Collections</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/artist-details">
                <Nav.Link>Artists</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/exhibition">
                <Nav.Link>Exhibitions</Nav.Link>
              </LinkContainer>

              <NavDropdown title="About" id="about-dropdown">
                <LinkContainer to="/about-us">
                  <NavDropdown.Item>About Us</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/contact-us">
                  <NavDropdown.Item>Contact Us</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>

            <Nav>
              {!isAuthenticated() ? (
                <>
                  <NavDropdown title={<FontAwesomeIcon icon={faUser} size="lg" color="white" />} id="profile-dropdown">
                    <LinkContainer to="/log-in">
                      <NavDropdown.Item>Log In</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/artist-register">
                      <NavDropdown.Item>SignUp-Artist</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/sign-up">
                      <NavDropdown.Item>SignUp-User</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin-log-in">
                      <NavDropdown.Item>Admin</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <NavDropdown title={<FontAwesomeIcon icon={faUser} size="lg" color="white" />} id="profile-dropdown">
                    <NavDropdown.Item onClick={handleProfileClick}>
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogOutClick}>
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
