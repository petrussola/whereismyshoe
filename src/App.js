// DEPENDENCIES
import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';

// COMPONENTS
import Shoes from './Views/Shoes';
import EditShoe from './Views/EditShoe';
import NavBar from './Views/NavBar';
import Boxes from './Views/Boxes';

// CONTEXT
import ShoesContext from './Contexts/ShoesContext';

// STYLES
import './App.css';

function App(props) {
  const [shoes, setShoes] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [shoeInBox, setShoeInBox] = useState([]);
  const [editedShoe, setEditedShoe] = useState({});

  const editShoeHandler = shoe => {
    setEditedShoe(shoe);
    props.history.push(`/edit/${shoe.id}`);
  };

  const context = {
    shoes,
    setShoes,
    editShoeHandler,
    editedShoe,
    boxes,
    setBoxes,
    shoeInBox,
    setShoeInBox
  };

  return (
    <ShoesContext.Provider value={context}>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Shoes} />
        <Route path="/edit/:shoeId" component={EditShoe} />
        <Route path="/boxes" component={Boxes} />
      </div>
    </ShoesContext.Provider>
  );
}

export default withRouter(App);
