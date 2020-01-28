// DEPENDENCIES
import React, { useContext } from 'react';
import styled from 'styled-components';

// CONTEXT
import ShoesContext from '../Contexts/ShoesContext';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 350px;
  box-shadow: 0.5rem 0.5rem 1rem gray;
  background: white;
  .pic-container {
    height: 65%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .description-container {
    height: 35%;
  }
  .description-props {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ShoeCard = ({ shoe }) => {
  const { editShoeHandler } = useContext(ShoesContext);
  const shoeDoc = shoe.data();
  return (
    <StyledCard>
      {}
      <div className="pic-container">
        <img src={shoeDoc.photo_url} alt="shoe" />
      </div>
      <div className="description-container">
        <h3>{shoeDoc.name}</h3>
        <div className="description-props">
          <div>
            <h5>Style: {shoeDoc.style}</h5>
            <h5>Season: {shoeDoc.season}</h5>
          </div>
          <div>
            <h5>Box: XX</h5>
            <button onClick={() => editShoeHandler(shoe)}>Edit</button>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default ShoeCard;
