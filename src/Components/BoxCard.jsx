// DEPENDENCIES
import React from 'react';
import TestComponent from './TestComponent';

const BoxCard = ({ box }) => {
  const theBox = box.data();

  return (
    <div>
      <h5>
        Box number {theBox.number} has {theBox.shoes.length} shoes:{' '}
      </h5>
      {theBox.shoes.map(shoe => {
        return <TestComponent shoe={shoe} />;
      })}
    </div>
  );
};

export default BoxCard;
