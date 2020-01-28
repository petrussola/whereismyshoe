// DEPENDENCIES
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <h3>Where is my shoe?</h3>
      <div>
        <Link to="/">Shoes</Link>
        <Link to="/boxes">Boxes</Link>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
