// DEPENDENCIES
import React, { useEffect, useContext } from 'react';

// COMPONENTS
import BoxCard from '../Components/BoxCard';

// CONTEXT
import ShoesContext from '../Contexts/ShoesContext';

// HELPERS
import db from '../config/firebase';

let initialBoxes = [];

const Boxes = () => {
  const { boxes, setBoxes } = useContext(ShoesContext);
  useEffect(() => {
    initialBoxes = [];
    db.collection('boxes')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          initialBoxes.push(doc);
        });
        setBoxes(initialBoxes);
      });
  }, []);
  return (
    <div>
      <h3>You have {boxes.length} boxes:</h3>
      {!boxes ? (
        <div>Loading..</div>
      ) : (
        boxes.map(box => {
          return <BoxCard box={box} key={box.id} />;
        })
      )}
    </div>
  );
};

export default Boxes;
