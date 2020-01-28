// DEPENDENCIES
import React, { useContext } from 'react';
import styled from 'styled-components';

// COMPONENTS
import ShoeCard from '../Components/ShoeCard';

// CONTEXT
import ShoesContext from '../Contexts/ShoesContext';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Shoes = () => {
  const { shoes } = useContext(ShoesContext);
  return (
    <StyledContainer>
      {shoes.map(shoe => {
        return <ShoeCard shoe={shoe} key={shoe.id} />;
      })}
    </StyledContainer>
  );
};

export default Shoes;
