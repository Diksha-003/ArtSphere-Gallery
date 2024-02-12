import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #555;
  color: #fff;
  padding: 10px;
  text-align: right;
`;

const LogoutButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const Header = ({ username, handleLogout }) => {
  return (
    <HeaderContainer>
      <span>Welcome, {username}</span>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;