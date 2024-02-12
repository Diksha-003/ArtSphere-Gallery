import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { isArtist, isAuthenticated, logout } from '../utils/TokenUtil';
import { useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export function AdminNavigationbar() {
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
          <Navbar.Brand href="/admin-dashboard">
            <span className="text-warning">Art</span>Sphere
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="me-2">
            <Nav className="me-auto">
              <LinkContainer to="/user-details">
                <Nav.Link>User List</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/artist-list">
                <Nav.Link>Artist List</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/deleted-user-list">
                <Nav.Link>Deleted Users</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/deleted-artist-list">
                <Nav.Link>Deleted Artist</Nav.Link>
              </LinkContainer>
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
