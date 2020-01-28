// DEPENDENCIES
import React, { useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';

// COMPONENTS
import Shoes from './Views/Shoes';
import EditShoe from './Views/EditShoe';
import NavBar from './Views/NavBar';

// CONTEXT
import ShoesContext from './Contexts/ShoesContext';

// HELPERS
import db from './config/firebase';

// STYLES
import './App.css';

function App({ history }) {
  const [shoes, setShoes] = useState([]);
  const [editedShoe, setEditedShoe] = useState({});
  const [fetchDataBoolean, changeFetchDataBoolean] = useState(false);

  const initialShoes = [];

  useEffect(() => {
    db.collection('shoes')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          initialShoes.push(doc);
        });
        setShoes(initialShoes);
        changeFetchDataBoolean(false);
      });
  }, [fetchDataBoolean]);

  const editShoeHandler = shoe => {
    setEditedShoe(shoe);
    history.push(`/edit/${shoe.id}`);
  };

  return (
    <ShoesContext.Provider
      value={{
        shoes,
        setShoes,
        editShoeHandler,
        editedShoe,
        changeFetchDataBoolean
      }}
    >
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Shoes} />
        <Route path="/edit/:shoeId" component={EditShoe} />
      </div>
    </ShoesContext.Provider>
  );
}

export default withRouter(App);
