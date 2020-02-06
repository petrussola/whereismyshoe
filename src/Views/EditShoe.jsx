// DEPENDENCIES
import React, { useContext } from 'react';
import { Formik } from 'formik';

// COMPONENTS
import EditForm from '../Components/EditForm';

// CONTEXT
import ShoesContext from '../Contexts/ShoesContext';

// HELPERS
import db from '../config/firebase';

const EditShoe = ({ history, match }) => {
  const { editedShoe } = useContext(ShoesContext);
  const { shoeId } = match.params;
  const handleEditShoe = values => {
    db.collection('shoes')
      .doc(shoeId)
      .update(values)
      .then(() => {
        history.push('/');
      });
  };
  return (
    <div>
      <h1>Edit shoe form:</h1>
      <Formik
        initialValues={editedShoe.data}
        onSubmit={handleEditShoe}
        component={EditForm}
      />
    </div>
  );
};

export default EditShoe;
