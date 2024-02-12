import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AdminPrivateRoute } from "../../components/PrivateRoute";

const SidebarContainer = styled.div`
  width: 220px;
  color: #;
  padding: 20px;
`;

const NavLinkCard = styled(Link)`
  display: block;
  margin: 10px 0;
  padding: 15px;
  background-color: #808080;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;


const Sidebar = () => {
  return (
    <>
    <SidebarContainer>
      <NavLinkCard to="/user-details"><AdminPrivateRoute>Users</AdminPrivateRoute></NavLinkCard>
      <NavLinkCard to="/artist-list"><AdminPrivateRoute>Artists</AdminPrivateRoute></NavLinkCard>
      <NavLinkCard to="/admin/AllOrders">Deleted Users</NavLinkCard>
      <NavLinkCard to="/admin/CustomerManagement">Deleted Artists</NavLinkCard>
    </SidebarContainer>
    </>
  );
};

export default Sidebar;