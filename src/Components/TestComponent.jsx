import React, { useEffect, useState } from 'react';

// HELPERS
import db from '../config/firebase';

const TestComponent = ({ shoe }) => {
  
  const [hell, setHell] = useState();

  useEffect(() => {
    db.collection('shoes')
      .doc(shoe.id)
      .get()
      .then(doc => {
        setHell(doc.data());
      });
  }, []);

  return <div>{hell ? hell.season : 'loading...'}</div>;
};

export default TestComponent;
