// DEPENDENCIES
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

// COMPONENTS
import ShoeCard from '../Components/ShoeCard';

// CONTEXT
import ShoesContext from '../Contexts/ShoesContext';

// CONFIg
import db from '../config/firebase';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Shoes = () => {
  const { shoes, setShoes } = useContext(ShoesContext);
  const initialShoes = [];
  useEffect(() => {
    db.collection('shoes')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          initialShoes.push({ doc, data: doc.data() });
        });
        setShoes(initialShoes);
      });
  }, []);
  return (
    <StyledContainer>
      {shoes.map(shoe => {
        return <ShoeCard shoe={shoe} key={shoe.id} />;
      })}
    </StyledContainer>
  );
};

export default Shoes;
